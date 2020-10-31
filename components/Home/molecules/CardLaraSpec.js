import React from "react";
import cardLaraSpecStyle from "./styles/CardLaraSpecStyle";
import Spec1 from "../../../assets/img/spec-1.png";
import Spec2 from "../../../assets/img/spec-2.png";
import Spec3 from "../../../assets/img/spec-3.png";

function CardLaraSpec() {
  return (
    <>
      <div className="card">
        <img src={Spec1} alt="" />
        <p>We are in all devices</p>
      </div>
      <div className="card">
        <img src={Spec2} alt="" />
        <p>Whitout advertising</p>
      </div>
      <div className="card">
        <img src={Spec3} alt="" />
        <p>Total access</p>
      </div>

      <style jsx cardLaraSpecStyle>
        {cardLaraSpecStyle}
      </style>
    </>
  );
}
export default CardLaraSpec;
