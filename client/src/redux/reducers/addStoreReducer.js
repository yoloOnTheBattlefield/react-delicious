const intialState = {
  title: null
};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'ADD_STORE':
    return {
      ...state,
      title: action.payload.data.title
    }
    case 'CREATE_STORE':
    return {
      ...state,
      name: action.payload.data.name
    }
    default:
      return state;
  }
}
