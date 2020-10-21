import React from "react";

/* import componenets */
import Header from "../components/Com__Header.js"
import Main from "../components/Com_nav.js"
import SectionProfile from "../components/Com__SectionProfile.js"

/* import style */

import "../assets/style/indexStyle.scss"



const homeScreen = () => {
  return (
    <div className="lara">
      <Header />
      <Main />
      <SectionProfile />
    </div>
  );
};

export default homeScreen