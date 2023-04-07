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
    margin: ${({mTop}) => mTop} auto 0px;
    display: block;

    @media(min-width: 1440px) {
        display: inline;
        margin: 0;
        cursor: pointer;
        
        &:hover {
            opacity: .5;
            transform: scale(0.98);
        }
    }

`

export const ButtonsDivBlock = styled.div`
    @media(min-width: 1440px) {
        margin: 48px auto 0px;
        display: block;
        width: ${({width}) => width};
    }
`

export const ButtonsDivFlex = styled.div`
    @media(min-width: 1440px) {
        display: flex;
        gap: 16px;   
    }
        
`