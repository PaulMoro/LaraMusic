import React from "react";

<<<<<<< HEAD
import Header from "../components/Home/Com__HeaderPage";
import { UserTabs } from "../components/Login/UserTabs";
import Footer from "../components/Home/Com__FooterPage";

export const login = () => {
	return (
		<>
			<Header />
			<UserTabs />
			<Footer />
		</>
	);
=======
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
>>>>>>> fabian
};

export default login;
