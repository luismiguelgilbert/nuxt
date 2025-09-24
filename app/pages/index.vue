<script setup lang="ts">
// working
// "display": "standalone",
// "theme_color": "#000000",
// "background_color": "#FF0000",

// working
// "display": "fullscreen", // working
// "theme_color": "#000000",
// "background_color": "#FF0000",

// removing, does it work?
// { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }, // NOT WORKING
</script>

<template>
  <div>
		<div class="flex flex-1 flex-col gap-4">
			<p>Homepage goes here...</p>
      <Button @click="navigateTo('/login')">
        Logout
      </Button>
			<div class="grid auto-rows-min gap-4 md:grid-cols-3">
				<div class="aspect-video rounded-xl bg-muted/90" />
				<div class="aspect-video rounded-xl bg-muted/90" />
				<div class="aspect-video rounded-xl bg-muted/90" />
			</div>
			<div class="min-h-[100dvh] flex-1 rounded-xl bg-muted/90" />
		</div>
		<br>
		<br>
	</div>
</template>