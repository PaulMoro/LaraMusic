import css from "styled-jsx/css";

export default css.HomeStyle`
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e4f9e;
  height: 100px;
  padding: 0 10%;
}
.header__img  {
  height: 50px;
  cursor:pointer;
}

.perfil {
  display: flex;
  align-items: center;
}

.perfil img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}
.perfil__img {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.perfil h3 {
  font-size: 1rem;
  color: #f9f9f9;
  font-weight:400;
  text-transform: capitalize;
  cursor: context-menu;
}
.perfil h3:hover{
  opacity:0.8;
  cursor:pointer;
}

.perfil button {
  font-size: 12px;
  color: #ffc24b;
  font-weight: 300;
  background-color: transparent;
  border: none;
  text-decoration: none;
}
.perfil button:hover{
  opacity:0.8;
  cursor:pointer;
  text-decoration: underline;
}
.header__links {
  display: flex;
  align-items: center;
}
.header__links a {
  text-decoration: none;
  margin-right: 1.5em;
  letter-spacing: 0.2px;
}
.header__link--player {
  color: white;
  font-weight: 300;
}
.header__link--login {
  color: #ffc24b;
  border: 0.1em solid #ffc24b;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-weight: 700;
}
.header__link--login:hover {
  border-color: #dd980d;
  color: #dd980d;
}
.header__link--player:hover {
  color: rgb(214, 214, 214);
}
@media screen and (max-width: 1023px) {

}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 600px) {
  .header__links a{
    font-size:1.2rem;
  }
}
@media screen and (max-width: 480px) {
  .header__img {
    height:35px;
  }
  .header__links a{
    margin-right:1rem;
  }
    .header__links a{
    font-size:1.1rem;
  }
}
@media screen and (max-width: 416spx) {
   .header__img {
    height:25px;
    margin:0;
  }
  .perfil__user--info h3, .perfil__user--info button{

    font-size:.7rem;
  }
  .perfil__img img{
    height:30px;
    width:30px;
  }
  .header__links a{
    font-size:.7rem;
  }
}
`;
