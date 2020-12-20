export default (state ={}, action) => {
  const { name, style, price, id } = action;
  switch (action.type) {
    case 'ADD_BREW' :
      return Object.assign({}, state, {
        [id]: {
          name: name,
          style : style,
          price: price,
          id: id
        }
      });
      default: 
      return state;
  }
};