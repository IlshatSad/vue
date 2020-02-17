import axios from 'axios';
const BASE_URL = require('../constants/urls').URLS;

const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

export const request = {
  getCharacters: () => {

  }
}
