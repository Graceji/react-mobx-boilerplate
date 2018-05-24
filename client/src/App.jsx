import React, { Component } from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import TestAntd from './components/TestAntd';
import './styles/index.less'; // 引入测试样式文件
import Routes from './router'; // 引入测试路由文件

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      columns: [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <Divider type="vertical" />
            <Divider type="vertical" />
          </span>
        ),
      }],
      data: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }],
    };
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <Link to="/" className="test">首页</Link>
          <br />
          <Link to="/detail">详情页</Link>
        </div>
        <TestAntd columns={this.state.columns} dataSource={this.state.data} />
        <Routes />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
