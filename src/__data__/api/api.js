import getHashes from './getHash';
import axios from 'axios';

const BASE_URL = require('../constants/urls').URLS;

const Api = axios.create({
  baseURL: BASE_URL.MARVEL_CHARACTERS,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export default {
  getCharacters: async () => {
    let hash = await getHashes()
    return Api.get('/v1/public/characters', {
      params: {
        limit: 10,
        offset: 0,
        ts: hash.date,
        apikey: hash.apikey,
        hash: hash.hash
      }
    })
  }
}
