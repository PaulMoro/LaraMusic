import React from "react";
import "../assets/style/componentStyle/com__FooterPage.scss";
import "../assets/style/componentStyle/global.scss";
function Footer() {
  return (
    <footer>
      <div className="container">
        <img src="../../assets/img/lara_footer.png" alt="LogoLara" />
        <ul>
          <li>Terms and conditions</li>
          <li>Legal</li>
          <li>advertisers</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
