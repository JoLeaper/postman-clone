import React, { Component } from 'react';
import { LinkBar } from '../components/LinkBar/LinkBar';
import { RequestContent } from '../components/RequestContent/RequestContent';
import { ResponseWindow } from '../components/ResponseWindow/ResponseWindow';
import { fetchApi } from '../services/fetchApi';

export default class MainContainer extends Component {
  state = {
    apiLink: '',
    requestMethod: 'GET',
    requestBody: '',
    response: null
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { apiLink, requestMethod, requestBody } = this.state;
    fetchApi(apiLink, requestMethod, requestBody)
      .then(res => { 
        this.setState({ response: res });
      });
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
          handleSubmit={this.handleSubmit} 
          requestBody={requestBody} 
          requestMethod={requestMethod}
        />
        <ResponseWindow 
          response={response} 
        />
      </div>
    );
  }
}
