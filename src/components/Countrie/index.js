import { Fragment } from "react";
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
                        <p>Capital</p>
                        <p>{props.capital}</p>
                    </CapitalWrapper>
                    <CurrencyWrapper>
                        <p>Moeda(s)</p>
                        <Fragment>{
                         props?.currency?.map(currency => {
                             return (
                                 <p key={currency}>
                                    {currency}
                                 </p>
                             )
                         })
                        }</Fragment>
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