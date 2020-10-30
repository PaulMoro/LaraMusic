import css from "styled-jsx/css";

export default css.Nav`
nav {
  height: 100vh;
  grid-column: 1/2;
  grid-row: 1/3;
  padding-left: 25px;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
}

.logo {
  height: 100px;
  display: flex;
  align-items: center;
}

.logo  img{
  width: 108px;
  height: 34px;
}

.container {
  height: 565px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav h2 {
  font-size: 14px;
}

.list li {
  padding: 5px 0px;
  list-style: none;
  display: flex;
  align-self: center;
  height: 45px;
}

.list p {
  padding-left: 15px;
  font-size: 14px;
}

.list img{
  width: 30px;
  height: 30px;
}
`;
