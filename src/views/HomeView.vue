<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { apiBusinessList,apiBusinessListPagination } from '../config/api/business';
import FilterBar from '../components/other/FilterBar.vue';
import BusinessCardComponent from '../components/business/BusinessCardComponent.vue';

const dataBusiness = ref<Object>({});
const businessList = computed(() => dataBusiness.value.results);
const page = ref<number>(1);

const getBusinessList = async() => {
  try {
    dataBusiness.value = await apiBusinessList();
  } catch (err) {
    console.log(err)
  }
};

onMounted(() => {
  getBusinessList();
});

const goToPage = async (pageToGo: number = 1) => {
  try {
    const response = await apiBusinessListPagination(pageToGo);
    dataBusiness.value = response;
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
    <FilterBar v-if="businessList && businessList.length" :item="dataBusiness" @businessSelectedChange="filterByBusiness" @categorySelectedChange="filterByCategories"/>
    <div class="title-page">
      <h1>Negocios <span class="title-page__results">({{ dataBusiness.count }} resultados)</span></h1>
    </div>
    <section class="home">
      <template v-for="(item, index) in businessList" :key="`${index}_${item.id}`">
        <BusinessCardComponent :item="item" />
      </template>
    </section>
    <div class="home__pagination">
      <button :disabled="!dataBusiness.previus" @click="goToPage(page - 1)"><svg :class="{ 'disabled': !dataBusiness.previus }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z" fill-rule="nonzero"/></svg></button>
      <p>{{ page }}</p>
      <button :disabled="!dataBusiness.next" @click="goToPage(page + 1)"><svg :class="{ 'disabled': !dataBusiness.next }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero"/></svg></button>
    </div>
  </main>
</template>