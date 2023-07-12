<script lang="ts" setup>
import { computed } from 'vue';
import router from '../../router';

interface Card {
  id: number,
  name: string,
  square_picture: string,
  sector: object,
  address: string,
  city: string,
  state: string
  postal_code: string
};

const props = defineProps<{
  item: Card
}>();

const showPointsOfSales = () => { router.push(`/points-of-sales/${props.item.id}`) };
</script>

<template>
  <article class="offers-card">
    <div class="row-nowrap-center-start">
      <div class="offers-card__img">
        <img :src="props.item.business.square_picture" :alt="props.item.name">
      </div>
      <div class="offers-card__name">
        <h2>{{ props.item.business.name }}</h2>
        <div class="business-card__name--category">
          <img :src="props.item.business.sector.icon" alt="">
          <p>{{ props.item.business.sector.name }}</p>
        </div>
      </div>
    </div>
    <div class='divider'/>
    <div class="col-wrap-center-center">
      <div class="offers-card__description">
        <p>Dirección: {{ props.item.address }}</p>
        <p>Ciudad: {{ props.item.city }}</p>
        <p>Provincia: {{ props.item.state }}</p>
        <p>CP: {{ props.item.postal_code }}</p>
      </div>
    </div>
    <div class="col-wrap-center-center">
      <button @click="showPointsOfSales" class="business-card__button">Seleccionar</button>
    </div>
  </article>
</template>