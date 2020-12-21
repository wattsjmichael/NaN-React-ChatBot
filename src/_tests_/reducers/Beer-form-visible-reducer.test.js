import beerFormVisibleReducer from "../../reducers/Beer-form-visible-reducer";

describe ("beerFormVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(beerFormVisibleReducer(false, {type: null})).toEqual(false);
  });

  test("Should toggle form visibility state to true", () => {
    expect(beerFormVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
  });

});