import React from "react";

/* import componenets */
import Header from "../components/Com__header.js"
import Nav from "../components/Com_nav.js"


/* import style */

import "../assets/style/globalStyle.scss"



const homeScreen = () => {
  return (
    <div>
      <Header />
      <Nav />
    </div>
  );
};

export default homeScreen