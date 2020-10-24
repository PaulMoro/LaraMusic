import React from "react";
import CardLaraSpec from "../components/molecules/Mol__CardLaraSpec";
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
            <CardLaraSpec></CardLaraSpec>
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
