import React from 'react'
import { Checkbox, Icon, Segment, Container, Header } from 'semantic-ui-react'

import styled from 'styled-components';

import Option from './Option'

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
        <Container>
         
          <Segment>
          <Header as="h2">Choose Your Plan</Header>
          <FlexRow>

          <Option name="MY3" cost="$20" description="Our Basic Plan. Enough data for doing a tiny but of stuff." active />
          <Option name="MY5" cost="$30" description="Our Basic Plan. Enough data for doing a tiny but of stuff." />
          <Option name="MY10" cost="$50" description="Our Basic Plan. Enough data for doing a tiny but of stuff." />
          </FlexRow>
          </Segment>
          <Segment vertical>
           <Checkbox toggle label="Restricted Access"/>
          </Segment>
        </Container>
      )
    }
}

