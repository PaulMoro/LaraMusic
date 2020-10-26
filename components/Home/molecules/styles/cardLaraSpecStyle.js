import css from "styled-jsx/css";

export default css.cardLaraSpecStyle`
    .card {
    display: inherit;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    }

    .card p {
    color: #585858;
    font-weight: 600;
    }
`;
