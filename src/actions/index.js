export const deleteBrew = id => ({
  type: "DELETE_BREW",
  id
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

export const editBrew = () => {
  return {
    type: "EDIT_BREW"
  }
}

export const notEditBrew = () => {
  return {
    type: "NOT_EDIT_BREW"
  }
}

export const selectedBrew = (brew) => {
  return {
    type : "SELECT_BREW",
    selectedBrew: brew
  }
}

export const notSelectedBrew = () => {
  return {
    type:'NOT_SELECT_BREW'
  }
}