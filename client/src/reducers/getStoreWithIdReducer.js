const intialState = {};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'GET_STORE_WITH_ID':
    console.log(action.payload)
    const store = action.payload.data.store;
    return store;

    default:
      return state;
  }
}
