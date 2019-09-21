import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

import styled from 'styled-components';

const PlanBox = styled.button`
  border: 1px solid lightgrey;
  background: white;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-between;
`;

export default class NewPlan extends React.Component {  
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
      const { activeItem } = this.state

      return (
        <div style={{width : "100%", display: 'flex', justifyContent: 'center'}}>
        <div style={{maxWidth : "400px"}}>
          <Container textAlign='center'>
            <Menu fluid widths={3}>
              <Menu.Item
                name='buy'
                active={activeItem === 'buy'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='sell'
                active={activeItem === 'sell'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='rent'
                active={activeItem === 'rent'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Container>

        </div>
          
        </div>
      )
    }
}

