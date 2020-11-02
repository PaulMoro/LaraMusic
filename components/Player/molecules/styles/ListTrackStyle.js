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
  font-size: 16px;
  line-height: 22px;
}

.track_top {
  padding: 9px 10px;
  margin: 10px 0;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.track_top h4, .track_list_detail h4 {
  padding-right: 30%;
  text-align: start;
  font-size: 12px;
}

.track_top_detail {
  padding-left: 16px;
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.track_top_detailNumber{
  display: flex;
  justify-content: space-between;
  width: 63px;
}

.track_top_inf, .track_list_inf {
  width: 30%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 50px;
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

/* .track_top h4, .track_list_detail h4 {
  padding-right: 30%;
  text-align: start;
  font-size: 12px;
} */