import axios from 'axios';
import data from '../../../files/characters'

const BASE_URL = require('../constants/urls').URLS;

const Api = axios.create({
  baseURL: BASE_URL.MARVEL_CHARACTERS,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})


export default {
  getCharacters: async ({ limit, offset, ts, apikey, hash }) => {
    /* return new Promise((resolve, reject) => {
      setTimeout(() => resolve({data}), 1000)
    }) */
    return Api.get('/v1/public/characters', {
      params: {
        limit: limit,
        offset: offset,
        ts: ts,
        apikey: apikey,
        hash: hash
      }
    })
  },
  getComics: async function (params) {
    return Api.get('/v1/public/comics', { params })
  },
  search: async function (params) {
    return Api.get('/v1/public/characters', { params })
  }
}
