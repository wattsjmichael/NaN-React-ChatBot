import * as constants from './../actions/ActionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case constants.EDIT_BREW:
      const newState = true;
      return newState;
    case constants.NOT_EDIT_BREW:
      const newStateNotEditBrew = false;
      return newStateNotEditBrew;
    default:
      return state;
  }
  ;
}