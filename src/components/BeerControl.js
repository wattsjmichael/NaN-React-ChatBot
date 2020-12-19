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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  render() {
    let currentlyVisibleState= null;
    let addBeerButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm />
    } else {
      currentlyVisibleState = <BeerList />
      addBeerButton = <button onClick={this.handleClick}> Add a beer</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addBeerButton}
      </React.Fragment>
    );
  }

}

export default BeerControl;