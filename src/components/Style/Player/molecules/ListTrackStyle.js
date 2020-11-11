import css from "styled-jsx/css";

export default css.ListTrackStyle`
.track{
  height: 351px;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-y: scroll;
}
.track::-webkit-scrollbar{
    display: none;
}
.track h2{
  padding-left: 16px;
  font-size: 1.3rem;
  line-height: 22px;
  font-weight: bold;
}

.tab__top {
  display: flex;
  padding: 1rem 1rem;
}

.tab__top p {
  font-weight: bold;
  opacity:0.7;
}

.tab__top__number {
  width: 30%;
}

.tab__top__tittel,
.tab__music__tittel,
.tab__top__plays,
.tab__music__plays,
.tab__top__time, 
.tab__music__time, 
.tab__top__option, 
.tab__music__icon {
  width: 20%;
  padding-left: 5%; 
}
.tab__music__titlel{
   width: 350px;
   padding:0;
   text-align:left;
}
.tab__music__icon {
  padding-left: 7%;
}


.tab__music{
  display:flex;

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

.tab__music__icons{
  width: 30%;
  display:flex;
  justify-content:space-between;
}

.icon{
  cursor:pointer;
  opacity:0.5;
}
.icon:hover{
  opacity:1;
}


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

.about__album {
  margin-top: 5em;
  grid-column: 2/4;
  grid-row: 3/5;
  display: flex;
  background: linear-gradient(#faf0fa, #d6cbd6);
  position: relative;
 
}
`;

/* .track_top h4, .track_list_detail h4 {
  padding-right: 30%;
  text-align: start;
  font-size: 12px;
} */
