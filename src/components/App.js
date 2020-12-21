import React from "react";
import Header from "./Header";
import BeerControl from "./BeerControl";
import LexChat from 'react-lex';



function App() {
  return (

    <React.Fragment>
      <Header />
      <BeerControl />
      <LexChat
      botName="NaNBeerBot"
      IdentityPoolId="us-west-2:3c4d1953-3808-4361-960b-0a26b95a2ab0"
      placeholder="Placeholder text"
      backgroundColor="#FFFFFF"
      height="430px"
      region="us-east-1"
      headerText="Chat with our awesome bot"
      headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
      greeting={
        "Hello, how can I help? You can say things like 'help' to get more info"
      }
    />;

    </React.Fragment>
  );
}


export default App;