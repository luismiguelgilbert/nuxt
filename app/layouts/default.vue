<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/login",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/login",
    icon: Settings,
  },
];
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem v-for="item in items" :key="item.title">
                  <SidebarMenuButton asChild>
                      <a :href="item.url">
                        <component :is="item.icon" />
                        <span>{{item.title}}</span>
                      </a>
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
            <!--
              <ModeToggle />
              <UserDropdown />
            -->
          </div>
        </div>
      </header>
      <main class="mt-24 px-2 md:mt-20 md:px-4">
        <NuxtPage />
      </main>
    </SidebarInset>
    <!-- <main class="w-full">
      <SidebarTrigger />
      <NuxtPage />
    </main> -->
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