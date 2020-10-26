import styled from "styled-components";
/* import  Logo  from "../../img/lara_header_white.png" */
/*   background-image: url(${Logo}); */

const Main = styled.main`
	grid-column: 1/2;
	grid-row: 1/3;
	padding-left: 25px;
	border-right: 1px solid rgba(15, 30, 54, 0.05);
`;

const Img = styled.img`
	width: 108px;
	height: 32px;
	margin-top: 32px;
`;

const Tittle = styled.h2`
	font-size: 14px;
`;

const Container = styled.div`
	height: 565px;
	display: flex;
	flex-direction: column;
`;

const Container_item = styled.li`
	margin: 12px 0px;
	padding: 5px 0px;
	list-style: none;
	display: flex;
	align-self: center;
	color: #1d293f;
	opacity: 0.5;
	font-size: 14px;
`;

const Icon = styled.div`
	margin-right: 17px;
`;

export { Main, Img, Tittle, Container, Container_item, Icon };
