import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  
  render() {
    let currentlyVisibleState= null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm />
    } else {
      currentlyVisibleState = <BeerList />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default BeerControl;