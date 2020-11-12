import css from "styled-jsx/css";

export default css.sectionPopular`
#trending {
  grid-column:2/3;
  gird-row:2/3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  color: white;
  background: linear-gradient(#e9a0e9, #9e4f9e);
  margin-bottom:1rem;
}

#trending img {
  object-fit: fill;
  overflow:hidden;
  margin-left:40%;
}

#trending h3 {
  position: absolute;
  top: 80px;
  left: 50px;
  text-transform:uppercase;
  font-size: .8rem;
  text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.25);
}

#trending h1 {
  position: absolute;
  text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.25);
  top: 110px;
  left: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 30px;
  width: 35%;
}

#trending h2 {
  position: absolute;
    text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.25);
  font-weight:400;
  top: 160px;
  left: 60px;
  font-size: .8rem;
}

.buttons {
  position: absolute;
  top: 200px;
  left: 50px;
}

.buttons__one {
  padding: .8rem 1.5rem;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: 0.5s ease;
  background-color:white;
  opacity:.75;
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.buttons__one:hover{
opacity:1;
cursor:pointer;
}


`;
