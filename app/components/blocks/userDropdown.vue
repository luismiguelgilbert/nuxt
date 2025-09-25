<script lang="ts" setup>
import { signOut } from '@/lib/auth-client';
import { Settings2, LogOut } from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface User {
  user: {
    id: string;
    name: string;
    image?: string | null | undefined | undefined;
    email: string;
    createdAt: string;
    updatedAt: string;
    emailVerified: boolean;
  };
  session: {
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    expiresAt: string;
    token: string;
    ipAddress?: string | null | undefined | undefined;
    userAgent?: string | null | undefined | undefined;
  };
}
const session = ref<User>();
const userInitials = computed<string>(() => session.value?.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'NA');

// Fetch session without blocking rendering
try {
  useFetch('/api/auth/session', {
    method: 'GET',
    headers: useRequestHeaders(['cookie'])
  }).then(({ data, error }) => {
    if (error.value || !data.value?.user.id) {
      navigateTo('/login?invalid_session=true');
      return;
    }
    session.value = {
      user: data.value.user,
      session: data.value.session,
    };
  });
} catch (error) {
  console.error('Error fetching session:', error);
  await navigateTo('/login?invalid_session=true');
}

const closeSession = async () => {
  try {
    await signOut();
    await navigateTo('/login');
  } catch {
    console.error('Error during logout');
  }
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Avatar
        class="cursor-pointer h-6 md:h-10 w-6 md:w-10">
        <!-- <AvatarImage src="https://github.com/unovue.png" alt="@unovue" /> -->
        <AvatarImage
          v-if="session?.user.image"
          :src="session.user.image"
          :alt="session.user.email" />
        <AvatarFallback class="text-xs md:text-lg">
          {{ userInitials }}
        </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>
        {{ session?.user.email }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="cursor-pointer">
        <Settings2 class="mr-2 h-4 w-4" />
        Mi configuración
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer" @click="closeSession">
        <LogOut class="mr-2 h-4 w-4 text-red-500" />
        <span class="text-red-500">Cerrar sesión</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>