import * as  actions from './../../actions';

describe('help queue actions', () => {
  it('deleteBrew should create DELETE_BREW action', () => {
    expect(actions.deleteBrew(1)).toEqual({
      type: 'DELETE_BREW',
      id: 1
    });
  });

  it ("Toggle Form should create TOGGLE_FORM action", ()=> {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it("addBrew should create ADD_BREW action", () => {
    expect(actions.addBrew({
      name: "Deschutes",
      style: "Stout",
      price: "$4.75",
      id: 1
    })).toEqual({
      type: 'ADD_BREW',
      name: 'Deschutes',
      style: "Stout",
      price: "$4.75",
      id: 1
    })
  })
});