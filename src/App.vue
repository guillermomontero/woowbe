<script setup lang="ts">
import HeaderComponent from './components/layout/HeaderComponent.vue';
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

const store = useAuthStore();

onMounted(() => {
  if (localStorage.getItem('token')) store.userLogged(localStorage.getItem('token'));
})
</script>

<template>
  <HeaderComponent />
  <router-view />
</template>