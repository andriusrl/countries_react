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
                        <p>moeda(s)</p>
                        <p>{
                         props?.currency?.map(currency => {
                             return (
                                 <div key={currency}>
                                    {currency}
                                 </div>
                             )
                         })
                        }</p>
                    </CurrencyWrapper>
                    <LanguageWrapper>
                        <p>Idioma(s)</p>
                        {
                            props?.languages?.map(language => {
                                return (
                                    <p key={language.name}>
                                        {language.name}
                                    </p>
                                )
                            })
                        }
                    </LanguageWrapper>
                </SubItemWrapper>
            </ItemWrapper>
        </CountrieWrapper>
    );
}