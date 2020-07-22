import React, { Component } from 'react'
import { LinkBar } from '../components/LinkBar/LinkBar'
import { RequestContent } from '../components/RequestContent/RequestContent'
import { ResponseWindow } from '../components/ResponseWindow/ResponseWindow'

export default class MainContainer extends Component {
  state = {
    apiLink: '',
    requestMethod: 'GET',
    requestBody: '',
    response: ''
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    const { apiLink, requestMethod, requestBody, response } = this.state;
    return (
      <div>
        <LinkBar 
        handleChange={this.handleChange} 
        apiLink={apiLink}
        />
        <RequestContent 
        handleChange={this.handleChange} 
        requestBody={requestBody} 
        requestMethod={requestMethod}
        />
        <ResponseWindow 
        response={response} 
        />
      </div>
    )
  }
}
