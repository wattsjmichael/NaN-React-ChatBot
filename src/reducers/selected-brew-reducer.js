import * as constants from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedBrew } = action;
  switch (action.type) {
    case constants.SELECT_BREW:
      const newState = selectedBrew;
      return newState;
    case constants.NOT_SELECT_BREW:
      const notSelectState = null;
      return notSelectState;
    default: 
    return state;

  }
}