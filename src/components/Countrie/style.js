import styled from "styled-components";

export const CountrieWrapper = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    margin: 3%;
    display: flex;
    background-color: #ABB6ED;
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
    width: 30%;

    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
    }
    p:nth-of-type(2){
        padding: 0;
        margin:0;
        font-size: 12px;
    }
`
export const CurrencyWrapper = styled.div`
    border-right: 1px solid grey;
    width: 28%;
    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
    }
    p:nth-of-type(2){
        padding: 0;
        margin: 0;
        font-size: 12px;
    }
`
export const LanguageWrapper = styled.div`
    width: 60%;
    p:nth-of-type(1){
        padding: 0;
        font-size: 16px;
        font-weight: 600;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 12px;
    }
`