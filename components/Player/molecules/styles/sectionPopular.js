import css from "styled-jsx/css";

export default css.sectionPopular`
#trending {
  position: relative;
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
  width: 100%;
  height: 307px;
  color: #0F1E36;
}

#trending img {
  height: 100%;
  object-fit: cover;
}

#trending h3 {
  position: absolute;
  top: 92px;
  left: 53px;
  font-size: 10px;
}

#trending h1 {
  position: absolute;
  top: 113px;
  left: 53px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
}

#trending h2 {
  position: absolute;
  top: 180px;
  left: 53px;
  font-size: 16px;
}

.buttons {
  position: absolute;
  top: 237px;
  left: 53px;
}

.buttons__one{
  padding: 10px;
  margin: 3px 5px;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}

.buttons__two{
  padding: 10px;
  margin: 3px 5px;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.75rem;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}
`;
