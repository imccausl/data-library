import React from 'react'
import { Grid, Header, Button } from 'semantic-ui-react';

export default props => {
    const { name, cost, description,  active, callback} = props
    return (
      
      <Grid.Column textAlign='center' className={active == 'true' ? 'Plan-Selected' : ''}>
        <h2>{name}</h2>

        <div>
          <h3>{cost}</h3>
        </div>

        <p>
          {description}
        </p>
        <Button onClick={callback}>Select</Button>
        
      </Grid.Column>
   
    )
}
