import React from "react";
import "../assets/style/componentStyle/com__LaraSpecs.scss";
import "../assets/style/componentStyle/global.scss";
function LaraSpecs() {
  return (
    <section class="lara__specs">
      <div class="container">
        <div class="lara__specs__description">
          <div class="description__section">
            <h1 class="description__title">
              Listening and watching anytime, anywhere
            </h1>
            <p class="description__p">
              The artists we represent are one of the most successful in Romania
              and also were a huge breakthrough.
            </p>
          </div>
          <div class="lara__specs__description__cards">
            <div class="card">
              <img src="../../assets/img/spec-1.png" alt="" />
              <p>We are in all devices</p>
            </div>
            <div class="card">
              <img src="../../assets/img/spec-2.png" alt="" />
              <p>Whitout advertising</p>
            </div>
            <div class="card">
              <img src="../../assets/img/spec-3.png" alt="" />
              <p>Total access</p>
            </div>
          </div>
        </div>
        <div class="lara__specs__img">
          <img src="../../assets/img/hero-cell.png" alt="" />
          <p></p>
        </div>
      </div>
    </section>
  );
}
export default LaraSpecs;
