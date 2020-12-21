import beerFormVisibleReducer from "../../reducers/beer-form-visible-reducer";

describe ("beerFormVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(beerFormVisibleReducer(false, {type: null})).toEqual(false);
  });
});