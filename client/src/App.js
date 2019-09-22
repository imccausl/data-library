import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Segment, Image } from 'semantic-ui-react'
import Landing from "./pages/Landing" 
import LinkDevice from './pages/LinkDevice'
import NewPlan from './pages/NewPlan'
import ActivePlans from './pages/ActivePlans'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
       <Container>
        <Segment vertical>
          <Image src='/img/Community_Access_Logo.png' size="medium" />
        </Segment>
   

      <Route path="/" exact component={Landing} />
      <Route path="/link" component={LinkDevice} />
      <Route path="/plan" component={NewPlan} />
      <Route path="/activeplans" component={ActivePlans} />
      </Container>
    </Router>

  );
}

export default App;
