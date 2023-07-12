<script lang="ts" setup>
import { shallowRef, ref, onMounted, computed, toRaw } from 'vue';
import { apiBusinessList,apiBusinessListPagination } from '../config/api/business';
import { HashTable } from '../utils/hash-table';
import FilterBar from '../components/other/FilterBar.vue';
import BusinessCardComponent from '../components/business/BusinessCardComponent.vue';

let hashTable = undefined;

const dataBusiness = ref({});
const page = ref(1);
const results = ref([]);
const businessList = computed(() => results.value);

onMounted(async () => {
  await getBusinessList();

  hashTable = new HashTable(dataBusiness.value.count);
  results.value.forEach(r => { hashTable.set(r.name, r.id); });
});

const getMapData = () => {
  return dataBusiness.value.results.map(r => ({
    id: r.id,
    name: r.name,
    description: r.description,
    square_picture: r.square_picture,
    sector: r.sector,
    descriptive_categories: r.descriptive_categories
  }));
}

const getBusinessList = async() => {
  try {
    dataBusiness.value = await apiBusinessList();
    results.value = getMapData();    
  } catch (err) {
    console.log(err)
  }
};

const goToPage = async (pageToGo: number = 1) => {
  try {
    const response = await apiBusinessListPagination(pageToGo);
    dataBusiness.value = response;
    results.value = getMapData();
    results.value.forEach(r => { hashTable.set(r.name, r.id); });
    page.value = pageToGo;
  } catch (error) {
    console.log(error)
  }
};

const filterByBusiness = (id: number = 0) => {
  if (!id) results.value = getMapData()
  else results.value = getMapData().filter(i => i.sector.id === id);
};

const filterByCategories = (id: number = 0) => {
  if (!id) results.value = getMapData()
  else {
    const arrIndex = [];
    const newArr = [];
  
    results.value = getMapData();
  
    results.value.forEach((element, idx) => {
      element.descriptive_categories.forEach((element2, index2) => {
        if (element2.id === id) arrIndex.push(idx)
      })
    });
  
    results.value.forEach((element, index) => {
      if (arrIndex.find(a => a === index)) newArr.push(element)
    });
  
    results.value = newArr;
  }
};
</script>

<template>
  <main class="main justify-top">
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
      <button :disabled="!dataBusiness.previus" @click="goToPage(page -= 1)"><svg :class="{ 'disabled': !dataBusiness.previus }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z" fill-rule="nonzero"/></svg></button>
      <p>{{ page }}</p>
      <button :disabled="!dataBusiness.next" @click="goToPage(page += 1)"><svg :class="{ 'disabled': !dataBusiness.next }" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero"/></svg></button>
    </div>
  </main>
</template>