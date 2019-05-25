import React from 'react';

// Components
import Header from './Header'
import WeatherContainer from './Weather/WeatherContainer'
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <WeatherContainer />
      <Footer />
    </React.Fragment>
  )
}

export default App;
