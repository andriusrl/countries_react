import { Fragment, useEffect, useState } from "react";
import { client } from "./config/client-graphql";
import { gql } from '@apollo/client';
import styled from 'styled-components';
import Countrie from './components/Countrie';

const Main = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 900;
  background-color: #C4CBF2;
`
const Button = styled.button`
  height: 39px;
  margin: 0 3px 0 3px;
  font-size: 14px;
  font-weight: 600;
  background-color: #0E6BBD;
  border-radius: 10px;
`
const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1% 3% 0 1%;
  p {
    border: 1px solid black;
    padding: 8px;
    margin: 0;
  }
  p:nth-of-type(1){
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }
  p:nth-of-type(2){
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
  }
`
const NumPages = styled.div`
  display: flex;
  align-items: center;
`

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
    console.log(countries)
    console.log("min:" + min)
    console.log("max:" + max)
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
                  currency={countrie.currency}
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

  function showNumPages() {
    return(
      <NumPages>
          {pageMin + 2}
          {" "}
          ~
          {" "}
          {pageMax < countries?.length ? pageMax : countries?.length}
        </NumPages>
  )
}

  return (
    <Main>
      <div>
        Ordenar por
        <Button onClick={() => { order("name") }}> Nome do pais </Button>
        ou
        <Button onClick={() => { order("capital") }}> Capital </Button>
      </div>
      <Pages>
        <p onClick={previusPage}>Página anterior</p>
        {showNumPages()}
        <p onClick={nextPage}>Próxima página</p>
      </Pages>
      {countries ? showCountries(pageMin, pageMax) : <div>CARREGANDO!</div>}
      <Pages>
        <p onClick={previusPage}>Página anterior</p>
        {showNumPages()}
        <p onClick={nextPage}>Próxima página</p>
      </Pages>
    </Main>
  );
}

export default App;