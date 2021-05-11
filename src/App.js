
import './App.css';
import React, { useState } from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Explore from './Explore';
import Product from './Product';
import Home from './Home';





const App = () => {
  const [link, setLinkText] = useState(null);

    return (
      <Router>
        <div>
          <Header  setText={(text) => setLinkText(text)} />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/Product" component={Product} />
        <Switch>
        <Route path="/product/:id" component={Product} />
        </Switch>
        
      
      </Router>

    );
  }





export default App;
