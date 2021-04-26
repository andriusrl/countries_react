import styled from "styled-components";

export const CountrieWrapper = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    margin: 3%;
    display: flex;
    background-color: #ABB6ED;
    @media (min-width: 768px) {
        margin: 1% 16% 1% 16%;
    };
    @media (min-width: 1020px) {
        margin: 1% 26% 1% 26%;
    };
    @media (min-width: 1200px) {
        margin: 1% 33% 1% 33%;
    };
`
export const EmojiWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid grey;
    width: 23%;
    p {
        margin: 0;
        padding: 0;
        font-size: 39px;
        transform: translateY(-7px)
    }
`
export const ItemWrapper = styled.div`
    width: 100%;
`
export const NameWrapper = styled.div`
    border-bottom: 1px solid grey;
     p {
        margin: 0;
        padding: 0;
        font-size: 19px;
        font-weight: 600;
    }
`
export const SubItemWrapper = styled.div`
    display: flex;
`
export const CapitalWrapper = styled.div`
    border-right: 1px solid grey;
    width: 40%;
    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
        font-weight: 900;
    }
    p:nth-of-type(2){
        padding: 0;
        margin:0;
        font-size: 12px;
        color: #333333;
    }
`
export const CurrencyWrapper = styled.div`
    border-right: 1px solid grey;
    width: 36%;
    p{
        padding: 0;
        margin: 0;
        font-size: 12px;
        color: #333333;
    }
    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
        font-weight: 900;
        color: black;
    }
`
export const LanguageWrapper = styled.div`
    width: 60%;
    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 1% 0;
        font-size: 16px;
        font-weight: 900;
        color: black;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
        color: #333333;
    }
`