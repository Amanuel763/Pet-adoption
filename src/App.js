import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import Homepage from './Page/Homepage/Homepage';
import Footer from './Components/Footer';
import Catpage from './Page/Catpage/Catpage';
import Dogpage from './Page/Dogpage/Dogpage';



function App() {


  return (
    <Router>

      <Header />
      <Container>
        <ScrollToTop />
        <Route path='/' component={Homepage} exact  />
        <Route path='/cats' component={Catpage}   />
        <Route path='/dogs' component={Dogpage}   />

      </Container>  
      <Footer />    
    </Router>
  );
}

export default App;
