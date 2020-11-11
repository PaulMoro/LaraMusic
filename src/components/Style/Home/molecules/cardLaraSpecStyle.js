import css from "styled-jsx/css";

export default css.cardLaraSpecStyle`

.card {
  display: inherit;
  flex-direction: column;
  align-items: center;
}
.card p {
  color: #525252;
  font-weight: 600;
}
.card img {
  width: 130px;
  height: 130px;
}
.card p {
  text-align: center;
  width: 5em;
}
@media screen and (max-width: 1023px) {

}
@media screen and (max-width: 768px) {
  .card p {
    font-size:1rem;
}
  .card img {
  width: 100px;
  height: 100px;
}
}
@media screen and (max-width: 600px) {

  .card p {
    font-weight:600;
    font-size:1.5rem;
}
}
@media screen and (max-width: 480px) {
    .card img {
  width: 100px;
  height: 100px;
}
  .card p {
    font-size:1rem;
}
}
@media screen and (max-width: 400px) {
    .card img {
  width: 100px;
  height: 100px;
}

}
`;
