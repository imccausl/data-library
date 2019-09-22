import React from 'react'
import { Button, Checkbox, Message, Popup, Icon, Grid, Segment, Container, Header } from 'semantic-ui-react'
import Fetch from 'react-fetch-component'

import apiRequest from '../../util/apiRequest';
import API from '../../util/api';
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
    toggleActive: false,
    deviceId: ''
  }

  componentWillMount() {
    const { match: { params }} = this.props;

    this.setState({
      deviceId: params.deviceId
    })
  }

  handlePlanClicked = (selectedPlan) => {
    this.setState({plan: selectedPlan})
  }

  handleToggle = () => {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

    render() {
      const { plan, deviceId } = this.state;
      const { history } = this.props

      return (
        <div style={{margin : "20px"}}>
          <Header as='h2'>
            Choose Your Plan
          </Header>
          <Segment>
            <Grid centered divided columns={3}>
              <Fetch url={`${API.root}${API.endpoint.plans}`}>
                {({loading, error, data}) => {
                  if (!loading && data) {
                    return data.map(plan => <Option key={`plan-options-${plan.id}`} name={plan.name} cost={`$${plan.cost}`} description={plan.restrictions} active={plan === 1 ? 'true' : 'false'} callback={() => this.handlePlanClicked(1)}/>
                    )
                  }
                 }}
              </Fetch>
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
            <Button primary disabled={plan===0} onClick={() => {history.push(`/myplan/${deviceId}/${plan}/0/ok`)}}>Continue to Checkout</Button>
          </Segment>
        </div>
      )
    }
}
