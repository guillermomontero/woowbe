<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { apiOffersList,apiOffersListPagination } from '../config/api/offers';
import FilterBar from '../components/other/FilterBar.vue';
import OffersCardComponent from '../components/offers/OffersCardComponent.vue';

const dataOffers = ref<Object>({});
const offersList = computed(() => dataOffers.value.results);
const page = ref<number>(1);

const getOffersList = async() => {
  try {
    dataOffers.value = await apiOffersList();
  } catch (err) {
    console.log(err)
  }
};

onMounted(() => {
  getOffersList();
});

const goToPage = async (pageToGo: number = 1) => {
  try {
    const response = await apiOffersListPagination(pageToGo);
    dataOffers.value = response;
    page.value = pageToGo;
  } catch (error) {
    console.log(error)
  }
};

const filterByBusiness = (id: number = 0) => {
  console.log(id);
};

const filterByCategories = (id: number = 0) => {
  console.log(id);
};
</script>

<template>
  <main class="main">
    <div class="title-page">
      <h1>Ofertas <span class="title-page__results">({{ dataOffers.count }} resultados)</span></h1>
    </div>
    <!-- <FilterBar v-if="offersList && offersList.length" :item="dataOffers" @businessSelectedChange="filterByBusiness" @categorySelectedChange="filterByCategories"/> -->
    <section class="home">
      <template v-for="(item, index) in offersList" :key="`${index}_${item.id}`">
        <OffersCardComponent :item="item" />
      </template>
    </section>
    <div class="home__pagination">
      <button :disabled="!dataOffers.previus" @click="goToPage(page - 1)"><svg :class="{ 'disabled': !dataOffers.previus }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z" fill-rule="nonzero"/></svg></button>
      <p>{{ page }}</p>
      <button :disabled="!dataOffers.next" @click="goToPage(page + 1)"><svg :class="{ 'disabled': !dataOffers.next }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero"/></svg></button>
    </div>
  </main>
</template>