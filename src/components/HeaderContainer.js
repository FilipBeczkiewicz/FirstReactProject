import React from "react";
import Header from "./Header";
import Nav from "./Nav";
function HeaderContainer({ logo, hamburger, close }) {
  return (
    <header id='header'>
      <Nav logo={logo} hamburger={hamburger} close={close} />
      <Header />
    </header>
  );
}

export default HeaderContainer;
