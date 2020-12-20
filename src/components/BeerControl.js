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
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm />;
      buttonText = "Homepage";
    } else {
      currentlyVisibleState = <BeerList />
      buttonText = "Add a Beer";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default BeerControl;