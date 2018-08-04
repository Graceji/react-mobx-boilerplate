import React, { Component } from 'react';
import { inject, observer, propTypes } from 'mobx-react';
import PropTypes from 'prop-types';

@inject(stores => ({
  arr: stores.test.arr,
  test: stores.test,
  changeArr: stores.test.changeArr,
})) @observer
export default class Test extends Component {
  componentDidMount () {
    this.props.changeArr();
  }

  render () {
    return (
      this.props.arr.map(item => (
        <div key={item.name}>
          {
            item.name
          }
        </div>
      ))
    );
  }
}

Test.propTypes = {
  arr: propTypes.arrayOrObservableArray,
  changeArr: PropTypes.func,
};
