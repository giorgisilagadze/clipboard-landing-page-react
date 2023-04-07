import styled from "styled-components";

export const StyledContainer = styled.div`
    padding: 160px 32px 0px;
`
export const Comp = styled.img`
    display: block;
    margin: auto;
    margin-top: 65px;
    width: 312px;
    height: 238px;

    @media(min-width: 1440px) {
        width: 752px;
        height: 572px;
        margin: 0px 0px 0px -62px;
    }

`
export const Tablet = styled(Comp)`
    width: 310px;
    height: 180px;

    @media(min-width: 1440px) {
        width: 810px;
        height: 471px;
        margin: 112px auto -0px;
    }
`

export const Images = styled(Comp)`
    width: 43px;
    height: 35px;

    @media(min-width: 1440px) {

        margin: auto ;
    }
`

export const Icons = styled.img`
    display: block;
    margin: 57px auto 0px;

    @media(min-width: 1440px) {
        margin: 0;
    }
`

export const CompDiv = styled.div`
    padding-top: 75px;

    @media(min-width: 1440px) {
        padding-top: 162px;
        display: flex;
        gap: 90px;
    }
`

export const QuickDiv = styled.div`
    @media(min-width: 1440px) {
        display: flex;
        gap: 15%;
        max-width: 1500px;
        margin: 80px auto 0px;
    }

`

export const QuickDivChild = styled.div`
    @media(min-width: 1440px) {
        width: 350px;
    }
`

export const SuperDiv = styled.div`
    @media(min-width: 1440px) {
        margin: 72px auto 0px;
        display: flex;
        width: 1110px;
    }
`
