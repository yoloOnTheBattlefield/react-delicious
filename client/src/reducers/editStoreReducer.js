const intialState = {};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'GET_STORE_TO_EDIT':
      const store = action.payload.data.store;

      return {...state, store};
    default:
      return state;
  }
}
