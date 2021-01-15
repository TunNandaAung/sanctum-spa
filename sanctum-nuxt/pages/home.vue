<template>
  <div>
    <p>Name: {{ $auth.user.name }}</p>
    <p>Email: {{ $auth.user.email }}</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      auth: this.$auth,
    }
  },
}
</script>