import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';

export default function Landing() {
    return (
        <div>
      <Card>
        <CardBody>
          <CardTitle>Link Your Device</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <Form>
              <FormGroup>
                    <Label for="deviceId">Device ID</Label>
                    <Input type="deviceId" name="deviceId" id="deviceId" placeholder="Enter your Device Id" />
              </FormGroup>

              <div style={{margin: '10px 0'}}>
            <Button color="success">Link</Button>
          </div>
          </Form>
          
        </CardBody>
      </Card>
    </div>
    )
}

