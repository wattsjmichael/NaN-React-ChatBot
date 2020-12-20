import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BrewList from "./BeerList";
import BrewDetail from './BeerDetail';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      fullBrewList : [],
      selectedBrew : null
    };
  }

  handleClick = () => {
    if (this.state.selectedBrew !=null){
      this.setState({
        formVisibleOnPage: false,
        selectedBrew: null
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newFullBrewList = this.state.fullBrewList.concat(newBeer);
    this.setState({
    fullBrewList: newFullBrewList,
    formVisibleOnPage: false});
  }

  handleChangingSelectBrew = (id) => {
    const selectedBrew = this.state.fullBrewList.filter(brew=> brew.id === id)[0];
    this.setState({selectedBrew: selectedBrew});
  }
  
  
  render() {
    let currentlyVisibleState= null;
    let buttonText = null;



    if (this.state.selectedBrew !=null){
      currentlyVisibleState = <BrewDetail brew = {this.state.selectedBrew} />
      buttonText = "Homepage"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Homepage";
    } else {
      currentlyVisibleState = <BrewList brewList={this.state.fullBrewList} onBrewSelection={this.handleChangingSelectBrew} />
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