import beerFormVisibleReducer from "./beer-form-visible-reducer";
import beerListReducer from "./beer-list-reducer";
import { combineReducers } from  'redux';

const rootReducer = combineReducers({
  beerFormVisibleOnPage: beerFormVisibleReducer,
  fullBrewList: beerListReducer
});

export default rootReducer;