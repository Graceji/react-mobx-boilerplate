import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../containers/TopicList';
import TopicDetail from '../containers/TopicListDetail';

export default () => (
  <React.Fragment>
    {/* <Redirect to="/list" /> */}
    <Route exact path="/" render={() => <Redirect to="/list" />} />
    <Route path="/list" component={TopicList} />
    <Route path="/detail" component={TopicDetail} />
  </React.Fragment>
);
