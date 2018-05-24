import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appState') @observer
export default class TopicList extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        topicList
        <div>{this.props.appState.msg}</div>
      </div>
    );
  }
}
