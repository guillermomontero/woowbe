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

const showBusiness = () => {
  router.push(`/business/${props.item.id}`)
};

</script>

<template>
  <article class="business-card">
    <div class="row-nowrap-center-start">
      <div class="business-card__img">
        <img :src="props.item.square_picture" :alt="props.item.name">
      </div>
      <div class="business-card__name">
        <h2>{{ props.item.name }}</h2>
        <div class="business-card__name--category">
          <img :src="props.item.sector.icon" alt="">
          <p>{{ props.item.sector.name }}</p>
        </div>
      </div>
    </div>
    <div class='divider'/>
    <div class="col-wrap-center-center">
      <div class="business-card__description">
        <p>{{ filterCutText }}</p>
      </div>
    </div>
    <div class="col-wrap-center-center">
      <button @click="showBusiness" class="business-card__button">Ver más</button>
    </div>
  </article>
</template>