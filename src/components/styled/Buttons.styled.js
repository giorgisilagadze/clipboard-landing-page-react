import styled from "styled-components"

export const Button = styled.button`
    width: 311px;
    height: 56px;
    border-radius: 28px;
    border: none;
    background-color: ${({bg}) => bg};
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.5px;
    margin-top: ${({mTop}) => mTop};
`