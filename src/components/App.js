import React from "react";
import Header from "./Header";
import BeerControl from "./BeerControl";
import LexChat from 'react-lex';



function App() {
  return (

    <React.Fragment>
      <Header />
      <BeerControl />
      <LexChat botName="OrderFlowers"
        IdentityPoolId="us-east-1:7292b8c0-56f1-4441-b2a6-xxxxxxxxxxxx"
        placeholder="Placeholder text"
        style={{ position: 'absolute' }}
        backgroundColor="#FFFFFF"
        height="430px"
        headerText="Chat with our awesome bot" />

    </React.Fragment>
  );
}


export default App;