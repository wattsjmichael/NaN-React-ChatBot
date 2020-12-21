export const deleteBrew = id => ({
  type: "DELETE_BREW",
  id: 1
});

export const toggleForm = () => ({
  type: "TOGGLE_FORM"
});

export const addBrew = (brew) => {
  const {name, style, price, id} = brew;
  return {
    type: 'ADD_BREW',
    name: name,
    style: style,
    price: price,
    id: id
  }
}