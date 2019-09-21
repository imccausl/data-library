import React from 'react'
import { Card, Label } from 'semantic-ui-react';

export default props => {
    const { name, cost, description, active, callback} = props
    return (
        <Card onClick={callback} style={{margin:'1em', backgroundColor: active ? 'rgb(49,117,190)' : ''}}>

    <Card.Content>
      <Card.Header style={{color: active ? 'white' : ''}}>{name}</Card.Header>
      <Card.Meta style={{color: active ? 'white' : ''}}>
        {cost}
      </Card.Meta>
      <Card.Description style={{color: active ? 'white' : ''}}>
       {description}
      </Card.Description>
    </Card.Content>
  </Card>
    )
}
