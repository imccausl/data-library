import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function Landing() {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="https://www.underconsideration.com/brandnew/archives/rogers_2015_logo.png" alt="Hello from Rogers" />
        <CardBody>
          <CardTitle>Do you have a device?</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Register your device to borrow data, or find your device or whatever</CardText>
          <div style={{margin: '10px 0'}}>
            <Button color="primary">Login with TPL</Button>
          </div>
          <div style={{margin: '10px 0'}}>
            <Button color="info">Find a Device</Button>
          </div>
        </CardBody>
      </Card>
    </div>
    )
}
