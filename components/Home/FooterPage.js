import React from "react";
import HomeStyle from "./HomeStyle";
import logoFooter from "../../assets/img/lara_footer.png";

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
