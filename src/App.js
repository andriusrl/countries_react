import { useEffect } from "react";
import { client } from "./config/client-graphql"
import { gql } from '@apollo/client'
import Styled from 'styled-components';

const Main = Styled.div`
  text-align: center;
  font-size: 42px;
`

function App() {

  useEffect(() => {
    initial()
  }, [])

  console.log("testando")

  function initial() {
    client.query({
      query: gql`
      query{
        countries{
          code
          name
  }
}
      `
    }).then(res => console.log(res))
  }

  return (
    <Main>
      HELLO WORLD
    </Main>
  );
}

export default App;
