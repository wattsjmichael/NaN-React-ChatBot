import { connect } from 'react-redux';
import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BrewList from "./BeerList";
import BrewDetail from './BeerDetail';
import EditBeerForm from './EditBeerForm';
import PropTypes from "prop-types";
import * as actions from './../actions'


class BeerControl extends React.Component {

  
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedBrew != null) {
      const action = actions.notEditBrew();
      dispatch(action)
      const action2 = actions.notSelectedBrew();
      dispatch(action2)

    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewBeerToList = (newBrew) => {
    const { dispatch } = this.props;
    const action = actions.addBrew(newBrew);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
    
  }



  handleChangingSelectBrew = (id) => {
    const {dispatch} =this.props;
    const brew = this.props.fullBrewList[id];
    const action = actions.selectedBrew(brew);
    dispatch(action);
  }

  handleDeletingBrew = (id) => {
    const { dispatch } = this.props;
    const action = actions.deleteBrew(id);
    dispatch(action);
    const action2 = actions.notSelectedBrew();
    dispatch(action2);

  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = actions.editBrew();
    dispatch(action);
  }

  handleEditingBeerInList = (brewToEdit) => {
    const { dispatch } = this.props;
    const action = actions.addBrew(brewToEdit);
    dispatch(action);
    const action2 = actions.notEditBrew();
    dispatch(action2);
    const action3 = actions.notSelectedBrew();
    dispatch(action3);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.props.editing) {
      currentlyVisibleState = <EditBeerForm brew={this.props.selectedBrew} onEditBrew={this.handleEditingBeerInList} />
      buttonText = "Homepage"

    } else if (this.props.selectedBrew != null) {
      currentlyVisibleState = <BrewDetail brew={this.props.selectedBrew}
        onClickingDelete={this.handleDeletingBrew}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Homepage"

    } else if (this.props.beerFormVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Homepage";

    } else {
      currentlyVisibleState = <BrewList brewList={this.props.fullBrewList} onBrewSelection={this.handleChangingSelectBrew} />
      buttonText = "Add a Beer";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

BeerControl.propTypes = {
  fullBrewList: PropTypes.object,
  beerFormVisibleOnPage: PropTypes.bool,
  selectedBrew: PropTypes.object,
  editing: PropTypes.bool

};


const mapStatetoProps = state => {
  return {
    fullBrewList: state.fullBrewList,
    beerFormVisibleOnPage: state.beerFormVisibleOnPage,
    selectedBrew: state.selectedBrew,
    editing: state.editing

  }
}


BeerControl = connect(mapStatetoProps)(BeerControl);

export default BeerControl;