<script setup lang="ts">
import type { Session } from '~~/types/Session';
const session = useState<Session | undefined>('session');
</script>

<template>
  <div>
    <div v-if="session?.roles?.includes('010100')">
      Mis usuarios
    </div>
    <div v-else>
      ...
    </div>
  </div>
</template>