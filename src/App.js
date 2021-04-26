import { Fragment, useEffect, useState } from "react";
import { client } from "./config/client-graphql";
import { gql } from "@apollo/client";
import Countrie from "./components/Countrie";
import {
  Main,
  OrderWrapper,
  Button,
  Pages,
  NumPages,
  Loading
} from "./style"

function App() {
  const [countries, setCountries] = useState(undefined)
  const [pageMin, setPageMin] = useState(-1)
  const [pageMax, setPageMax] = useState(20)

  useEffect(() => {
    getCountries()
  }, [])

  function getCountries() {
    client.query({
      query: gql`
        query{
          countries{
              name
              capital
              emoji
              languages{
                name
                native
              }
              currency
            }
        }
      `
    }).then(res => {
      setCountries(res.data.countries);
    })
  }

  function showCountries(min, max) {
    return (
      <Fragment>
        {
          countries.map((countrie, index) => {
            if ((index > min) && (index < max)) {
              return (
                <Countrie
                  key={countrie.emoji}
                  name={countrie.name}
                  capital={countrie.capital}
                  emoji={countrie.emoji}
                  languages={countrie.languages}
                  currency={countrie.currency?.split(/\s*,\s*/)}
                />
              )
            }
          })
        }
      </Fragment>
    )
  }

  function order(order) {
    let copyCountries = [...countries]
    copyCountries = copyCountries.sort((countrie1, countrie2) => {
      if ((countrie1?.[order] != null) && (countrie2?.[order] != null)) {
        if (countrie1?.[order][0] > countrie2?.[order][0]) {
          return 1;
        }
        else if (countrie1?.[order][0] < countrie2?.[order][0]) {
          return -1;
        }
      }
      return 0;
    })
    setCountries(copyCountries)
  }

  function previusPage() {
    if (pageMin >= 19) {
      setPageMin(pageMin - 20)
      setPageMax(pageMax - 20)
    }
  }

  function nextPage() {
    if (pageMax < countries.length) {
      setPageMin(pageMin + 20)
      setPageMax(pageMax + 20)
    }
  }

  function showPages() {
    return (
      <Fragment>
        <button onClick={previusPage}>Página anterior</button>
        <NumPages>
          {pageMin + 2}
          {" "}
        ~
        {" "}
          {pageMax < countries?.length ? pageMax : countries?.length}
        </NumPages>
        <button onClick={nextPage}>Próxima página</button>
      </Fragment>
    )
  }

  return (
    <Main>
      <OrderWrapper>
        Ordenar por
        <Button onClick={() => { order("name") }}> Nome do pais </Button>
        ou
        <Button onClick={() => { order("capital") }}> Capital </Button>
      </OrderWrapper>
      <Pages>
        {showPages()}
      </Pages>
      {countries ? showCountries(pageMin, pageMax) : <Loading>CARREGANDO...</Loading>}
      <Pages>
        {showPages()}
      </Pages>
    </Main>
  );
}

export default App;