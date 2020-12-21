import rootReducer from "../../reducers/index";
import { createStore } from 'redux';
import beerFormVisibleReducer from "../../reducers/beer-form-visible-reducer";
import beerListReducer from '../../reducers/beer-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test("Should return a default state if no action is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      fullBrewList: {},
      beerFormVisibleOnPage: false
    });
  });

  test("Check that initial state of beerListReducer matches root reducer", () => {
    expect(store.getState().fullBrewList).toEqual(beerListReducer(undefined, { type: null }));
  });

  test("Check that initial state of beerFormVisibleReducer matches root reducer", () => {
    expect(store.getState().beerFormVisibleOnPage).toEqual(beerFormVisibleReducer(undefined, { type: null}));
  });


});