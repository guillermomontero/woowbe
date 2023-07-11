<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue';

const emit = defineEmits<{
  (e: 'businessSelectedChange', id: number): void
  (e: 'categorySelectedChange', id: number): void

}>();

const props = defineProps({
  item: { type: Object, default: () => {} },
});

const categories = ref([]);
const business = ref([]);
const businessSelected = ref(0);
const categorySelected = ref(0);

const makeMapForBusiness = () => {
  const businessMap = new Map();
  businessMap.set(0, 'Tipo de negocio');

  props.item.results.forEach(element => {
    if (element.sector) businessMap.set(element.sector.id, element.sector.name)
  });

  business.value = Object.fromEntries(businessMap);
};

const makeMapForCategories = () => {
  const categoryMap = new Map();
  categoryMap.set(0, 'Categoría');

  props.item.results.forEach(element => {
    element.descriptive_categories.forEach(dc => {
      categoryMap.set(dc.id, dc.name)
    });
  });

  categories.value = Object.fromEntries(categoryMap);
};

onMounted(() => {
  nextTick(() => {
    makeMapForBusiness();
    makeMapForCategories();
  });
})

</script>

<template>
  <section class="filter-bar">
    <div class="filter-bar__icon">
      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.344 17.778c0-.414-.336-.75-.75-.75h-5.16c-.414 0-.75.336-.75.75s.336.75.75.75h5.16c.414 0 .75-.336.75-.75zm2.206-4c0-.414-.336-.75-.75-.75h-9.596c-.414 0-.75.336-.75.75s.336.75.75.75h9.596c.414 0 .75-.336.75-.75zm2.45-4c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
    </div>
    <select name="business" id="business" v-model="businessSelected" @change="emit('businessSelectedChange', businessSelected)">
      <option v-for="(key, value) in business" :key="value" :value="value">{{ key }}</option>
    </select>
    <select name="category" id="category" v-model="categorySelected" @change="emit('categorySelectedChange', categorySelected)">
      <option v-for="(key, value) in categories" :key="value" :value="value">{{ key }}</option>
    </select>
  </section>
</template>