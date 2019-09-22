import React from 'react'
import {Header} from 'semantic-ui-react'

import PlanStatus from './PlanStatus';

export default class ActivePlans extends React.Component {  
    state = {
        userName: 'Will',
        usage: '3',
        maxUsage: '5',
        expired: true,
        expireDate: '10/20/2019'
    }
    render() {
        const {state} = this;

      return (
        <div style={{margin : "20px"}}>
        <div>
            <Header as='h2'>
                My Plans
            </Header>
        </div>
        <PlanStatus {...state} />
        </div>
      )
    }
}

