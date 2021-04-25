import { useEffect, useState } from "react";
import { client } from "./config/client-graphql";
import { gql } from '@apollo/client';
import Styled from 'styled-components';
import Countrie from './components/Countrie';

const Main = Styled.div`
  text-align: center;
  /* font-size: 42px; */

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
    console.log(countries)
    return (
      <div>
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
      </div>
    )
  }

  function order(order) {
    console.log("Testando order")
    console.log(order)
    let copyCountries = [...countries]
    copyCountries = copyCountries.sort((countrie1, countrie2) => {
      // console.log(countrie1?.[order][0])
      
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
        <button onClick={() => { order("name") }}> Nome do pais </button>
        <button onClick={() => { order("capital") }}> Capital </button>
      </div>
      {countries ? showCountries() : <div>CARREGANDO!</div>}
    </Main>
  );
}

export default App;
