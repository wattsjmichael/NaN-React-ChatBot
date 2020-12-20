import React from 'react';
import PropTypes from 'prop-types';

function BrewDetail(props) {
  const {brew} = props;
  
  return(
    <React.Fragment>
      <hr />
      <div className="brewItem">
        <h2>{brew.name}</h2>
        <h3>{brew.style}</h3>
        <p>{brew.price}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

BrewDetail.propTypes = {
  brew: PropTypes.object
};


export default BrewDetail;