import css from "styled-jsx/css";

export default css.PlayStyles`
.info__song{
    grid-column:1/2;
    grid-row:4/5;
    background-color:#9E4F9E;
    display:flex;
    align-items:center;
    justify-content:center;
}

.info__song img {
    height:50px;
    margin-right:10px;
    border-radius:10%;
}
.artist h4{
color:white;
}
.artist p{
    color: #F69DA8;
    font-size:small;
}
.player{
    grid-column:2/3;
    grid-row:4/5;
    background-color:#0F1E36;
}
@media screen and (max-width: 1023px) {

}
@media screen and (max-width: 767px) {

}
@media screen and (max-width: 480px) {
    .info__song{
       grid-row: 13/14;
    }
    .player{                
        grid-row: 13/14;
    }
}
@media screen and (max-width: 3200px) {}
`;
