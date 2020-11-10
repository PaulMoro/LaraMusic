import React from "react";
import HeroImg from "../../../assets/img/hero-image.png";
import HomeStyle from "../Style/Home/HomeStyle";

function Hero() {
  return (
    <section className="hero">
      <div className=" container">
        <div className="hero__img">
          <img src={HeroImg} alt="Hero-img" />
        </div>
        <div className="hero__info">
          <h1 className="hero__info__title">True music lovers</h1>
          <p className="hero__info__description">
            In Lara Music you can play your favorite music sets in playlist by
            albums, artist, genere and suggested, Here the music never stops!
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
