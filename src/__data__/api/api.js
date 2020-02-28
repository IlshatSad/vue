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
  getComics: async function () {
    let hash = await getHashes()
    return Api.get()
  },
  search: async function (name) {
    let hash = await getHashes()
    return Api.get('/v1/public/characters', {
      params: {
        name: name,
        ts: hash.date,
        apikey: hash.apikey,
        hash: hash.hash
      }
    })
  }
}
