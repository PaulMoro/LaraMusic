import React from "react";

import Hero from "../src/components/Home/Hero";
import LaraSpecs from "../src/components/Home/LaraSpecs";
import TopArtist from "../src/components/Home/TopArtist";
import Footer from "../src/components/Home/FooterPage";
import Header from "../src/components/Header/HeaderPage";


function LandingPage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <LaraSpecs></LaraSpecs>
      <TopArtist></TopArtist>
      <Footer></Footer>
    </>
  );
}
export default LandingPage;
