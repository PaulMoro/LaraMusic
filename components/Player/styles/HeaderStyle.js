import css from "styled-jsx/css";

export default css.Header`

#headerHome {
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  justify-content:space-between;
  
}

.searchBar {
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding-right:20rem;
  padding-left:1rem;
  background-color:transparent;
}

.searchBar_icon{
  height: 1rem;
  opacity: .5;
  cursor:pointer;
}

.searchBar input {
  height: 2rem;
  width:30rem;
  padding-left: 1rem;
  margin-left: .5rem;
  font-size:1rem;
  color: #0F1E36;
  background-color: transparent;
  border-style:none;
  opacity:.5;
}

.searchBar input:focus {
  outline: none;
}

header ul {
  display: flex;
  justify-content:flex-end;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
}

.iconsTop {  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  
}
.iconsTop figure{
  padding: 1.5rem 2rem;
  height:68px;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
  border-left: 1px solid rgba(15, 30, 54, 0.05);
}
.userInf {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
}

.userInf img{
  width: 2rem;
  height: 2rem;
  margin-right:.5rem;
  border-radius: 50%;
  object-fit:cover;
}

.userInf__prop a{
  cursor: pointer;
  font-size: 1rem;
  color: #0F1E36;
  opacity:0.5;
  text-decoration: none;
}

.userInf__prop h4:hover{
  opacity:1;
}

`;
