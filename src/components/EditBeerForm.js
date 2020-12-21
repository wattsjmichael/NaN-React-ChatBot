import React from 'react';
import ReusableBeerForm from './ReusableBeerForm';
import PropTypes from 'prop-types';

function EditBeerForm (props) {
  const { brew }= props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBrew({
      name: event.target.name.value,
      style: event.target.style.value,
      price: event.target.price.value,
      id: brew.id})
  }
  return(
    <React.Fragment>
      <ReusableBeerForm
      formSubmissionHandler = {handleEditBeerFormSubmission}
      buttonText="Update Beer" />
    </React.Fragment>
  )
}

EditBeerForm.propTypes = {
  onEditBrew: PropTypes.func
}

export default EditBeerForm;