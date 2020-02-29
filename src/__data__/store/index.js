import Vue from 'vue';
import Vuex from 'vuex';

import { getHash } from './hash.module.js';
import { favorite } from './favorite.module.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    getHash,
    favorite
  }
});