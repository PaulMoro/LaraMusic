import css from "styled-jsx/css";
export default css.ContentMusicStyles`
.content__music{
  width: 60vw;
  margin:3rem 0 ;
  max-width:1720px;
}
.tab__music{
  display:flex;
  justify-content:space-between;
  padding: 1rem 1rem;
}

.tab__music:hover{
  transition: all 0.3s ease-in-out;
  background-color:white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor:context-menu;
}
.tab__music:hover{
  transition: all 0.3s ease-in-out;
  background-color:white;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor:context-menu;
}
.icon{
  cursor:pointer;
  opacity:0.5;
}
.icon:hover{
  opacity:1;
}
`;
