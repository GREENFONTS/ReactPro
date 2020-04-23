import React from 'react';
import Nav from './component/Nav.js';
import Home from './component/Home.js';
import Resume from './component/Resume.js';
import Services from './component/Services.js';
import Blog from './component/Blog.js';
import Contact from './component/Contact.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <Router>
      
      <div>
        
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>








  )

}
export default App;