import {
    CountrieWrapper,
    EmojiWrapper,
    ItemWrapper,
    NameWrapper,
    SubItemWrapper,
    CapitalWrapper,
    CurrencyWrapper,
    LanguageWrapper
} from "./style"

export default function Countrie(props) {
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
                            props?.languages?.map(language => {
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