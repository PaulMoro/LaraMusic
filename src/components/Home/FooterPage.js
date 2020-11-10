import React from "react";
import logoFooter from "../../../assets/img/lara_footer.png";
import HomeStyle from "../Style/Home/HomeStyle";

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logoFooter} alt="LogoLara" />
        <ul>
          <li>Terms and conditions</li>
          <li>Legal</li>
          <li>Advertisers</li>
        </ul>
      </div>

      <style jsx HomeStyle>
        {HomeStyle}
      </style>
    </footer>
  );
}
export default Footer;
