<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiUsers } from '../config/api/users';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref<Object>({});

onMounted(() => {
  getUser();
});

const getUser = async() => {
  try {
    user.value = await apiUsers();
  } catch (err) {
    console.log(err)
  }
};
</script>

<template>
  <main class="main">
    <section class="profile">
      <article class="profile__info">
        <p>Nombre: {{ user.first_name || 'No name' }}</p>
        <p>Apellido: {{ user.last_name || 'No lastname' }}</p>
        <p>Email: {{ user.email || 'No email' }}</p>
        <p>Último cambio de contraseña: {{ new Date(user.password_updated_at) }}</p>
      </article>
    </section>
  </main>
</template>