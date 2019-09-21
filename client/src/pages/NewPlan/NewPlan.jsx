import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';
import styled from 'styled-components';
import Toggle from 'react-bootstrap-toggle';

const PlanBox = styled.button`
  border: 1px solid lightgrey;
  background: white;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-between;
`;

export default class NewPlan extends React.Component {  
  state = {
    plan: 1,
    toggleActive: false
  }

  handlePlanClicked = (selectedPlan) => {
    this.setState({plan: selectedPlan})
  }

  handleToggle = () => {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

    render() {
      const { plan } = this.state;

      return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>New Plan</CardTitle>
            <CardSubtitle>Choose Your Plan</CardSubtitle>
            <FlexColumn>
       

              <FlexRow>
                <PlanBox onClick={() => {
                  this.handlePlanClicked(1)
                }} style={{ background: plan === 1 ? 'lightgrey' : '' }}>
                  <FlexColumn>
                    <div>My3</div>
                    <div>$10</div>
                  </FlexColumn>
                </PlanBox>

                <PlanBox onClick={() => {
                  this.handlePlanClicked(2)
                }} style={{ background: plan === 2 ? 'lightgrey' : '' }}>
                  <FlexColumn>
                    <div>My5</div>
                    <div>$20</div>
                  </FlexColumn>
                </PlanBox>

                <PlanBox onClick={() => {
                  this.handlePlanClicked(3)
                }} style={{ background: plan === 3 ? 'lightgrey' : '' }}>
                  <FlexColumn>
                    <div>My10</div>
                    <div>$30</div>
                  </FlexColumn>
                </PlanBox>
        
            </FlexRow>

                <FlexRow>
                  <h5>Restricted Access</h5>
                  <Toggle
                    onClick={this.onToggle}
                    on={<h2>ON</h2>}
                    off={<h2>OFF</h2>}
                    size="xs"
                    offstyle="danger"
                    active={this.handleToggle}
                  />

                </FlexRow>
              <Button color="success">Activate</Button>
      </FlexColumn>
         
     
          
   
            
          </CardBody>
        </Card>
      </div>
      )
    }
}

