<script lang="ts" setup>
import { computed } from 'vue';
import router from '../../router';

interface Card {
  id: number,
  name: string,
  description: string,
  square_picture: string,
  sector: object
};

const props = defineProps<{
  item: Card
}>();

const filterCutText = computed(() => {
  if (props.item.description.length >= 70) return `${props.item.description.slice(0, 70).trim()}...`;
  return props.item.description;
});

const showOffers = () => {
  router.push(`/offers/${props.item.id}`)
};

</script>

<template>
  <article class="offers-card">
    <div class="row-nowrap-center-start">
      <div class="offers-card__img">
        <img :src="props.item.business.square_picture" :alt="props.item.name">
      </div>
      <div class="offers-card__name">
        <h2>{{ props.item.business.name }}</h2>
      </div>
    </div>
    <div class='divider'/>
    <div class="col-wrap-center-center">
      <div class="offers-card__description">
        <p>Por compras superiores a: {{ props.item.minimum_purchase_amount }}</p>
        <p>Reintegro de: {{ props.item.reward }}</p>
      </div>
    </div>
    <div class="col-wrap-center-center">
      <button @click="showOffers" class="business-card__button">Seleccionar</button>
    </div>
  </article>
</template>