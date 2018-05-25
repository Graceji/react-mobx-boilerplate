import React, { Component } from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
// import PropTypes from 'prop-types';

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

// class TopicList extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount () {
//     this.props.appState.changeCount();
//   }

//   render () {
//     return (
//       <div>
//         topicList
//         <div>{this.props.appState.msg}</div>
//       </div>
//     );
//   }
// }

TopicList.propTypes = {
  appState: PropTypes.observableObject.isRequired,
};

// const TopicListObser = inject('appState')(observer(TopicList));

// export default TopicListObser;
