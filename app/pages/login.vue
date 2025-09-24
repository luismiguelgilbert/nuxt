<script setup lang="ts">
import { AtSign, KeySquare, LogIn, DatabaseZap } from "lucide-vue-next";

definePageMeta({
  layout: 'empty'
})
</script>

<template>
  <div class="w-full sm:grid sm:grid-cols-2 sm:min-h-[calc(100dvh)] px-5 sm:px-0">
    <div class="flex items-center justify-center py-2 sm:py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <Card class="w-[350px] mt-12 md:mt-0" >
          <CardHeader>
            <CardTitle>Bienvenido a Framework</CardTitle>
            <CardDescription>Ingrese sus credencial para continuar</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              id="signin-form"
              class="padding-safe grid gap-4">
              <div class="grid gap-2 gap-y-5">
                <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="user_name">Usuario</Label>
                  <div class="relative w-full max-w-sm items-center">
                    <Input type="text" name="email" class="pl-10" />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                      <AtSign class="size-6 text-muted-foreground" />
                    </span>
                  </div>
                </div>
                <div class="grid w-full max-w-sm items-center gap-1.5">
                  <Label for="user_name">Contrase&#241;a</Label>
                  <div class="relative w-full max-w-sm items-center">
                    <Input id="search" type="password" name="password" class="pl-10" />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                      <KeySquare class="size-6 text-muted-foreground" />
                    </span>
                  </div>
                </div>
              </div>
  
              <Button
                class="h-12 w-full mt-2 cursor-pointer justify-between"
                @click="navigateTo('/')">
                Ingresar
                <LogIn name="i-lucide-log-in" class="size-6" />
              </Button>
              <!-- <p>Don't have an account? <a href="/signup">Sign up here</a>.</p> -->
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div class="hidden bg-neutral-950 sm:flex items-center justify-center py-2 sm:py-12">
      <div class="flex items-center gap-x-2">
        <DatabaseZap class="h-24 w-24 text-9xl text-primary-400 text-white" />
        <div class="grid grid-cols-1">
          <span class="text-3xl font-bold text-center text-neutral-100">
            Framework
          </span>
          <span class="text-xl font-semibold text-center text-neutral-300">
            Business Intelligence
          </span>
        </div>
      </div>
    </div>
  </div>
</template>