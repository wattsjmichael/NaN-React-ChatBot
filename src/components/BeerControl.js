import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BrewList from "./BeerList";
import BrewDetail from './BeerDetail';
import EditBeerForm from './EditBeerForm';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      fullBrewList : [],
      selectedBrew : null,
      editing : false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBrew !=null){
      this.setState({
        formVisibleOnPage: false,
        selectedBrew: null,
        editing: false
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
  
  handleDeletingBrew = (id) => {
    const newFullBrewList = this.state.fullBrewList.filter(brew => brew.id !== id);
    this.setState({
      fullBrewList : newFullBrewList,
      selectedBrew: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick Reached!");
    this.setState({editing: true});
  }

  handleEditingBeerInList = (brewToEdit) => {
    const editedFullBrewList = this.state.fullBrewList
    .filter(brew => brew.id !== this.state.selectedBrew.id)
    .concat(brewToEdit);
    this.setState({
      fullBrewList : editedFullBrewList,
      editing: false,
      selectedBrew : null
    });
  }
  
  render() {
    let currentlyVisibleState= null;
    let buttonText = null;


    if(this.state.editing){
      currentlyVisibleState = <EditBeerForm brew = {this.state.selectedBrew} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Homepage"
    } else if (this.state.selectedBrew !=null){
      currentlyVisibleState = <BrewDetail brew = {this.state.selectedBrew}
      onClickingDelete = {this.handleDeletingBrew}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Homepage"
    } else if (this.state.formVisibleOnPage) {
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