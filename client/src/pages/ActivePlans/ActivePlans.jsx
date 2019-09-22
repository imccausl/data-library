import React from 'react'
import { Button, Card, Icon, Progress, Header, Image, Message } from 'semantic-ui-react'

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
                        <div style={{textAlign : "center"}}>
                            <Image src='/img/wifi_stick.png' size="small" circular />
                        </div>
                        <br></br>
                        Data Usage
                        <Progress
                            value="4.3"
                            total="5"
                            progress="percent"
                            label="4.3 GB / 5 GB"
                            color="red"
                        />
                        <div style={{ textAlign: "center" }}>
                            <Button>Renew Now?</Button>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="clock" />
                        Expires: 10/20/2019
                    </Card.Content>
                </Card>
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
                        <div style={{textAlign : "center"}}>
                            <Image src='/img/wifi_stick.png' size="small" circular />
                        </div>
                        <div style={{textAlign : "center"}}>
                            <Message icon negative>
                                <i aria-hidden="true" class="tachometer alternate small icon" style={{padding : "1px"}}></i>
                                <Message.Header>You have hit your data limit!</Message.Header>
                            </Message>
                        </div>
                        <br></br>
                        Data Usage
                        <Progress
                            value="5"
                            total="5"
                            progress="percent"
                            label="5 GB / 5 GB"
                            color="red"
                        />
                        <div style={{ textAlign: "center" }}>
                            <Button>Renew Now?</Button>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="clock" />
                        Expires: 10/20/2019
                    </Card.Content>
                </Card>
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
                        <div style={{textAlign : "center"}}>
                            <Image src='/img/wifi_stick.png' size="small" circular />
                        </div>
                        <div style={{textAlign : "center"}}>
                            <Message icon negative>
                                <i aria-hidden="true" class="warning sign small icon" style={{padding : "1px"}}></i>
                                <Message.Header>Your rental has expired!</Message.Header>
                            </Message>
                        </div>
                        <br></br>
                        <div style={{textAlign : "center"}}>
                            Please return your device to: 
                            <br></br>
                            
                            <a href="https://goo.gl/maps/n6Apjby6uCncSFZm7">The CN Tower</a>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="clock" />
                        Expired: 09/10/2019
                    </Card.Content>
                </Card>
            </div>
        </div>
      )
    }
}

