import axios from 'axios';
export default async function getHashes () {
  if (localStorage.getItem('hashes') == null) {
    try {
      let hash = await axios.post('/hash')
      localStorage.setItem('hashes', JSON.stringify(hash.data))
      return hash.data
    } catch (err) {
      console.log('err :', err);
    }
  } else {
    let hash = localStorage.getItem('hashes')
    return JSON.parse(hash)
  }
}