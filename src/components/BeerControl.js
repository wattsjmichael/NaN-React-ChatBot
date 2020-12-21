import { connect } from 'react-redux';
import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BrewList from "./BeerList";
import BrewDetail from './BeerDetail';
import EditBeerForm from './EditBeerForm';
import PropTypes from "prop-types";
import * as actions from './../actions'


class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      fullBrewList: [],
      selectedBrew: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBrew != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedBrew: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = actions.toggleForm();
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    }
  }

  handleAddingNewBeerToList = (newBrew) => {
    const { dispatch } = this.props;
    const action = actions.addBrew(newBrew);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
    // this.setState({ formVisibleOnPage: false });
  }



  handleChangingSelectBrew = (id) => {
    const selectedBrew = this.props.fullBrewList[0];
    this.setState({ selectedBrew: selectedBrew });
  }

  handleDeletingBrew = (id) => {
    const { dispatch } = this.props;
    const action = actions.deleteBrew(id);
    dispatch(action);
    this.setState({ selectedBrew: null });

  }

  handleEditClick = () => {
    console.log("handleEditClick Reached!");
    this.setState({ editing: true });
  }

  handleEditingBeerInList = (brewToEdit) => {
   const { dispatch } = this.props;
   const action = actions.addBrew(brewToEdit);
   dispatch(action);
    this.setState({
      editing: false,
      selectedBrew: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.state.editing) {
      currentlyVisibleState = <EditBeerForm brew={this.state.selectedBrew} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Homepage"
    } else if (this.state.selectedBrew != null) {
      currentlyVisibleState = <BrewDetail brew={this.state.selectedBrew}
        onClickingDelete={this.handleDeletingBrew}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Homepage"
    } else if (this.props.formVisibleOnPage) {
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
  beerFormVisibleOnPage: PropTypes.bool
  
};


const mapStatetoProps = state => {
  return {
    fullBrewList: state,
    beerFormVisibleOnPage: state.beerFormVisibleOnPage
  }
}


BeerControl = connect(mapStatetoProps)(BeerControl);

export default BeerControl;