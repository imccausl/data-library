import React from 'react'
import {Header} from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import PlanStatus from './PlanStatus';
import API from '../../util/api';

export default class ActivePlans extends React.Component {  
    state = {
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
        const {usage, maxUsage, expired, expireDate, deviceId} = this.state;

      return (
        <div>
            <Header as='h2'>
                My Plans
            </Header>
            <div style={{margin : "20px"}}>

        <Fetch url={`${API.root}${API.endpoint.devices}/${deviceId}`}>
          {({error, loading, data}) => {
            
              if (!loading && data) {
                const {id, name,location, url} = data
                return (
                  <PlanStatus deviceName={name} usage={usage} maxUsage={maxUsage} expired={expired} expireDate={expireDate} deviceId={id} imageUrl={url} />
                )
              }
          }}
        </Fetch>
            </div>
        
        </div>
      )
    }
}

