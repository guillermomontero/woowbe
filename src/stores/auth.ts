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
    userLogged(token: string = '') {
      this.logged = true;
      this.token = token;
      router.push('/');
    },

    async login(payload: Object = {}) {
      try {
        const response = await apiAuth(payload);
        this.logged = true;
        this.token = response.token;
        localStorage.setItem('token', response.token);
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.logged = false;
      this.token = '';
      this.name = '';
      localStorage.removeItem('token');
      router.push('/login');
    }
  }
});