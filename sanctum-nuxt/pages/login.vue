<template>
  <div class="flex h-screen items-center justify-center">
    <form ref="loginform" @submit.prevent="login()" class="w-1/4 mx-auto p-4">
      <h1 class="font-semibold mb-2 text-xl">Login</h1>
      <div class="mb-4">
        <label for="email" class="block mb-1 text-sm">Email</label>
        <input
          type="email"
          name="email"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-1 text-sm">Password</label>
        <input
          type="password"
          name="password"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-10 w-full rounded"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: {},
    }
  },
  mounted() {
    // Before loading login page, obtain csrf cookie from the server.
    this.$axios.$get('/sanctum/csrf-cookie')
  },
  methods: {
    async login() {
      this.error = {}
      try {
        // Prepare form data
        const formData = new FormData(this.$refs.loginform)

        // Pass form data to `loginWith` function
        await this.$auth.loginWith('local', { data: formData })

        // Redirect user after login
        this.$router.push({
          path: '/home',
        })
      } catch (err) {
        this.error = err
        // do something with error
      }
    },
  },
}
</script>