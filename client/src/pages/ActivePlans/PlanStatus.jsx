import React from 'react'
import { Button, Card, Icon, Progress, Header, Image, Message } from 'semantic-ui-react'

export default props => {
    const {userName, usage, maxUsage, expired, expireDate} = props;

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
                        <Header as="h3">{userName}'s Stick</Header>
                    </span>
                    <span style={{ float: "right" }}>
                        <Icon name="wifi" size="large" />
                    </span>
                </Card.Content>
                <Card.Content>
                    <div style={{textAlign : "center"}}>
                        <Image src='/img/wifi_stick.png' size="small" circular />
                    </div>
                    { expired && (
                  
                  <div style={{textAlign : "center"}}>
                      <Message icon negative>
                          <i aria-hidden="true" class="warning sign small icon" style={{padding : "1px"}}></i>
                          <Message.Header>Your rental has expired!</Message.Header>
                      </Message>
                  </div>
              
              )}

              { !expired && (parseFloat(usage) >= parseFloat(maxUsage)) && (
                 
                  <div style={{textAlign : "center"}}>
                      <Message icon negative>
                          <i aria-hidden="true" class="tachometer alternate small icon" style={{padding : "1px"}}></i>
                          <Message.Header>You have hit your data limit!</Message.Header>
                      </Message>
                  </div>
                 
              )}
                    <br></br>
                    Data Usage
                    <Progress
                        value={usage}
                        total="5"
                        progress="percent"
                        label={`${usage} GB / ${maxUsage} GB`}
                        color="red"
                    />

                    { expired ? (
                         <div style={{textAlign : "center"}}>
                         Please return your device to: 
                         <br></br>
                         
                         <a href="https://goo.gl/maps/n6Apjby6uCncSFZm7">The CN Tower</a>
                     </div>
                     ) : ( <div style={{ textAlign: "center" }}>
                     <Button>Renew Now?</Button>
                 </div>)}
                </Card.Content>
               
                <Card.Content extra>
                    
                    <Icon name="clock" />
                    Expires: {expireDate}
                </Card.Content>
            </Card>
        </div>
    </div>
    )
}
