import css from "styled-jsx/css";

export default css.Header`
header {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  height: 68px;
  width: 100%;
  right: 0px;
  border: 1px solid red;
}

.searchBar {
  height: 68px;
  width: 50%;
  display: flex;
}

.searchBar_icon{
  opacity: .5;
  width: 25px;
  height: 25px;
  padding-left: 22px;
  padding-top: 22px;
}

.searchBar input {
  color: #0F1E36;
  font-size:1rem;
  border: 0px;
  background-color: #F5F5F5;
  height: 2rem;
  width:30rem;
  border: 1px solid red;
  top: 0px;
  padding-left: 42px;
}

.searchBar input:focus {
  outline: none;
}

header ul {
  display: flex;
  width: 50%;
}

header ul li {
  list-style: none;
  border-left: 1px solid rgba(15, 30, 54, 0.05);
}

.iconsTop {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iconsTop img {
  height: 30px;
}

.userInf {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userInf img{
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.userInf__prop{
  display: inline;
  margin-left: 9px;
}

.userInf__prop h4{
  font-size: 18px;
}

`;
