import React, { Component } from 'react'
import { LinkBar } from '../components/LinkBar/LinkBar'
import { RequestContent } from '../components/RequestContent/RequestContent'
import { ResponseWindow } from '../components/ResponseWindow/ResponseWindow'

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <LinkBar />
        <RequestContent />
        <ResponseWindow />
      </div>
    )
  }
}
