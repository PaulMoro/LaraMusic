import css from "styled-jsx/css";

export default css.Com__NavProfileStyle`
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");
body {
  font-family: "Source Sans Pro", sans-serif;
}

h1 {
  font-size: 3.625rem;
  font-weight: 600;
}

h2 {
  font-size: 2.25rem;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  font-size: 1rem;
  font-weight: 300;
}

nav {
  width: 100%;
  height: 150px;
  background: #e5e5e5;
}

nav h2 {
  padding: 47px 0 34px 12%;
  font-size: 36;
  font-weight: 200;
  color: #585858;
}

.menu {
  padding-left: 12%;
}

.menu_actual {
  padding: 0px 14px 7px 14px;
  margin-bottom: 1px;
  border-bottom: 2px solid #9e4f9e;
  color: #9e4f9e;
  text-decoration: none;
  font-weight: 600;
}

.menu_noActual {
  padding: 0px 14px 7px 14px;
  text-decoration: none;
  color: #989898;
}
`;