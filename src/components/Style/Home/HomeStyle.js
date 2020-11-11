import css from "styled-jsx/css";

export default css.HomeStyle`
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");

/* Hero */
.hero {
  background-color: #9e4f9e;
  display: flex;
  justify-content: space-between;
  padding: 1rem 10%;
  position: relative;
  height: 600px;
  width:100%;
}
.hero__info {
  position: absolute;
  top: 40%;
  left: 50%;
  right: 10%;
}
.hero__info h1 {
  color: white;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 0.2px;
}
.hero__img {
  position: absolute;
  top: 2em;
}
.hero__info__description {
  margin: 1.5rem 0;
  color: white;
  font-weight: 300;
  line-height: 2em;

}
.hero__info__description a {
  text-decoration: none;
  color: #ffc24b;
}
.hero__info__btn {
  color: #9e4f9e;
  border: 0.1em solid #ffc24b;
  background-color: #ffc24b;
  border-radius: 30px;
  padding: 0.5em 1.5em;
  font-weight: 400;
  text-decoration: none;
  font-size: 1.5em;
  position: absolute;
  left: 30%;
  margin-top: 1em;
}
.hero__info__btn:hover {
  color: #ffc24b;
  background-color: transparent;
  border: 0.1em solid #ffc24b;
}
/* Lara Specs */
.lara__specs {
    margin-top: 2rem;
  display: flex;
  height:100vh;
  padding: 0 10%;
}
.description__section {
  display: flex;
  flex-direction: column;
  width: 40vw;
}
.lara__specs__description {
  position: absolute;
  margin-top: 7em;
}
.description__title {
  color: #1d293f;
  font-size: 3em;
  font-weight: 400;
}
.description__p {
  color: #525252;
  font-size: 1em;
  margin-top: 1em;
  width: 25vw;
}
.lara__specs__description__cards {
  margin-top: 5em;
  display: flex;
  justify-content: space-between;
  width: 30vw;
}
.lara__specs__img {
  position: absolute;
  left: 53%;
  margin-top: 1%;
}
.lara__specs__img img {
  width: 500px;
  height: 650px;
     object-fit: contain;
}
/* Top Artist */
.artist {
  margin-top: 4rem;
  padding: 0 10%;
}
.artist__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.artist__info h1 {
  color: #1d293f;
  font-size: 3em;
  font-weight: 400;
}
.artist__info p {
  color: #525252;
  font-size: 1em;
  margin-top: 1em;
  width: 25vw;
  text-align: center;
}
.container__grid{
  display:flex;
  margin-top:2rem;
}
.grid__container__artist {
  margin:0 auto;
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr 1fr;
  gap: 2em;
}
/* Footer */
footer {
  
  display: flex;
  height:100px;
  margin-top: 5em;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 0 10%;
  padding-top: 1rem;
}
footer img {
  height: 50px;
}
footer ul {
  display: flex;
  justify-content: space-evenly;
}
footer li {
  margin-right:2rem;
  font-weight: 300;
  list-style: none;
  color: #989898;
  letter-spacing: 2px;
}
@media screen and (max-width: 1024px) {
.hero__img{
      top:7rem;
}
  .hero__img img{

    width:400px;
  }
  .hero__info {
    margin-left: 3rem;
  }
  .hero__info h1 {
    font-size: 3.1rem;
  }
  .description__section {
    width: 50vw;
  }
  .description__p {
    font-size: 1.3rem;
    width: 40vw;
  }
  .lara__specs__img {
    left: 57%;
  }
  .lara__specs__description{
    margin-top:4rem;
  }
  .lara__specs__img img{
    width:400px;
    height:550px;
  }
  .grid__container__artist {
    padding: 0;
  }
.artist {
  margin-top: 1rem;
}
}
@media screen and (max-width: 768px) {
  .hero{
    height:70vh;
  }
  .hero__img{
      top:3rem;
}
  .hero__img img{

    width:300px;
  }
  .hero__info {
    margin-left: 2rem;
  }
  .lara__specs{
    height:450px;
  }
    .lara__specs__description{
    margin-top:2rem;
  }
  .lara__specs__img img{
    width:300px;
    height:400px;
  }
  .hero__info {
    top: 30%;
  }
  .hero__info h1 {
    font-size: 2.5rem;
  }
  .hero__info__description {
    font-size: .9rem;
  }
  .hero__info__btn{
    top:14rem;
    margin-top:0;
  }
  .description__title{
    font-size: 2rem;
  }
  .description__p{
    font-size: 1rem;
    
  }
    .grid__container__artist {
  
    grid-template: 1fr 1fr 1fr /1fr 1fr;

  }
  .artist__info p {
    font-size: 1.5rem;
    width: 70vw;
  }
    footer ul {
   
    flex-direction:column;
    text-align:right;
}
  footer ul li {
  margin:0;
}
}
@media screen and (max-width: 600px) {
  .hero {
    position: static;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
  .hero__img {
    display: none;
  }
  .hero__info {
    position: static;
    margin: 0;
  }
  .hero__info h1 {
    font-size: 3.5rem;
    text-align:center;
  }
  .hero__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero__info__description {
    font-size: 1.5rem;
    text-align: center;
  }
  .hero__info__btn {
    font-size: 1.7rem;
    position: static;
  }
  .lara__specs {
    display: inline-block;
    height: auto;
    
  }
  .lara__specs__description__cards {
    width:auto;
  }
  .description__section {
    width: auto;
  }
  .description__title {
    font-size: 3.5rem;
    text-align: center;
  }
  .description__p {
    font-size: 2.2rem;
    width: auto;
    text-align: center;
  }
  .lara__specs__description {
    position: static;
  }

  .lara__specs__img {
    margin-top: 1rem;
    // padding: 0 5rem;
    display: flex;
    position: static;
    justify-content:center;
  }
  .lara__specs__img img {
    width: 250px;
    object-fit: contain;
  }
  .artist {
    margin-top: 3rem;
  }
  .artist__info h1 {
    font-size: 5rem;
  }
  .artist__info p {
    font-size: 2rem;
    width: 90vw;
  }
    .grid__container__artist {
  
    grid-template: 1fr 1fr 1fr 1fr / 1fr;

  }



}
@media screen and (max-width: 480px) {

  .hero__info__description {
    font-size: 1.7rem;
  }
  .description__title{
    font-size: 3rem;

  }
  .description__p {
    font-size: 2rem;
    // width:0;
  }
  .lara__specs__img {
    margin: 0 5rem;
  }

  .lara__specs__img {
    padding: 0 5rem;
    width:0;
  
  }
  .artist__info h1 {
   text-align:center;
  }
}
@media screen and (max-width: 320px) {

  .hero__info h1{
  font-size:2rem;
}
.hero__info p{
  font-size:1.5rem;

}
    .lara__specs__img {
    padding: 0 1.5rem;
    width:0;
  
  }
  .lara__specs__description__cards {
    flex-direction:column;
  }
  .description__title{
    font-size: 2rem;

  }
  .description__p {
    font-size: 1.5rem;
  }
    footer ul li {
  font-size:.7rem;
}
.artist__info h1{
  font-size:2rem;

}
.artist__info p{
  font-size:1.2rem;
}
}
`;
