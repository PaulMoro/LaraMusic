import React from "react";
import "../assets/style/componentStyle/com__LaraSpecs.scss";
import "../assets/style/componentStyle/global.scss";
function LaraSpecs() {
  return (
    <section className="lara__specs">
      <div className="container">
        <div className="lara__specs__description">
          <div className="description__section">
            <h1 className="description__title">
              Listening and watching anytime, anywhere
            </h1>
            <p className="description__p">
              The artists we represent are one of the most successful in Romania
              and also were a huge breakthrough.
            </p>
          </div>
          <div className="lara__specs__description__cards">
            <div className="card">
              <img src="../../assets/img/spec-1.png" alt="" />
              <p>We are in all devices</p>
            </div>
            <div className="card">
              <img src="../../assets/img/spec-2.png" alt="" />
              <p>Whitout advertising</p>
            </div>
            <div className="card">
              <img src="../../assets/img/spec-3.png" alt="" />
              <p>Total access</p>
            </div>
          </div>
        </div>
        <div className="lara__specs__img">
          <img src="../../assets/img/hero-cell.png" alt="" />
          <p></p>
        </div>
      </div>
    </section>
  );
}
export default LaraSpecs;
