import css from "styled-jsx/css";

export default css.HomeStyle`
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");

.header {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	height: 100px;
	padding: 0 10%;
	background-color: #9e4f9e;
}

.header__img__container img {
	height: 50px;
}

.hero {
	background-color: #9e4f9e;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 1em 10%;
	position: relative;
	height: 600px;
}

.hero__info {
	position: absolute;
	top: 40%;
	left: 50%;
	right: 10%;
	max-width: 600px;
}

.hero__info h1 {
	color: #f7f0f6;
	font-size: 58;
	font-weight: 400;
	letter-spacing: 0.2px;
}

.hero__img {
	position: absolute;
	top: 2em;
}

.hero__info__description {
	color: #f7f0f6;
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
	font-size: 24;
	position: absolute;
	left: 30%;
	margin-top: 1em;
}

.hero__info__btn:hover {
	color: #ffc24b;
	background-color: transparent;
	border: 0.1em solid #ffc24b;
}

.lara__specs {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	padding: 0 10%;
}

.description__section {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 40vw;
	max-width: 500px;
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
	color: #585858;
	font-size: 16;
	margin-top: 1em;
	width: 25vw;
}

.lara__specs__description__cards {
	margin-top: 5em;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	width: 30vw;
	max-width: 600px;
}

.lara__specs__description__cards img {
	width: 130px;
	height: 130px;
}

.lara__specs__description__cards p {
	text-align: center;
	width: 5em;
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


.artist {
	margin-top: 50em;
	padding: 0 10%;
}

.artist__info {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

.artist__info h1 {
	color: #1d293f;
	font-size: 3rem;
	font-weight: 400;
}

.artist__info p {
	color: #585858;
	font-size: 16;
	margin-top: 1em;
	width: 25vw;
	text-align: center;
}

.grid__container__artist {
	padding: 0 10%;
	margin-top: 5%;
	display: -ms-grid;
	display: grid;
	-ms-grid-rows: 1fr 1fr;
	-ms-grid-columns: 1fr 1fr 1fr;
	grid-template: 1fr 1fr/ 1fr 1fr 1fr;
	gap: 2em;
}



footer {
	padding: 0 10%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin-top: 5em;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	background-color: #f9f9f9;
}

footer img {
	height: 50px;
	margin: 21px 0px 108px 0px;
}

footer ul {
	width: 500px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: space-evenly;
	-ms-flex-pack: space-evenly;
	justify-content: space-evenly;
}

footer li {
	font-weight: 300;
	margin-top: 10%;
	list-style: none;
	color: #989898;
	letter-spacing: 2px;
}
`;
