const intialState = {
  title: null,
};

export default (state=intialState, action) => {
  switch (action.type) {
    case 'ADD_STORE':
      return {
        ...state,
        title: action.payload.data.title
      }
    default:
      return state;
  }
}
