//Need to be authorized to be able to access this page // 
import { v4 } from 'uuid';
import React from 'react';
import ReusableBeerForm from "./ReusableBeerForm";
import PropTypes from 'prop-types';

function NewBeerForm(props){

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
    name: event.target.name.value,
    style: event.target.style.value,
    price: event.target.price.value,
    id: v4()
    });
  }



  return (
    <React.Fragment>
      <ReusableBeerForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Add Beer" />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;