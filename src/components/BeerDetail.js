import React from 'react';
import PropTypes from 'prop-types';

function BrewDetail(props) {
  const {brew, onClickingDelete} = props;
  
  return(
    <React.Fragment>
      <hr />
      <div className="brewItem">
        <h2>{brew.name}</h2>
        <h3>{brew.style}</h3>
        <p>{brew.price}</p>
        <button onClick={()=> onClickingDelete(brew.id)}>Delete Beer</button>
        <button onClick={props.onClickingEdit}>Update Beer</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

BrewDetail.propTypes = {
  brew: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};


export default BrewDetail;