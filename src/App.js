import React from 'react';
import styled from 'styled-components'

// Components
import Header from './Header'
import WeatherContainer from './Weather/WeatherContainer'
import Footer from './Footer'

const AppWrapper = styled.div`
    background-color: white;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <WeatherContainer />
      <Footer />
    </AppWrapper>
  )
}

export default App;
