import css from "styled-jsx/css";

export default css.HomeStyle`
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
`;
