<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiPointsOfSalesId } from '../config/api/points-of-sales';
import { useRoute } from 'vue-router';

const route = useRoute();

const pointsOfSales = ref<Object>({});

const getPointsOfSalesId = async() => {
  try {
    pointsOfSales.value = await apiPointsOfSalesId(route.params.id);
  } catch (err) {
    console.log(err)
  }
};

onMounted(() => {
  getPointsOfSalesId();
});
</script>

<template>
  <main class="main">
    <section class="point-of-sales-item">
      {{ pointsOfSales }}
    </section>
  </main>
</template>