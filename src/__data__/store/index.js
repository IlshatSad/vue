import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import * as types from '../constants/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hashes: null
  },
  actions: {
    async getHash ({commit}) {
      try {
        const hashes = await axios.post('/hash')
        console.log('hashes :', hashes);
        
        if (hashes) {
          const { results } = hashes.data;
          console.log('results', results)
          commit(types.GET_HASH, results);
        }
      } catch (error) {
        console.log('error :', error);
      }
    }
  },
  mutations: {
    [types.GET_HASH](state, results) {
      state.hashes = results
    }
  }
})