import React from "react";
import HomeStyle from "./HomeStyle";
import HeroImg from "../../assets/img/hero-image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__img">
          <img src={HeroImg} alt="Hero-img" />
        </div>
        <div className="hero__info">
          <h1 className="hero__info__title">True music lovers</h1>
          <p className="hero__info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            est quas blanditiis, voluptates amet quasi, et nesciunt illum fugit
            doloribus sunt laudantium non fuga modi, accusamus dolorum delectus
            voluptate? Quo! <a href="">Terms and Conditions</a>
          </p>
          <a href="/login" className="hero__info__btn">
            Join Us
          </a>
        </div>
      </div>

      <style jsx HomeStyle>
        {HomeStyle}
      </style>
    </section>
  );
}
export default Hero;
