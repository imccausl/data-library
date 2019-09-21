import React from 'react'
import { Header, Segment, Input, Icon, Button } from 'semantic-ui-react'

export default function LinkDevice() {
    return (
      <Segment placeholder>
      <Header as="h2" textAlign="center">
        Link your Hotspot
      </Header>
      <Segment.Inline>
      <Input
    action={
      <Button primary content="Search" size="large" />
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

