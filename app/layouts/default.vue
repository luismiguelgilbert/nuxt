<script setup lang="ts">
import { Building2, CircleUserRound, Home, Inbox, UsersRound } from "lucide-vue-next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


const session = useState<Session | undefined>('session');
useFetch('/api/auth/session', { method: 'GET', headers: useRequestHeaders(['cookie']) })
  .then(async (response) => {
    if (!response.data.value?.user?.id) await navigateTo('/login?invalid_session=true');
    session.value = response.data.value;
});

const menu = [
  {
    title: 'Application',
    items: [
      { title: 'Inicio', url: '/', icon: Home },
      { title: 'Notificaciones', url: '/notifications', icon: Inbox },
    ]
  },
  {
    title: 'Sistema',
    items: [
      { title: 'Usuarios', url: '/system/users', icon: UsersRound },
      { title: 'Roles', url: '/system/roles', icon: CircleUserRound },
      { title: 'Organizaciones', url: '/system/organizations', icon: Building2 },
    ]
  }
];
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" variant="sidebar"  >
      <SidebarContent>
        <SidebarGroup v-for="(group) in menu" :key="group.title">
          <SidebarGroupLabel>{{ group.title }}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="menuItem in menu.filter(g => g.title === group.title)" :key="menuItem.title">
                <SidebarMenuButton
                  v-for="item in menuItem.items"
                  asChild
                  :isActive="item.url === useRoute().path"
                  class="mb-0.5">
                  <NuxtLink
                    class="flex items-center gap-2"
                    :to="item.url"
                    :tooltip="item.title">
                    <component :is="item.icon" />
                    <span>{{item.title}}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <header
        class="padding-safe my-header flex h-16 shrink-0 fixed border-b dark:border-b-neutral-800 bg-white dark:bg-zinc-900">
        <div class="flex w-full p-2 items-center justify-between">
          <div class="flex items-center gap-2">
            <SidebarTrigger class="cursor-pointer" />
            Titulo?
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