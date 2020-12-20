//Need to be authorized to be able to access this page // 
import { v4 } from 'uuid';
import React from 'react';
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
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='style'
          placeholder='Style' />
        <input
          type= 'text'
          name= 'price'
          placeholder='Enter Price' />
        <button type='submit'>Enter</button>
      </form>
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;