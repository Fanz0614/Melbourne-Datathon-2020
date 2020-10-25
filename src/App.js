import React from 'react';
import Navbar from './components/navbar/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home.js';
import Report from './components/report/index.js';
import Cards from './components/body/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Echarts from './components/visulization/index.js';
import Video from './components/video/index.js';
import NSWcards from './components/NSW/index.js';
import VICcards from './components/VIC/index.js';
import TAScards from './components/TAS/index.js';
import SAcards from './components/SA/index.js';
import QLDcards from './components/QLD/index.js';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/report' component={Report} />
          <Route path='/charts' component={Cards} />
          <Route path='/NSW' component={NSWcards} />
          <Route path='/VIC' component={VICcards} />
          <Route path='/TAS' component={TAScards} />
          <Route path='/SA' component={SAcards} />
          <Route path='/QLD' component={QLDcards} />
          
          <Route path='/NSW-echarts' component={Echarts} />
          
          
          <Route path='/video' exact component={Video} />
        </Switch>
      </Router>
      </Provider>   
      
    </div>
  );
}

export default App;
