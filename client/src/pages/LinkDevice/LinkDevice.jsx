import React from 'react'
import {withRouter} from 'react-router-dom'
import { Header, Segment, Input, Icon, Button } from 'semantic-ui-react'

class LinkDevice extends React.Component {
  state = {deviceId: ''}
  handleInput = event => {
    const {name, value} = event.target;

    this.setState({[name]: value})
    console.log(name, value)
  }

  render() {
    const { deviceId } = this.state
    const { history } =this.props;

    return (
      <Segment placeholder>
      <Header as="h2" textAlign="center">
        Link your Hotspot
      </Header>
      <Segment.Inline>
      <Input
      name="deviceId"
      value={deviceId}
      onChange={this.handleInput}
    action={
      <Button primary content="Search" size="large" onClick={()=>{history.push(`/buy/${deviceId}`)}} />
    }
    icon='linkify'
    iconPosition='left'
    placeholder='Search...'
    size="large"
  />
      </Segment.Inline>
    </Segment>
    )
  }
}

export default withRouter(LinkDevice)

