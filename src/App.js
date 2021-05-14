import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Next from './components/Next'
import Handle from './components/Handle'

function App(){
  return(
    <Router>
      <Nav/>
<Route path="/" exact>
  <Home/>
  </Route>
  <Route path="/next">
  <Next/>
  </Route>
  <Route path="/handle">
  <Handle/>
  </Route>
    </Router>
  )
}
export default App;
