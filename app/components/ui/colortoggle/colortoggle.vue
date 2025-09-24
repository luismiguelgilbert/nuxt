<script setup lang="ts">
import { SunMoon } from "lucide-vue-next";
import { useColorMode } from '@vueuse/core';

const mode = useColorMode()
</script>

<template>
  <SunMoon
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer p-2 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    :size="40"
    @click="() => mode = mode === 'dark' ? 'light' : 'dark'" />
</template>