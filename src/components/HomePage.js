import React from "react";
import About from "./About";
import Creations from "./Creations";
import Footer from "./Footer";
import HeaderContainer from "./HeaderContainer";

function HomePage({
  logo,
  hamburger,
  close,
  aboutImgMob,
  aboutImgDesk,
  footbalDesc,
  footbalMob,
}) {
  return (
    <div>
      <HeaderContainer logo={logo} hamburger={hamburger} close={close} />
      <main>
        <About aboutImgMob={aboutImgMob} aboutImgDesk={aboutImgDesk} />
        <Creations footbalDesc={footbalDesc} footbalMob={footbalMob} />
      </main>
      <Footer logo={logo} />
    </div>
  );
}

export default HomePage;

// logo={logo} hamburger={hamburger} close={close}
// aboutImgMob={aboutImgMob} aboutImgDesk={aboutImgDesk}
// footbalDesc={footbalDesc} footbalMob={footbalMob}
