import React from 'react';
import Navbar from './components/navbar/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home.js';
import Report from './components/report/index.js';
import Cards from './components/body/index.js';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/report' component={Report} />
          <Route path='/home' component={Cards} /> 
          <Route path='/MelbDatathon-2020' exact component={Home}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
