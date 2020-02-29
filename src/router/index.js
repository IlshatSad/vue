import Vue from 'vue';
import VueRouter from 'vue-router';
import Character from '../pages/Character.vue';
import Comics from '../pages/Comics.vue';
import Favorites from '../pages/Favorites.vue';
import signUp from '../pages/signUp.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')  
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character,
    props: true
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/Comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
