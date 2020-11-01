import css from "styled-jsx/css";

export default css.Nav`
nav {
  grid-column: 1/2;
  grid-row: 1/4;
  display:flex;
  flex-direction:column;
  border-right: 1px solid rgba(15, 30, 54, 0.05);
}

.logo {
  display: flex;
  justify-content:center;
  margin: 1.5rem 0;
  object-fit: cover;
  cursor:pointer;
}
.container {
  display: flex;
  flex-direction: column;
  margin-top:1rem;
}

.container h2 {
  font-size: 14px;
  margin: 1rem 0;
}

.list li,  .list li a{
  padding: 5px 0px;
  list-style: none;
  display: flex;
  height: 40px;
  color: #0F1E36;
  cursor:pointer;
  opacity: 0.5;
}

.list li a{
  text-decoration: none;
}

.list li:hover, .list li a:hover {
  color:#9e4f9e;
  mix-blend-mode: normal;
}


.list li a:visited{
  text-decoration: none;
} 

.list strong {
  padding-left:1rem;
  font-size: 14px;
}

`;
