<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { apiBusinessId } from '../config/api/business';
import { useRoute } from 'vue-router';
import router from '../router';

const route = useRoute();
const business = ref({});

onMounted(() => {
  getBusinessId();
});

const getBusinessId = async() => {
  try {
    business.value = await apiBusinessId(route.params.id);
  } catch (err) {
    console.log(err)
  }
};

const goToBusiness = () => {
  router.push('/');
}
</script>

<template>
  <main class="main">
    <section v-if="business && business.id" class="business-item">
      <div class="business-item__image">
        <img :src="business.widescreen_picture" :alt="business.name">
      </div>
      <article class="business-item__sector">
        <div class="business-item__sector--icon">
          <img :src="business.sector.icon" :alt="business.sector.name">
        </div>
        <div class="business-item__sector--name">
          {{ business.sector.name }}
        </div>
        <div class="business-item__sector--web">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"/></svg>
          <a :href="business.sector.url">Web {{ business.name }}</a>
        </div>
      </article>
      <article class="business-item__labels">
        <p v-for="(label, index) in business.descriptive_categories" :key="index" class="business-item__labels--label">{{ label.name }}</p>
      </article>
      <article class="business-item__description">
        <p>{{ business.description }}</p>
      </article>
      <button @click="goToBusiness" class="btn btn__large">Volver</button>
    </section>
  </main>
</template>