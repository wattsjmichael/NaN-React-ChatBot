import beerListReducer from '../../reducers/beer-List-Reducer';

describe('beerListReducer', () => {

  const currentState = {
    1: {
      name: "Stella Artois",
      style: "lager",
      price: "$3.50",
      id: 1
    },
    2: {
      name: "Deschutes",
      style: "Stout",
      price: "$4.75",
      id: 2
    }
  }

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
      type: 'ADD_BREW',
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

  test('Should delete a brew', () => {
    action = {
      type: "DELETE_BREW",
      id: 1
    };
    expect(beerListReducer(currentState, action)).toEqual({
      2: {
        name: "Deschutes",
        style: "Stout",
        price: "$4.75",
        id: 2
      }
    })
  })


});