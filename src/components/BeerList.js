import React from "react";
import Brew from "./Beer";
import PropTypes from 'prop-types';






function BrewList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.brewList).map((brew) =>
        <Brew
          whenBrewClicked={props.onBrewSelection}
          name={brew.name}
          style={brew.style}
          price={brew.price}
          id={brew.id}
          key={brew.id} />
      )}

    </React.Fragment>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.object,
  onBrewSelection: PropTypes.func
};

export default BrewList;