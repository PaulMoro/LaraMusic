import React from 'react';

import { Register } from '../src/components/Register/Register';
import Footer from '../src/components/Home/FooterPage';
import Header from '../src/components/Header/HeaderPage';

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
