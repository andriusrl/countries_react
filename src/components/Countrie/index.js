import styled from "styled-components"

const CountrieWrapper = styled.div`
    border: 1px solid black;
`

export default function Countrie(props) {
    // console.log(props.languages)
    return (
        <CountrieWrapper>
            <div>
                nome: {props.name}
            </div>
            <div>
                capital: {props.capital}
            </div>
            <div>
                bandeira: {props.emoji}
            </div>
            <div>
                {
                    props.languages.map(language=>{
                        return(
                            <div key={language.name}>
                                nome da lingua:
                                {language.name}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                moeda: {props.currency}
            </div>
        </CountrieWrapper>
    );
}