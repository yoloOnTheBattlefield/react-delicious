import axios from 'axios';
const ROOT_URL = '/add';

export const addStore = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: 'ADD_STORE',
    payload: request
  }
}

export const createStore = (data) => {
  return dispatch => {
    return axios.post(ROOT_URL, {
      name: data.name,
      description: data.description,
      tags: data.tags
    })
  }
}
