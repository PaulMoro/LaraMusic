import css from "styled-jsx/css";

export default css.HeaderLinksStyle`

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
