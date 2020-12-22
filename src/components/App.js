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
        IdentityPoolId="us-west-2:3c4d1953-3808-4361-960b-0a26b95a2ab0"
        placeholder="Say 'Hi' "
        style={{ position: 'absolute' }}
        backgroundColor="white"
        height= "400px"
        headerText="Chat with Travis_Bot" />

    </React.Fragment>
  );
}


export default App;