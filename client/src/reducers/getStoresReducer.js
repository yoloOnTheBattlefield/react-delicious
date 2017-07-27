const intialState = {
  title: null,
  stores: null
};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'GET_STORES':
    return {
      ...state,
      title: action.payload.data.title,
      stores: action.payload.data.stores
    }
    default:
      return state;
  }
}
