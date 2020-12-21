import React from "react";
import Brew from "./Beer";
import PropTypes from 'prop-types';



// let brewList = [
//   {
//     name: "The Drinky Drink",
//     style: "IPA",
//     price: "$5.50"
//   },
//   {
//     name: "The Generic Lager from the past",
//     style: "Lager",
//     price: "$5.50"
//   },
//   {
//     name: "The Darkest Knight",
//     style: "Stout",
//     price: "$5.50"
//   },

// ]







function BrewList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.brewList).map((brew) =>
      <Brew 
          whenBrewClicked = { props.onBrewSelection}
          name={brew.name}
          style={brew.style}
          price={brew.price}
          id = {brew.id}
          key={brew.id}/>
      )}

    </React.Fragment>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.object,
  onBrewSelection: PropTypes.func
};

export default BrewList;