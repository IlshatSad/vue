import axios from 'axios';

export default async function getHashes () {
  try {
    let hash = await axios.post('/hash')
    return hash
  } catch (error) {
    console.warn('error: ', error);
  }
}