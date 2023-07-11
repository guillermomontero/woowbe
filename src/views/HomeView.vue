<script lang="ts" setup>
  import { useAuthStore } from '../stores/auth';
  const store = useAuthStore();

  console.log(store.isLogged);
</script>

<template>
  <h1>Home view</h1>

  <form action="">
    <input type="email" name="" id="">
    <input type="password" name="" id="">

    <button type="submit">Log in</button>
  </form>
</template>