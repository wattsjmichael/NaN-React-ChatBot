//Need to be authorized to be able to access this page // 
import { v4 } from 'uuid';

import React from 'react';

function NewBeerForm(props){

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.style.value);
    console.log(event.target.price.value);
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

export default NewBeerForm;