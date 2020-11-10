import React from "react";

<<<<<<< HEAD
import { Register } from "../src/components/Register/Register";
import Footer from "../src/components/Home/FooterPage";
import Header from "../src/components/Header/HeaderPage";
=======
import Header from "../components/Header/HeaderPage";
import { Register } from "../components/Register/Register";
import Footer from "../components/Home/FooterPage";
>>>>>>> 887f5a24453e91e4e81f3c34c259c0a2b5d27603

export const login = () => {
	return (
		<>
			<Header />
			<Register />
			<Footer />
		</>
	);
};

export default login;
