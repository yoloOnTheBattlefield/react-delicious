import axios from 'axios';
const ROOT_URL = '/api/stores'

export const getStores = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: 'GET_STORES',
    payload: request
  }
}
