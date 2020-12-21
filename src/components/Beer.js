import React from "react";
import PropTypes from "prop-types";


function Brew(props) {
  return (
    <React.Fragment>
      <div className = "brewItem" onClick = {() => props.whenBrewClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.style}</h3>
        <p>{props.price}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Brew.propTypes = {
  name : PropTypes.string,
  style : PropTypes.string,
  price : PropTypes.string,
  id : PropTypes.string,
  whenBrewClicked: PropTypes.func
};

export default Brew;