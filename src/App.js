import React from 'react';

// REACT ROUTER ELEMENTS
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// GLOBAL STYLES
import GlobalStyle from './globalStyles'

// COMPONENTS 
import { Navbar, Footer } from './components'

// PAGES
import { Home, Services, Products, SignUp } from './pages/index' 

function App() {
  return (
    <Router>
      <GlobalStyle /> 
        <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
      </Switch> 
      <Footer />
     </Router>
  );
}

export default App;
