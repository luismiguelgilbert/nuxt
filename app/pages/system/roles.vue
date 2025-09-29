<script setup lang="ts">
import type { Session } from '~~/types/Session';
const session = useState<Session | undefined>('session');
</script>

<template>
  <div>
    <div v-if="session?.roles?.includes('010200')">
      Mis roles
    </div>
    <div v-else>
      ...
    </div>
  </div>
</template>