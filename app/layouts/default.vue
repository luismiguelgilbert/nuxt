<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { sidebarMenuList } from '~~/types/Menu';
import { getSession } from '@/lib/auth-client';
import {Loader} from "lucide-vue-next";

const theSidebarTrigger = useTemplateRef('theSidebarTrigger');
const session = useState<Session | undefined>('session');
const computedMenu = computed(() => {
  const groups = sidebarMenuList.map(group => {
    return {
      ...group,
      items: group.items.filter(x => !x.id || session.value?.roles.includes(x.id))
    }
  });
  
  return groups.filter(x => x.items.length > 0);
});
const routeTitle = computed(() => {
  let result = '';
  for (let group of computedMenu.value) {
    for (let item of group.items) {
      if (item.url === useRoute().path) {
        result = item.title;
        break;
      }
    }
  }
  
  return result;
});
const isLoading = ref<boolean>(false);

isLoading.value = true;
getSession().then((algo) => {
  //@ts-expect-error session is custom
  session.value = algo.data;
  isLoading.value = false;
})

</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" variant="sidebar"  >
      <SidebarContent>
        <SidebarGroup v-for="(group) in computedMenu" :key="group.title">
          <SidebarGroupLabel>{{ group.title }}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="menuItem in computedMenu.filter(g => g.title === group.title)" :key="menuItem.title">
                <SidebarMenuButton
                  v-for="item in menuItem.items"
                  asChild
                  :isActive="item.url === useRoute().path"
                  class="mb-0.5">
                  <NuxtLink
                    class="flex items-center gap-2"
                    :to="item.url"
                    :tooltip="item.title"
                    @click="theSidebarTrigger?.closeMobileDrawer">
                    <component :is="item.icon" />
                    <span>{{item.title}}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Loader v-if="isLoading" class="animate-spin size-6 w-full" />
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <header
        class="padding-safe my-header flex h-16 shrink-0 fixed border-b dark:border-b-neutral-800 bg-white dark:bg-zinc-900">
        <div class="flex w-full p-2 items-center justify-between">
          <div class="flex items-center gap-2">
            <SidebarTrigger
              ref="theSidebarTrigger"
              class="cursor-pointer" />
            {{ routeTitle }}
          </div>
          <div class="flex items-center gap-2">
            <Colortoggle />
            <BlocksUserDropdown />
          </div>
        </div>
      </header>
      <main class="mt-24 px-2 md:mt-20 md:px-4">
        <NuxtPage />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>

<style>
html, body, #__nuxt, #__layout {
  height: 100%;
  margin: 0;
  overscroll-behavior: none;
}
.my-header {
  width: -webkit-fill-available;
  width: -moz-available;
}
</style>