import css from "styled-jsx/css";

export default css.ArtistStyle`
		@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");
		.flex-x,
		.banner__toplist__info,
		.banner__toplist__info-description,
		.banner__toplist__info-description--desc .info-group,
		.banner__toplist__info-list .buttons,
		.filter-artist__select,
		.filter-artist__select ul,
		.filter-artist__genere,
		.filter-artist__covers {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.flex-y,
		.banner__toplist__info-description--desc,
		.filter-artist {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}

		.banner {
			display: -ms-grid;
			display: grid;
			-ms-grid-columns: 2fr 1fr;
			grid-template-columns: 2fr 1fr;
			-ms-grid-rows: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 10px;
		}

		.banner__toplist {
			-ms-grid-row: 1;
			-ms-grid-row-span: 2;
			grid-row: 1/3;
			-ms-grid-column: 1;
			-ms-grid-column-span: 1;
			grid-column: 1/2;
			position: relative;
			width: 100%;
			height: 100%;
		}

		.banner__toplist__image {
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
			-webkit-filter: blur(1px);
			filter: blur(1px);
			border-radius: 3px;
		}

		.banner__toplist__info {
			-webkit-box-align: end;
			-ms-flex-align: end;
			align-items: flex-end;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			overflow: hidden;
		}

		.banner__toplist__info-description {
			color: white;
		}

		.banner__toplist__info-description img {
			border-radius: 100px;
			margin: 20px;
		}

		.banner__toplist__info-description--desc {
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.banner__toplist__info-description--desc .info-item {
			margin: 5px;
		}

		.banner__toplist__info-description--desc .info-item .title {
			text-transform: capitalize;
			font-weight: 200;
			font-size: 0.75rem;
		}

		.banner__toplist__info-description--desc .info-item .number {
			font-weight: 600;
			font-size: 1.5rem;
		}

		.banner__toplist__info-description--desc h2 {
			text-transform: uppercase;
		}

		.banner__toplist__info-list {
			background: rgba(15, 30, 54, 0.9);
			border-radius: 0px 6px 6px 0px;
			padding: 30px;
			height: 100%;
			width: 20rem;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			position: relative;
		}

		.banner__toplist__info-list ol {
			font-weight: 400;
		}

		.banner__toplist__info-list ol li {
			border-bottom: solid 1px rgba(152, 152, 152, 0.2);
			padding: 10px;
			list-style: decimal-leading-zero;
			position: relative;
			font-size: 0.75rem;
			line-height: 1rem;
			color: white;
		}

		.banner__toplist__info-list ol li::before {
			content: url(../../assets/img/plus-symbol.svg);
			height: 10px;
			width: 10px;
			padding: 5px;
			position: absolute;
			left: 20px;
			margin-right: 30px;
		}

		.banner__toplist__info-list ol li::after {
			content: url(../images/playlist-more-text.svg);
			height: 10px;
			width: 10px;
			padding: 5px;
			position: absolute;
			right: 30px;
			bottom: 50%;
		}

		.banner__toplist__info-list ol li p {
			text-transform: capitalize;
			width: 120px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			font-size: 0.75rem;
			line-height: 1rem;
			color: white;
			margin-left: 60px;
		}

		.banner__toplist__info-list .buttons {
			background: -webkit-gradient(
				linear,
				left top,
				left bottom,
				from(rgba(0, 0, 0, 0)),
				color-stop(50%, #1d293f)
			);
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #1d293f 50%);
			position: absolute;
			height: 200px;
			bottom: 0;
			left: 0;
			right: 0;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: end;
			-ms-flex-align: end;
			align-items: flex-end;
		}

		.banner__toplist__info-list .buttons__single {
			padding: 10px;
			margin: 30px 5px;
			border: none;
			border-radius: 3px;
			text-transform: uppercase;
			font-size: 0.75rem;
			-webkit-transition: 0.5s ease;
			transition: 0.5s ease;
		}

		.banner__toplist__info-list .buttons__single:hover {
			opacity: 50%;
		}

		.banner__toplist__info-list .buttons__single-play::after {
			content: url("../images/play.svg");
			margin-left: 5px;
		}

		.banner__toplist__info-list .buttons__single-share::after {
			content: url("../images/share.svg");
			margin-left: 5px;
		}

		.banner__feature {
			position: relative;
		}

		.banner__feature img {
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
		}

		.banner__feature .feature1 {
			-ms-grid-column: 1;
			-ms-grid-column-span: 1;
			grid-column: 1 / 2;
			-ms-grid-row: 2;
			-ms-grid-row-span: 1;
			grid-row: 2 / 3;
		}

		.banner__feature .feature2 {
			-ms-grid-column: 2;
			-ms-grid-column-span: 1;
			grid-column: 2 / 3;
			-ms-grid-row: 2;
			-ms-grid-row-span: 1;
			grid-row: 2 / 3;
		}

		.banner__feature-background {
			background: -webkit-gradient(
				linear,
				left top,
				right top,
				from(rgba(15, 30, 54, 0)),
				color-stop(98.34%, #0f1e36)
			);
			background: linear-gradient(90deg, rgba(15, 30, 54, 0) 0%, #0f1e36 98.34%);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.banner__feature-label {
			top: 20px;
			left: 20px;
			position: absolute;
			background-color: black;
			font-weight: 400;
		}

		.banner__feature-label::before {
			content: "feature";
			color: white;
			background-color: rgba(0, 0, 0, 0.5);
			padding: 10px 20px;
			text-transform: uppercase;
			font-weight: lighter;
			font-size: 0.75rem;
		}

		.filter-artist {
			margin: 30px;
			background-color: #f1e2f1;
		}

		.filter-artist__select {
			margin: 20px 0;
		}

		.filter-artist__select ul {
			-webkit-box-pack: end;
			-ms-flex-pack: end;
			justify-content: flex-end;
			list-style: none;
		}

		.filter-artist__select ul li {
			padding: 10px;
		}

		.filter-artist__select ul li:active,
		.filter-artist__select ul li:hover {
			color: red;
		}

		.filter-artist__genere {
			-webkit-box-pack: start;
			-ms-flex-pack: start;
			justify-content: flex-start;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			margin: 0 40px;
		}

		.filter-artist__genere-item {
			width: 5rem;
			margin: 10px;
			border: solid #1d293f 1px;
			border-radius: 6px;
			padding: 10px;
			font-size: 0.75rem;
			text-align: center;
			font-size: 0.75rem;
			-webkit-transition: 0.5s ease;
			transition: 0.5s ease;
			cursor: pointer;
		}

		.filter-artist__genere-item:active,
		.filter-artist__genere-item:hover {
			background-color: #3e2ad1;
			color: white;
		}

		.filter-artist__covers {
			-webkit-box-pack: start;
			-ms-flex-pack: start;
			justify-content: flex-start;
			overflow: scroll;
			-ms-flex-wrap: nowrap;
			flex-wrap: nowrap;
		}

		.filter-artist__covers-item img {
			width: 200px;
			margin: 20px 30px;
			border-radius: 100px;
		}

		.filter-artist__covers-item p {
			text-align: center;
		}

		@media screen and (max-width: 940px) {
			.banner {
				-ms-grid-columns: 1fr 1fr;
				grid-template-columns: 1fr 1fr;
			}
			.banner__toplist {
				-ms-grid-row: 1;
				-ms-grid-row-span: 2;
				grid-row: 1/3;
				-ms-grid-column: 1;
				-ms-grid-column-span: 2;
				grid-column: 1/3;
			}
		}

		.main-container {
			grid-column: 2/3;
			grid-row: 2/3;
}
	`;
