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
    font-size:1.1rem;
}
}
@media screen and (max-width: 480px) {
  .card img {
  width: 150px;
  height: 150px;
}
  .card p {
    font-size:1.5rem;
}
}
@media screen and (max-width: 320px) {
    .card img {
  width: 170px;
  height: 170px;
}
  .card p {
    font-size:1.8rem;
}
}
`;
