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
  min-width: 1124px;
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
  max-width: 500px;
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
  display: flex;
  padding: 0 10%;
  min-width: 1124px;
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
}
/* Top Artist */
.artist {
  margin-top: 45rem;
  padding: 0 10%;
  min-width: 1124px;
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
.grid__container__artist {
  padding: 0 10%;
  margin-top: 5%;
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
  min-width: 1124px;
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
@media screen and (max-width: 1023px) {
  .hero__info {
    margin-left: 5rem;
  }
  .hero__info h1 {
    font-size: 3.1rem;
  }
  .description__section {
    width: 60vw;
  }
  .description__p {
    font-size: 1.3rem;
    width: 40vw;
  }
  .lara__specs__img {
    left: 60%;
  }
  .grid__container__artist {
    padding: 0;
  }

}
@media screen and (max-width: 768px) {
  .hero__info {
    top: 30%;
  }
  .hero__info h1 {
    font-size: 3.2rem;
  }
  .hero__info__description {
    font-size: 1.2rem;
  }
  .lara__specs__img {
    left: 73%;
  }
  .artist__info p {
    font-size: 1.5rem;
    width: 70vw;
  }
}
@media screen and (max-width: 480px) {
  .hero {
    position: static;
    align-items: center;
    height: 500px;
    padding: 0;
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
    font-size: 6rem;
    width: auto;
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
    padding: 0 55%;
  }
  .description__section {
    width: auto;
  }
  .description__title {
    font-size: 4.5rem;
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
  .lara__specs__description__cards {
    width: auto;
  }
  .lara__specs__img {
    margin-top: 3rem;
    padding: 0 2rem;
    display: block;
    position: static;
  }
  .lara__specs__img img {
    width: 500px;
    height: 650px;
    object-fit: contain;
  }
  .artist {
    margin-top: 8rem;
  }
  .artist__info h1 {
    font-size: 5rem;
  }
  .artist__info p {
    font-size: 2rem;
    width: 90vw;
  }
  .grid__container__artist {
    margin: 5rem 10%;
    grid-template: 1fr 1fr 1fr /1fr 1fr;
    column-gap: 7em;
    row-gap: 5em;
  }
}
@media screen and (max-width: 320px) {

  .hero__info__description {
    font-size: 1.7rem;
  }
  .description__p {
    font-size: 2.2rem;
  }
  .lara__specs__img {
    margin: 0 5rem;
  }
  .lara__specs__description__cards {
    width: 200vw;
    padding: 0;
    margin: 5rem 3rem;
  }
  .artist__info p {
    width: 60%;
  }
}

`;
