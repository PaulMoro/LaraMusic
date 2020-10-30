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
}
.song__item{
   position: relative;
}
.song__item p:hover{
  display:none;
}
.icon__play{
  display:none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  justify-content: center;
}
.tab__music:hover .icon__play{
/*  display: flex;*/
  
}


`;
