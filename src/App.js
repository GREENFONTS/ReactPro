import React from 'react';
import Nav from './component/Nav.js';
import Home from './component/Home.js'
import Resume from './component/Resume.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (

    <Router>

      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>








  )

}
export default App;