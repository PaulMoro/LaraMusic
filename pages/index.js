import React from "react";
import Header from "../components/Home/HeaderPage";
import Hero from "../components/Home/Hero";
import LaraSpecs from "../components/Home/LaraSpecs";
import TopArtist from "../components/Home/TopArtist";
import Footer from "../components/Home/FooterPage";
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
