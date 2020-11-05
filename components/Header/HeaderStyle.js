import css from "styled-jsx/css";

export default css.HomeStyle`
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e4f9e;
  height: 100px;
  padding: 0 10%;
  min-width:1124px;
}
.header__img__container img {
  height: 50px;
}

.perfil {
  padding: 28px 12% 0px 0px; 
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.perfil img {
  padding: 0;
  width: 43px;
  height: 43px;
  border-radius: 50%;
}

.perfil h4 {
  font-size: 16px; /* $fs-regular */
  color: #F9F9F9; /* $background */
}

.perfil button {
  font-size: 12px; /* $fs-small */
  color: #FFC24B; /* $secondary-color */
  font-weight: 600; /* $font-semi-bold */
  background-color: transparent;
  border: none;
  text-decoration: underline;
}
.header__links a {
  text-decoration: none;
  margin-right: 1.5em;
  letter-spacing: 0.2px;
}
.header__link--player {
  color: white;
  font-weight: 300;
}
.header__link--login {
  color: #ffc24b;
  border: 0.1em solid #ffc24b;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-weight: 700;
}
.header__link--login:hover {
  border-color: #dd980d;
  color: #dd980d;
}
.header__link--player:hover {
  color: rgb(214, 214, 214);
}
`;
