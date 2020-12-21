import beerFormVisibleReducer from "./Beer-form-visible-reducer";
import beerListReducer from "./beer-list-reducer";
import { combineReducers } from  'redux';
import editingReducer from './editing-reducer';
import selectedBrewReducer from './selected-brew-reducer'; 

const rootReducer = combineReducers({
  beerFormVisibleOnPage: beerFormVisibleReducer,
  fullBrewList: beerListReducer,
  editing: editingReducer,
  selectedBrew : selectedBrewReducer
});

export default rootReducer;