import React from "react";

import Header from "../components/Home/HeaderPage";
import Login from "../components/Login/Login";
// import Login from "../components/Login/Login";
import Footer from "../components/Home/FooterPage";

export const login = () => {
  return (
    <>
      <Header />
      <Login></Login>
      <Footer />
    </>
  );
};

export default login;
