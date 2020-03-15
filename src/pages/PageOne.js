import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <Container>
      <h1>GoSolo Land</h1>
      <p>
        This application is an industrial land database. The scope is
        the greater Edmonton metropolitan area. There's an internal application
        used to manage all the data, and an external application for clients to
        use. I worked on the latter, and my contributions to the project are depicted below. The
        application is built with React and Google FireBase. I did most of the
        design work, using Adobe XD to prototype, and part of the front-end development.
      </p>
      <h3>Search Modal</h3>
      <p>Modal window to search for properties. </p>
      <img src="/images/search.gif" />
      <h3>Search Results</h3>
      <p>Search results dispalyed in a list and on a map.</p>
      <img src="/images/searchresults.gif"/>
      <a href="https://kristi-kitz.firebaseapp.com/">
        https://kristi-kitz.firebaseapp.com
      </a>
    </Container>
  )
}

const Container = styled.div`
  width: 1000px;
  margin: auto;
`
