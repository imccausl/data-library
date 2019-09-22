import React from 'react'
import { Button, Card, Icon, Progress, Header, Image, Message } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const PlanStatus = props => {
    const {deviceName, usage, maxUsage, expired, expireDate, deviceId, imageUrl, history} = props;

    return (
        <div style={{margin : "20px", float : "left"}}>
            <Card>
                <Card.Content>
                    <span style={{ float: "left" }}>
                        <Header as="h3">{deviceName}</Header>
                    </span>
                    <span style={{ float: "right" }}>
                        <Icon name="wifi" size="large" />
                    </span>
                </Card.Content>
                <Card.Content>
                    <div style={{textAlign : "center"}}>
                        <Image src={imageUrl} size="medium" circular />
                        <br /><br />
                        <p style={{color: 'lightgrey'}}>{deviceId}</p>
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
                   

                    { expired ? (
                         <div style={{textAlign : "center"}}>
                         Please return your device to: 
                         <br></br>
                         
                         <a href="https://goo.gl/maps/Gnb6bHhfz2NYMztN8">Toronto Public Library</a>
                     </div>
                     ) : ( <div>
                          Data Usage
                    <Progress
                        value={usage}
                        total={maxUsage}
                        progress="percent"
                        label={`${usage} GB / ${maxUsage} GB`}
                        color="red"
                    />
                         <div style={{ textAlign: "center" }}>
                     <Button onClick={ () => history.push(`/buy/${deviceId}`)}>Renew Now?</Button>
                 </div></div>)}
                </Card.Content>
               
                <Card.Content extra>
                    
                    <Icon name="clock" />
                    Expires: {expireDate}
                </Card.Content>
            </Card>
        </div>
    )
}

export default withRouter(PlanStatus)
