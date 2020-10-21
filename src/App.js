import React from 'react';
import Navbar from './components/navbar/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home.js';
import Report from './components/report/index.js';
import Cards from './components/body/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Echarts from './components/visulization/index.js'
function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/report' component={Report} />
          <Route path='/home' component={Cards} />
          <Route path='/echarts' component={Echarts} />
        </Switch>
      </Router>
      </Provider>   
      
    </div>
  );
}

export default App;
