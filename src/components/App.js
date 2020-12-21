import React from "react";
import Header from "./Header";
import BeerControl from "./BeerControl";
import LexChat from 'react-lex';



function App() {
  return (

    <React.Fragment>
      <Header />
      <BeerControl />
      <LexChat botName="NaNBeerBot"
        IdentityPoolId="us-west-2:d06068cd-771b-44c1-9f78-6fbd303f8c31"
        placeholder="Say 'Hi' "
        style={{ position: 'absolute' }}
        backgroundColor="white"
        height= "400px"
        headerText="Chat with Travis_Bot" />

    </React.Fragment>
  );
}


export default App;