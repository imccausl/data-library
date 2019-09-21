import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from "./pages/Landing" 
import LinkDevice from './pages/LinkDevice'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/link" component={LinkDevice} />
    </Router>
  );
}

export default App;
