import axios from 'axios';
import { push } from 'react-router-redux';
const ROOT_URL = '/add';

/* /add
  gets the /add route
*/

export const addStore = () => {
  return dispatch => {
    return axios.get(ROOT_URL)
      .then((data) =>  dispatch({
        type: 'ADD_STORE',
        payload: data
      }))
  }
}

/* /add
  posts the state of the form to Store schema
*/

export const createStore = (data) => {
  console.log(data)
  return dispatch => {
    return axios.post(ROOT_URL, data)
    .then(({ data }) => dispatch(push(`/stores/${data.store._id}`)))
  }
}

/* /add
  posts the state of the form and updates the Store schema
  and then redirects to /store/:store-slug
*/

export const updateStore = (data, id) => {
  return dispatch => {
    return axios.post(`${ROOT_URL}/${id}`, data)
    .then(({ data }) => dispatch(push(`/stores/${data.store._id}`)))
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
