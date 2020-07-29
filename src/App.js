import React from 'react';
import styled from 'styled-components'

// Components
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const AppWrapper = styled.div`
    // background-color: white;
    // width: 100%;
    // padding: 0;
    // margin: 0;
    height: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      {/* <Header /> */}
      <Content />
      {/* <Footer /> */}
    </AppWrapper>
  )
}

export default App;
