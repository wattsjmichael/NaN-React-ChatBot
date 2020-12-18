import React from "react";
import PropTypes from "prop-types";


function Beer(props) {
  return (
    <React.Fragment>
      <div class="brewItem">
        <h2>{props.name}</h2>
        <h3>{props.style}</h3>
        <p>{props.price}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name : PropTypes.string.isRequired,
  style : PropTypes.string.isRequired,
  price : PropTypes.string.isRequired,
};

export default Beer;