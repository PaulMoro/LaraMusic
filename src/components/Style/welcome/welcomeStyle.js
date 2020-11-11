import css from "styled-jsx/css";
export default css.WelcomeStyle`
.hero {
  background-color: #9e4f9e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  height: 600px;
  min-width: 1124px;
}
.hero__info h1 {
  color: white;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.hero__info__description {
  margin: 1.5rem 0;
  color: white;
  font-weight: 300;
  line-height: 2em;
  max-width: 500px;
}
.hero__info__description strong {
  text-decoration: none;
  color: #ffc24b;
}
.hero__info__btn {
  color: #9e4f9e;
  border: 0.1em solid #ffc24b;
  background-color: #ffc24b;
  border-radius: 30px;
  padding: 0.5em 1.5em;
  font-weight: 400;
  text-decoration: none;
  font-size: 1.5em;
  position: absolute;
  left: 30%;
  margin-top: 1em;
}
.hero__info__btn:hover {
  color: #ffc24b;
  background-color: transparent;
  border: 0.1em solid #ffc24b;
}

`;
