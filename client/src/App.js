import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Container, Segment, Image, Menu, Icon } from 'semantic-ui-react'
import Landing from "./pages/Landing" 
import LinkDevice from './pages/LinkDevice'
import NewPlan from './pages/NewPlan'
import ActivePlans from './pages/ActivePlans'

import logo from './logo.svg';
import './App.css';

function App() {
  function handleItemClick(){
    console.log('Click');
  }

  return (
    <Router>
       <Container>
        <Segment vertical>
          <div style={{height : "70px"}}>
            <div style={{float : "left"}}>
              <Image src='/img/Community_Access_Logo.png' size="medium" />
            </div>
            <div style={{float : "right", marginTop : "10px"}}>
              <Menu stackable>
                <Menu.Menu position='right'>
                  <Menu.Item
                    name='sign-in'
                    onClick={handleItemClick}
                  >
                    My Plans
                  </Menu.Item>
                  <Menu.Item>
                    <Icon name="user circle" size="large" />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </div>
          </div>
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
