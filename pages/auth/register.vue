<template>
  <div class="container mx-auto mt-24 sm:px-6 lg:px-8">
    <form
      @submit.prevent="register"
      class="bg-green-500 rounded mx-auto px-6 py-6 w-1/2"
      method="post"
    >
      <div class="flex flex-col mt-3">
        <input
          type="text"
          name="name"
          required
          v-model="form.name"
          id="name"
          class="px-2 py-1 rounded"
          placeholder="Nome"
        />
        <span class="text-red-200 italic" v-if="errors.name">
          {{ errors.name[0] }}
        </span>
      </div>
      <div class="flex flex-col mt-3">
        <input
          type="text"
          name="username"
          required
          v-model="form.username"
          id="username"
          class="px-2 py-1 rounded"
          placeholder="Nome de Usuário"
        />
        <span class="text-red-200 italic" v-if="errors.username">
          {{ errors.username[0] }}
        </span>
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
        <span class="text-red-200 italic" v-if="errors.email">
          {{ errors.email[0] }}
        </span>
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
        <span class="text-red-200 italic" v-if="errors.password">
          {{ errors.password[0] }}
        </span>
      </div>
      <div class="flex flex-col mt-3">
        <input
          type="password"
          required
          name="password_confirmation"
          v-model="form.password_confirmation"
          id="password_confirmation"
          class="px-2 py-1 rounded"
          placeholder="Confirmação de senha"
        />
        <span class="text-red-200 italic" v-if="errors.password_confirmation">
          {{ errors.password_confirmation[0] }}
        </span>
      </div>
      <div class="flex flex-col mt-3">
        <teal-button type="submit"> Registrar </teal-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  head: {
    title: " | Register",
    meta: [
      { hid: "description", name: "description", content: "Registration page" },
    ],
  },
  data: () => ({
    form: {
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    errors: [],
  }),
  methods: {
    async register() {
      try {
        let errors = [];
        await this.$axios.$get("sanctum/csrf-cookie");
        await this.$axios
          .$post("/register", this.form)
          .then((resp) => {})
          .catch((err) => {
            if ((err.response.status = 422)) {
              errors = err.response.data.errors;
            }
          });
        this.errors = errors;
        await this.$auth.loginWith("laravelSanctum", { data: this.form });
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>