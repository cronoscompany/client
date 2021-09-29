<template>
  <div class="container mx-auto mt-24 sm:px-6 lg:px-8">
    <form
      @submit.prevent="login"
      class="bg-green-500 rounded mx-auto px-6 py-6 w-1/2"
      method="post"
    >
      <div class="flex flex-col mt-3" v-if="errors">
        <span class="text-red-200 italic">{{ errors }}</span>
      </div>
      <div class="flex flex-col mt-3">
        <input
          type="email"
          name="email"
          required
          v-model="form.email"
          id="email"
          class="px-2 py-1 rounded"
          placeholder="Email"
        />
      </div>
      <div class="flex flex-col mt-3">
        <input
          type="password"
          name="password"
          required
          v-model="form.password"
          id="password"
          class="px-2 py-1 rounded"
          placeholder="Senha"
        />
      </div>

      <div class="flex flex-col mt-3">
        <teal-button type="submit"> Login </teal-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  head: {
    title: " | Login",
    meta: [
      { hid: "description", name: "description", content: "Registration page" },
    ],
  },
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    errors: "",
  }),
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("laravelSanctum", { data: this.form });
      } catch (err) {
        if ((err.response.status = 422)) {
          this.errors = "Could not sign you in with those credentials.";
        }
      }
    },
  },
};
</script>

<style>
</style>