import React from "react";

/* import componenets */
import HeaderProfile from "../components/Com__HeaderProfile.js"
import NavProfile from "../components/Com_NavProfile.js"
import SectionProfile from "../components/Com_SectionProfile.js"
import FooterProfile from "../components/Com_FooterProfile.js"


/* import style */

import "../assets/style/globalStyle.scss"



const profile = () => {
  return (
    <div>
      <HeaderProfile />
      <NavProfile />
      <SectionProfile />
      <FooterProfile />
    </div>
  );
};

export default profile