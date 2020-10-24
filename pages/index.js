import React from "react";

/* import componenets */
import HeaderHome from "../components/Com__Header.js"
import Main from "../components/Com__Main.js"
import Section from "../components/Com__Section.js"

/* import style */

import "../assets/style/indexStyle.scss"

/* api */



const homeScreen = () => {
  return (
    <div className="lara">
      <HeaderHome />
      <Main />
      <Section />
    </div>
  );
};

export default homeScreen