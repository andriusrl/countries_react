import styled from "styled-components"

const CountrieWrapper = styled.div`
    border: 1px solid black;
    margin: 3%;
    display: flex;
`
const EmojiWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
    width: 18%;
    p {
        margin: 0;
        padding: 0;
        font-size: 39px;
        transform: translateY(-7px)
    }
`
const ItemWrapper = styled.div`
    width: 100%;
`
const NameWrapper = styled.div`
    border-bottom: 1px solid black;
     p {
        margin: 0;
        padding: 0;
        font-size: 19px;
        font-weight: 600;
    }
`
const SubItemWrapper = styled.div`
    display: flex;
`
const CapitalWrapper = styled.div`
    border-right: 1px solid black;
    width: 30%;

    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
        font-weight: 600;
    }
    p:nth-of-type(2){
        padding: 0;
        margin:0;
        font-size: 12px;
    }
`
const CurrencyWrapper = styled.div`
    border-right: 1px solid black;
    width: 28%;
    p:nth-of-type(1){
        padding: 0;
        margin: 0 0 3% 0;
        font-size: 16px;
        font-weight: 600;
    }
    p:nth-of-type(2){
        padding: 0;
        margin: 0;
        font-size: 12px;
    }
`
const LanguageWrapper = styled.div`
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

export default function Countrie(props) {
    // console.log(props.languages)
    return (
        <CountrieWrapper>
            <EmojiWrapper>
                <p>{props.emoji}</p>
            </EmojiWrapper>
            <ItemWrapper>
                <NameWrapper>
                    <p>{props.name}</p>
                </NameWrapper>
                <SubItemWrapper>
                    <CapitalWrapper>
                        <p>capital</p>
                        <p>{props.capital}</p>
                    </CapitalWrapper>
                    <CurrencyWrapper>
                        <p>moeda</p>
                        <p>{props.currency}</p>
                    </CurrencyWrapper>
                    <LanguageWrapper>
                        <p>Idioma(s)</p>
                        {
                            props.languages.map(language => {
                                return (
                                    <div key={language.name}>
                                        {language.name}
                                    </div>
                                )
                            })
                        }
                    </LanguageWrapper>
                </SubItemWrapper>
            </ItemWrapper>
        </CountrieWrapper>
    );
}