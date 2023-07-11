<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import router from '../../router/index';

const authStore = useAuthStore();
</script>

<template>
  <header v-if="authStore.isLogged" class="header">
    <div class="header__logo">
      <img src="https://uploads-ssl.webflow.com/60c723c53f9c48e5d08339d9/61b449e23af21432cdaef0ee_logo_woowbe_header.svg" alt="Woowbe logo">
    </div>
    <div class="header__actions">
      <button @click="router.push('/')">Negocios</button>
      <button @click="router.push('/offers')">Ofertas</button>
      <button @click="router.push('/points-of-sales')">Puntos de venta</button>
      <button @click="router.push('/profile')">Mi perfil</button>
      <button @click="authStore.logout">Salir</button>
    </div>
  </header>
</template>