import axios from 'axios';
import { push } from 'react-router-redux';
const ROOT_URL = '/add';

/* /add
  gets the /add route
*/

export const addStore = () => {
  const request = axios.get(ROOT_URL);
  return {
    type: 'ADD_STORE',
    payload: request
  }
}

/* /add
  posts the state of the form to Store schema
*/

export const createStore = (data) => {
  console.log('create store ', data)
  return dispatch => {
    return axios.post(ROOT_URL, data)
    .then(({ data }) => dispatch(push(`/store/${data.store.slug}`)))
  }
}

/* /add
  posts the state of the form and updates the Store schema
  and then redirects to /store/:store-slug
*/

export const updateStore = (data, id) => {
  console.log(data)
  console.log('update ', data)
  return dispatch => {
    return axios.post(`${ROOT_URL}/${id}`, data)
    .then(({ data }) => dispatch(push(`/store/${data.store.slug}`)))
  }
}

export const getStoreToEdit = (path) => {
  return dispatch => {
    return axios.get(path)
      .then((data) => dispatch({
        type: 'GET_STORE_TO_EDIT',
        payload: data
      }))
  }
}
