import * as constants from './../actions/ActionTypes'

export default (state = {}, action) => {
  const { name, style, price, id } = action;
  switch (action.type) {
    case constants.ADD_BREW:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          style: style,
          price: price,
          id: id
        }
      });
    case constants.DELETE_BREW:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};