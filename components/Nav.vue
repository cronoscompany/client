<template>
  <div class="bg-green-500 text-white text-md">
    <nav class="container flex justify-between items-center mx-auto py-5 px-5">
      <span class="font-semibold text-2x1">Fredizy</span>
      <div class="spaxe-x-2">
        <template v-if="this.$auth.loggedIn">
          <span
            >Welcome,
            <NuxtLink to="/" class="hover:text-green-200">{{
              this.$auth.user.username
            }}</NuxtLink>
          </span>
          <NuxtLink to="/friends" class="hover:text-green-200">FRIENDS</NuxtLink>
          <NuxtLink to="/users" class="hover:text-green-200">USERS</NuxtLink>
          <NuxtLink to="/dashboard" class="hover:text-green-200"
            >DASHBOARD</NuxtLink
          >
          <a href="" @click.prevent="logout" class="hover:text-green-200"
            >LOGOUT</a
          >
        </template>
        <template v-else>
          <NuxtLink to="/auth/register" class="hover:text-green-200"
            >REGISTER</NuxtLink
          >
          <NuxtLink to="/auth/login" class="hover:text-green-200"
            >LOGIN</NuxtLink
          >
        </template>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$auth.logout()
    }
  }
}
</script>