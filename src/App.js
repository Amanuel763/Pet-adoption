import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import Homepage from './Page/Homepage/Homepage';


function App() {
  return (
    <Router>
      <Header />
      <Container>
        <ScrollToTop />
        <Route path='/' component={Homepage} exact  />

      </Container>      
    </Router>
  );
}

export default App;
