import React from 'react'
import {Header} from 'semantic-ui-react'

import PlanStatus from './PlanStatus';

export default class ActivePlans extends React.Component {  
    state = {
        userName: 'Will',
        expired: false,
        expireDate: '10/20/2019',
        deviceId: ''
    }

    componentDidMount() {
      const { match: { params }} = this.props;
      let maxUsage = '3'

      if (params.plan === '2') {
        maxUsage = '5'
      }

      if (params.plan === '3') {
        maxUsage = '10'
      }

      this.setState({
        usage: params.usage,
        maxUsage,
        deviceId: params.deviceId
      })

      if(params.devState === 'expired') {
        this.setState({
          expired: true
        })
      }
      
      console.log(params)

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

