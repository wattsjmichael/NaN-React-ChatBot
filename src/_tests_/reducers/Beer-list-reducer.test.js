import beerListReducer from '../../reducers/beer-List-Reducer';

describe('beerListReducer', () => {

  let action;
  const brewData = {
    name: "Stella Artois",
    style: "lager",
    price: "$3.50",
    id: 1,
  };




  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });


  test('Should succesfully add new brew data to fullBrewList', () => {
    const { name, style, price, id } = brewData;
    action = {
      type :'ADD_BREW',
      name: name,
      style: style,
      price: price,
      id: id
    };

    expect(beerListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        style: style,
        price: price,
        id: id
      }
    });
  });


});