import React, { Component } from 'react';
import { observer, inject, propTypes } from 'mobx-react';

@inject('appState') @observer
export default class TopicList extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.props.appState.add();
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

TopicList.propTypes = {
  appState: propTypes.observableObject,
};
