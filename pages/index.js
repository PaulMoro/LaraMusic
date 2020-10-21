import React from "react";

/* import componenets */
import Header from "../components/Com__header.js"
import Main from "../components/Com_nav.js"


/* import style */

import "../assets/style/indexStyle.scss"



const homeScreen = () => {
  return (
    <div className="lara">
      <Header />
      <Main />
    </div>
  );
};

export default homeScreen