import React from 'react'
import { Button, Checkbox, Message, Popup, Icon, Grid, Segment, Container, Header } from 'semantic-ui-react'

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
  justify-content: flex-start;
  align-items: space-between;
`;

export default class NewPlan extends React.Component {  
  state = {
    plan: 0,
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
        <div style={{margin : "20px"}}>
          <Header as='h2'>
            Choose Your Plan
          </Header>
          <Segment>
            <Grid centered divided columns={3}>
              <Option name="MY3" cost="$20" description="Our Basic Plan" active={plan === 1 ? 'true' : 'false'} callback={() => this.handlePlanClicked(1)}/>
              <Option name="MY5" cost="$30" description="Our Medium Plan" active={plan === 2 ? 'true' : 'false'} callback={() => this.handlePlanClicked(2)}/>
              <Option name="MY10" cost="$50" description="Our Best Plan" active={plan === 3 ? 'true' : 'false'} callback={() => this.handlePlanClicked(3)}/>
            </Grid>
          </Segment>
          <Segment vertical>
            <FlexRow>
              <Checkbox toggle label="Restricted Access" style={{ marginRight: '10px'}} />
              <Popup
              position="bottom center"
              trigger={<Icon circular name='question' />}
              content='Enabling this option removes access to social media and streaming sites.'
              inverted
              />
            </FlexRow>
            <Message warning>
              <p>Your plan will expire on 10/20/2019</p>
            </Message>
            <Button primary disabled={plan===0}>Continue to Checkout</Button>
          </Segment>
        </div>
      )
    }
}

