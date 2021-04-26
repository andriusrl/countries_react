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

function App() {
  const [countries, setCountries] = useState(undefined)

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

  function showCountries() {
    return (
      <Fragment>
        {
          countries.map(countrie => {
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

  return (
    <Main>
      <div>
        Ordenar por
        <Button onClick={() => { order("name") }}> Nome do pais </Button>
        ou
        <Button onClick={() => { order("capital") }}> Capital </Button>
      </div>
      {countries ? showCountries() : <div>CARREGANDO!</div>}
      
    </Main>
  );
}

export default App;