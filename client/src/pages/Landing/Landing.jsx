import React from 'react'
import { Container, Button, Grid, Icon, Segment, Divider, Header, Image } from 'semantic-ui-react'


export default function Landing() {
    return (
     
      <Segment placeholder>
      
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column textAlign="center">
            <Header as='h2' icon>
            <Icon name='wifi' />
              Have a Hotspot?
            </Header>
            <Button content='Login with TPL' primary size="large" />
        </Grid.Column>
  
        <Grid.Column textAlign='center'>
          <Header as='h2' icon>
          <Icon name='search' />
              Looking for a Hotspot?
            </Header>
          <Button content='Reserve Now' icon='signup' size='big' />
        </Grid.Column>
      </Grid>
  
      <Divider vertical>Or</Divider>
    </Segment>
   
    )
}