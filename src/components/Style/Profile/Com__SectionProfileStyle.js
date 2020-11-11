import css from "styled-jsx/css";

export default css.Com__SectionProfileStyle`
#sectionProfile {
  margin: 35px 12% 0 12%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.userInf {
  width: 29%;
  height: 620px;
  display: block;
  border-right: 1px solid rgba(181, 181, 181, 0.5);
}

.userInf div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.userInf__photo {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  padding: 12px;
}

.userInf h2 {
  text-align: center;
  font-size: 36px;
  font-weight: 200;
  letter-spacing: -1px;
  color: #585858;
}

.userInf h4 {
  text-align: center;
  font-size: 12px;
  color: #ffc24b;
  font-weight: 600;
}

.userInf p {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  font-size: 12;
  color: #3e2ad1;
  font-weight: 600;
  padding-top: 33px;
  margin-left: 40%;
}

.userInf p div {
  width: 16px;
  height: 11px;
}

.userForm {
  width: 71%;
  height: 620px;
  margin: 12px 0 0 54px;
}

.userForm h1 {
  font-size: 58px;
  font-weight: 200;
  line-height: 64px;
  letter-spacing: -1px;
}

.userForm p {
  font-size: 16px;
  padding-top: 9px;
  color: #989898;
}

.infAccount {
  margin-top: 47px;
}

.infAccount__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 23px;
}

.infAccount__container__name {
  width: 90px;
  font-size: 14px;
  color: #585858;
  padding-top: 30px;
}

.infAccount__container input {
  font-size: 24px;
  padding: 10px 10px 8px 25px;
  width: 467px;
  border: none;
  border-bottom: 1px solid #989898;
}

.infAccount__container input:focus {
  outline: none;
  border-bottom: 1px solid #9e4f9e;
}

.userForm button {
  width: 133px;
  height: 51px;
  border-radius: 39px;
  border: none;
  background-color: #9e4f9e;
  color: #ffc24b;
  font-size: 18px;
  font-weight: bolder;
  text-decoration: none;
  cursor: pointer;
}

.userInf button:focus,
button:active {
  outline: none;
  opacity: 0.9;
}

`;
