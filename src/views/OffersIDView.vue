<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiOffersId } from '../config/api/offers';
import { useRoute } from 'vue-router';
import router from '../router';

const route = useRoute();

const offers = ref({});

const getOffersId = async() => {
  try {
    offers.value = await apiOffersId(route.params.id);
  } catch (err) {
    console.log(err)
  }
};

onMounted(() => {
  getOffersId();
});

const goToOffers = () => {
  router.push('/offers');
}
</script>

<template>
  <main class="main">
    <section v-if="offers && offers.id" class="offers-item">
      <div class="offers-item__image">
        <img :src="offers.business.widescreen_picture" :alt="offers.business.name">
      </div>
      <article class="offers-item__info">
        <div class="offers-item__info--name">
          {{ offers.business.name }}
        </div>
        <div class="offers-item__info--offer">
          {{ offers.name }}
        </div>
      </article>
      <article class="offers-item__status">
        <div class="offers-item__status--label">{{ offers.status }}</div>
      </article>
      <button @click="goToOffers" class="btn btn__large">Volver</button>
    </section>

  </main>
</template>