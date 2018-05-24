// 测试文件，需要删除
import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const TestAntd = props => (<Table columns={props.columns} dataSource={props.dataSource} />);

TestAntd.propTypes = {
  columns: PropTypes.array.isRequired, // eslint-disable-line
  dataSource: PropTypes.array.isRequired, // eslint-disable-line
};

export default TestAntd;
