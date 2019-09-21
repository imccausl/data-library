import React from 'react'
import { Button, Card, Icon, Progress, Header } from 'semantic-ui-react'

export default class ActivePlans extends React.Component {  
    render() {
      return (
        <div style={{margin : "20px"}}>
            <div>
                <Header as='h2'>
                    Active Plans
                </Header>
            </div>
            <div style={{margin : "20px", float : "left"}}>
                <Card>
                    <Card.Content>
                        <span style={{ float: "left" }}>
                            <Header as="h3">Will's Stick</Header>
                        </span>
                        <span style={{ float: "right" }}>
                            <Icon name="wifi" size="large" />
                        </span>
                    </Card.Content>
                    <Card.Content>
                        Data Usage
                        <Progress
                            value="4.3"
                            total="5"
                            progress="percent"
                            label="4.3 Gb / 5 Gb"
                            color="red"
                        />
                        <div style={{ textAlign: "center" }}>
                            <Button>Would you like to renew?</Button>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="clock" />
                        Expires: 10/20/2019
                    </Card.Content>
                </Card>
            </div>
        </div>
      )
    }
}

