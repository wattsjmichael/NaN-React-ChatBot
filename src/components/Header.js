import React from 'react';
import headerPixelBar from "./../img/headerPixelBar.jpg";

function Header() {
  return(
    <div style={{ backgroundColor: 'black', color:'whitesmoke' }}>
      <img src={headerPixelBar} alt="Picture of a bar from the future" class="responsive"></img>
      <h1>NaN</h1>
      <h3>The Brewery of the future</h3>
    </div>
  );
}

export default Header;