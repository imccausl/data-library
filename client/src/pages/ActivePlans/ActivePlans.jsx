import React from 'react'

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
        <PlanStatus {...state} />
      )
    }
}

