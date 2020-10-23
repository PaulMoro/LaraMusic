import React from "react";
function Hero() {
  return (
    <section class="hero">
      <div class="container">
        <div class="hero__img">
          <img src="../../assets/img/hero-image.png" alt="Hero-img" />
        </div>
        <div class="hero__info">
          <h1 class="hero__info__title">True music lovers</h1>
          <p class="hero__info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            est quas blanditiis, voluptates amet quasi, et nesciunt illum fugit
            doloribus sunt laudantium non fuga modi, accusamus dolorum delectus
            voluptate? Quo! <a href="">Terms and Conditions</a>
          </p>
          <a href="" class="hero__info__btn">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
