<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiBusinessId } from '../config/api/business';
import { useRoute } from 'vue-router';

const route = useRoute();

const business = ref<Object>({});

const getBusiness = async() => {
  try {
    business.value = await apiBusinessId(route.params.id);
  } catch (err) {
    console.log(err)
  }
};

onMounted(() => {
  getBusiness();
});
</script>

<template>
  <main class="main">
    <section class="home">
      {{ business }}
    </section>
  </main>
</template>