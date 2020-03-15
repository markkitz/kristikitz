import React from "react"
import styled from "styled-components"

  export default function PageOne () {
    return (    <Container>
        Hello world!
        <div>test</div>
        <img src="/images/test.jpg" />
      </Container>)

  } 


 const Container = styled.div`
  width: 1000px;
  margin: auto;
  background-color:red;
`
