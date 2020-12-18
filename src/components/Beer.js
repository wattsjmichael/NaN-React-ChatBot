import React from "react";

function Beer() {
  const name = "The Drinky Drink";
  const style = "Mexican Lager";
  return (
    <React.Fragment>
      <div class="brewItem">
        <h2>{name}</h2>
        <h3>{style}</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default Beer;