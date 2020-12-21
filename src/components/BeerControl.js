import { connect } from 'react-redux';
import React from 'react';
import NewBeerForm from "./NewBeerForm";
import BrewList from "./BeerList";
import BrewDetail from './BeerDetail';
import EditBeerForm from './EditBeerForm';
import PropTypes from "prop-types";


class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      fullBrewList: [],
      selectedBrew: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBrew != null) {
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

  handleAddingNewBeerToList = (newBrew) => {
    const { dispatch } = this.props;
    const { id, name, style, price } = newBrew;
    const action = {
      type: 'ADD_BREW',
      name: name,
      style: style,
      price: price,
      id: id,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }



  handleChangingSelectBrew = (id) => {
    const selectedBrew = this.props.fullBrewList[0];
    this.setState({ selectedBrew: selectedBrew });
  }

  handleDeletingBrew = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BREW',
      id: id
    }
    dispatch(action);
    this.setState({ selectedBrew: null });

  }

  handleEditClick = () => {
    console.log("handleEditClick Reached!");
    this.setState({ editing: true });
  }

  handleEditingBeerInList = (brewToEdit) => {
    const editedFullBrewList = this.state.fullBrewList
      .filter(brew => brew.id !== this.state.selectedBrew.id)
      .concat(brewToEdit);
    this.setState({
      fullBrewList: editedFullBrewList,
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
    } else if (this.state.formVisibleOnPage) {
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
  fullBrewList: PropTypes.object
};


const mapStatetoProps = state => {
  return {
    fullBrewList: state
  }
}


BeerControl = connect(mapStatetoProps)(BeerControl);

export default BeerControl;