import React from "react";
import Header from "../src/components/Header/HeaderPage";
import NavProfile from "../src/components/Profile/Com__NavProfile.js";
import SectionProfile from "../src/components/Profile/Com__SectionProfile.js";
import Footer from "../src/components/Home/FooterPage";

const profile = () => {
  return (
    <>
      <Header />
      <NavProfile />
      <SectionProfile />
      <Footer />
    </>
  );
};

export default profile;
