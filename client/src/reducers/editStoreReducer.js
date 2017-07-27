const intialState = {
  store: null
};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'GET_STORE_TO_EDIT':
      return {
        ...state,
        store: action.payload.data.store
      }
    default:
      return state;
  }
}
