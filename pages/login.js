import React from "react";

import Header from "../components/Home/HeaderPage";
import Login from "../components/Login/Com__Login";
import Footer from "../components/Home/FooterPage";

export const login = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default login;
