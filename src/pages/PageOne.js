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
        application is built with React and Google Firebase. I did most of the
        design work, using Adobe XD to prototype, and part of the front-end development.
      </p>
      <h3>Search Modal</h3>
      <p>Modal window to search for properties based on size and location. </p>
      <img src="/images/search.gif" />
      <h3>Saved Searches</h3>
      <p>Clients can save and share custom searches.</p>
      <img src="images/savedsearch.png"/>
      <h3>Search Results</h3>
      <p>Search results displayed in list form and on an interactive map.</p>
      <img src="/images/searchresults.gif"/>
      <h3>Listing Page</h3>
      <p>Listing page for the parcel of land.</p>
      <img src="/images/listingpage.png" style={{border: "1px solid #ddd"}}/>
      <h3>404 Page</h3>
      <p>Custom 404 page - I designed the graphic!</p>
      <img src="/images/404.png" style={{border: "1px solid #ddd"}}/>
    </Container>
  )
}

const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 60px;
  & > h1, h3 {
    font-weight: 400;
  }
  & > h3 {
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
  }
`


