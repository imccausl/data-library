import React from 'react'
import {Header} from 'semantic-ui-react'
import Fetch from 'react-fetch-component'
import PlanStatus from './PlanStatus';
import API from '../../util/api';
import apiRequest from '../../util/apiRequest'

export default class ActivePlans extends React.Component {  
    state = {
        expired: false,
        expireDate: '10/20/2019',
        deviceId: '',
        selectedPlan: '',
        maxUsage: '10'
    }

    componentWillMount() {
      const { match: { params } } = this.props;

      apiRequest.getPlan(params.plan).then(data => {
        this.setState({maxUsage: data.gigabytes})})

      this.setState({
        usage: params.usage,
        selectedPlan: params.plan,
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
        const {usage, maxUsage, expired, expireDate, deviceId, selectedPlan} = this.state;

      return (
        <div>
            <Header as='h2'>
                My Plans
            </Header>
            <div style={{margin : "20px"}}>

        <Fetch url={`${API.root}${API.endpoint.devices}/${deviceId}`}>
          {({error, loading, data}) => {

            

                const id = data ? data.id : null;
                const name = data ? data.name : null
                const url = data ? data.url : null
              

                return (
                  <PlanStatus loading={loading} deviceName={name} usage={usage} maxUsage={maxUsage} expired={expired} expireDate={expireDate} deviceId={id} imageUrl={url} />
                )
              
          }}
        </Fetch>
            </div>
        
        </div>
      )
    }
}

