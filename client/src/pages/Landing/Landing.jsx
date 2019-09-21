import React from 'react'
import { Container, Button, Grid, Icon, Segment, Divider, Header, Image } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const Landing =  props => {
  const { history } = props;

    return (
     
      <Segment placeholder>
      
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column textAlign="center">
            <Header as='h2' icon>
            <Icon name='wifi' />
              Have a Hotspot?
            </Header>
            <Button content='Login with TPL' primary size="large" onClick={
            () => history.push('/link')
          }/>
        </Grid.Column>
  
        <Grid.Column textAlign='center'>
          <Header as='h2' icon>
          <Icon name='search' />
              Looking for a Hotspot?
            </Header>
          <Button content='Reserve Now' icon='signup' size='big' onClick={
            () => history.push('/')
          }/>
        </Grid.Column>
      </Grid>
  
      <Divider vertical>Or</Divider>
    </Segment>
   
    )
}

export default withRouter(Landing)