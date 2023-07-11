import { defineStore } from 'pinia';
import router from '../router';
import { apiAuth } from '../config/api/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    logged: false,
    token: '',
    name: '',
  }),

  getters: {
    isLogged: (state) => state.logged,
  },

  actions: {
    async login(payload: Object = {}) {
      console.log(payload);
      try {
        const response = await apiAuth(payload)
        this.logged = true;
        this.token = response.token;
        this.name = response.name;
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.logged = false;
      this.token = '';
      this.name = '';
      router.push('/login');
    }
  }
});