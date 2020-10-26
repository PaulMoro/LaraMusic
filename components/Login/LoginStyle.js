import css from "styled-jsx/css";

export default css.LoginStyle`
    .login {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 70vh;
    }

    .login__tabs-link button {
    color: #989898;
    text-decoration: none;
    padding: 10px;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    }

    .login__tabs-link button:hover, .login__tabs-link button:active, .login__tabs-link button:focus {
    text-decoration: underline;
    color: #9E4F9E;
    outline: none;
    }

    .login__container-image {
    -ms-flex-negative: 1;
        flex-shrink: 1;
    }

    .login__container-image img {
    width: 100%;
    height: 100%;
    }

    .tabcontent {
    background-color: #f1e2f1;
    width: 45vw;
    height: 60vh;
    }

    .tabcontent__form {
    -ms-flex-negative: 1;
        flex-shrink: 1;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
    padding: 0 20px;
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }

    .tabcontent__form h1 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    letter-spacing: -1px;
    font-weight: 400;
    max-width: 80%;
    color: #656565;
    margin: 10px 0;
    }

    .tabcontent__form p {
    font-size: 0.75rem;
    }

    .tabcontent__form .buttons {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
    margin: 20px;
    }

    .tabcontent .form-group {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
    }

    .tabcontent .form-item {
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    width: 90%;
    margin: 10px 20px;
    }

    .tabcontent label {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 0.75rem;
    }

    .tabcontent input {
    background-color: transparent;
    border: none;
    border-bottom: solid 1px #1D293F;
    width: 100%;
    text-align: left;
    }

    .tabcontent button {
    padding: 10px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    }

    .tabcontent small {
    font-size: 0.75rem;
    font-weight: 200;
    width: 100%;
    text-align: center;
    }

    .tabcontent .send {
    background-color: #6b366b;
    color: #FFC24B;
    border-radius: 28px;
    padding: 10px 20px;
    border: none;
    text-decoration: none;
    }

    .footer__nav {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    background-color: rgba(152, 152, 152, 0.2);
    padding: 20px;
    height: 10vh;
    }

    .footer__nav a {
    padding: 0 30px;
    color: #656565;
    text-decoration: none;
}
`;
