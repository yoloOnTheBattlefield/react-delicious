import axios from 'axios';

export const getStoreWithId = (path) => {
  console.log('triggered on path ', path)
  return dispatch => {
    return axios.get(path)
      .then((data) =>  dispatch({
        type: 'GET_STORE_WITH_ID',
        payload: data
      }))
  }
}
