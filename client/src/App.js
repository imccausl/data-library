import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from "./pages/Landing" 
// import LinkDevice from './pages/LinkDevice'
// import NewPlan from './pages/NewPlan'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      {/* <Route path="/link" component={LinkDevice} />
      <Route path="/plan" component={NewPlan} /> */}
    </Router>
  );
}

export default App;
