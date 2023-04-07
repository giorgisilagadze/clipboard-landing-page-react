import styled from "styled-components";

export const Tittle = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.52px;
    color: #4C545C;
    text-align: center;
    margin: ${({mTop}) => mTop} auto 0px;
    max-width: 370px;

    @media(min-width: 1440px) {
        font-size: 46px;
        line-height: 57.5px;
        letter-spacing: -0.75px;
        margin: 90px auto 0px;
        max-width: 730px;
    }
`

export const Quote = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.12px;
    color: #9EABB2;
    text-align: center;
    margin: ${({mTop}) => mTop} auto 0px;
    max-width: 416px;

    @media(min-width: 1440px) {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.15px;
        max-width: 730px;
    }
`

export const LitTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.39 px;
    color: #4C545C;
    text-align: center;
    margin-top: ${({mTop}) => mTop};
`
    
