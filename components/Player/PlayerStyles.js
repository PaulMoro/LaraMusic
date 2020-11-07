import css from "styled-jsx/css";
export default css.PlayerStyles`
#headerHome {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  justify-content: space-between;
}

.searchBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20rem;
  padding-left: 1rem;
  background-color: transparent;
}

.searchBar_icon {
  height: 1rem;
  opacity: 0.5;
  cursor: pointer;
}

.searchBar input {
  height: 2rem;
  width: 30rem;
  padding-left: 1rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #0f1e36;
  background-color: transparent;
  border-style: none;
  opacity: 0.5;
}

.searchBar input:focus {
  outline: none;
}

header ul {
  display: flex;
  justify-content: flex-end;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
}

.iconsTop {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.iconsTop figure {
  padding: 1.5rem 2rem;
  height: 68px;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
  border-left: 1px solid rgba(15, 30, 54, 0.05);
}
.userInf {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
}

.userInf img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.userInf__prop a {
  cursor: pointer;
  font-size: 1rem;
  color: #0f1e36;
  opacity: 0.7;
  text-decoration: none;
  text-transform: capitalize;
}

.userInf__prop a:hover {
  opacity: 1;
}

nav {
  grid-column: 1/2;
  grid-row: 1/4;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
}

.logo {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  height: 40px;
  padding: 0 2rem;
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.container h2 {
  font-size: 14px;
  margin: 1rem 0;
}

.list li,
.list li a {
  padding: 5px 0px;
  list-style: none;
  display: flex;
  height: 40px;
  color: #0f1e36;
  cursor: pointer;
  opacity: 0.9;
}

.list li a {
  text-decoration: none;
}

.list li:hover,
.list li a:hover {
  color: #9e4f9e;
  mix-blend-mode: normal;
}

strong {
  font-weight: 300;
  text-transform: capitalize;
}
.list li a:visited {
  text-decoration: none;
}

.list strong {
  padding-left: 1rem;
  font-size: 14px;
}
@media screen and (max-width: 1023px) {
}
@media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 480px) {
}

`;
