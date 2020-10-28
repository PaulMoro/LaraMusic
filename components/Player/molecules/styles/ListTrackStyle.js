import css from "styled-jsx/css";

export default css.ListTrackStyle`
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

.track_list:hover {
  background-color: #F9F9F9;
  -webkit-box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.04);
          box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.04);
}

.track_list {
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

.track_list_detail {
  padding-left: 16px;
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.track_list_infOptions img {
  width: 20px;
  height: 24px;
}
`;
