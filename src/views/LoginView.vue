<script lang="ts" setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';

  const store = useAuthStore();

  const user = ref({
    email: '',
    password: null
  });

  const login = () => {
    const payload = {
      email: user.value.email,
      pswd: user.value.password
    };

    store.login(payload)
  };
</script>

<template>
  <main class="main">
    <section class="login">
      <div class="login__logo">
        <img src="https://uploads-ssl.webflow.com/60c723c53f9c48e5d08339d9/61b449e23af21432cdaef0ee_logo_woowbe_header.svg" alt="Woowbe logo">
      </div>
      <form class="login__form" @submit.prevent="login">
        <input type="email" placeholder="Email" name="email" id="form-email" v-model="user.email" class="login__form--input">
        <input type="password" placeholder="Password" name="password" id="form-password" v-model="user.password" class="login__form--input">

        <button type="submit" class="login__form--button">Log in</button>
      </form>
      <div class="login__links">
        <a href="#">Forgotten password?</a>
        <a href="#">Create new account</a>
      </div>
    </section>
  </main>
</template>