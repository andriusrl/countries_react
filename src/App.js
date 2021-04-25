import { useEffect, useState } from "react";
import { client } from "./config/client-graphql";
import { gql } from '@apollo/client';
import Styled from 'styled-components';
import Countrie from './components/Countrie';

const Main = Styled.div`
  text-align: center;
  font-size: 42px;
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

  function showCountries () {
    return (
      <div>
        {
          countries.map(countrie=>{
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

  function order(){
    let copy = [...countries]
     copy = copy.sort((countrie1, countrie2) => {
        if (countrie1.name[0] > countrie2.name[0]) {
          return 1;
        }
        else if (countrie1.name[0] < countrie2.name[0]) {
          return -1;
        }
        return 0;
      })
      setCountries(copy)
  }

  return (
    <Main>
      <div>
        Ordenar
        <button onClick={order}>Nome</button>
        <button>Capital</button>
        <button>Bandeira</button>
        <button>moeda</button>
      </div>
      {countries ? showCountries() : <div>CARREGANDO!</div>}
    </Main>
  );
}

export default App;