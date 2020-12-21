import beerFormVisibleReducer from "./beer-form-visible-reducer";
import beerListReducer from "./beer-list-reducer";
import { combineReducers } from  'redux';

const rootReducer = combineReducers({
  beerFormVisible: beerFormVisibleReducer,
  fullBrewList: beerListReducer
});

export default rootReducer;