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
    expect(store.getState().beerFormVisibleOnPage).toEqual(beerFormVisibleReducer(undefined, { type: null }));
  });

  test("Check that ADD_BREW action works for beerListReducer and root reducer", () => {
    const action = {
      type: "ADD_BREW",
      name: "Stella Artois",
      style: "lager",
      price: "$3.50",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().fullBrewList).toEqual(beerListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for beerFormVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().beerFormVisibleOnPage).toEqual(beerFormVisibleReducer(undefined, action));
  });

});