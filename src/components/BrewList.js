import React from "react";
import Beer from "./Beer";



const fullBrewList = [
  {
    name: "The Drinky Drink",
    style: "IPA",
    price: "$5.50"
  },
  {
    name: "The Generic Lager from the past",
    style: "Lager",
    price: "$5.50"
  },
  {
    name: "The Darkest Knight",
    style: "Stout",
    price: "$5.50"
  },

]







function BrewList() {
  return (
    <React.Fragment>
      {fullBrewList.map((beer, index) =>
        <Beer name={beer.name}
          style={beer.style}
          price={beer.price}
          key={index} />
    )}

    </React.Fragment>
  );
}

export default BrewList;