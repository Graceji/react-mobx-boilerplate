import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.error) { // eslint-disable-line
    return <div>Error! <button onClick={props.retry}>Retry</button></div>; // eslint-disable-line
  }
  return <div>Loading...</div>;
};

const LoadableTopicList = Loadable({
  loader: () => import('../containers/TopicList'),
  loading: Loading,
});

const LoadableTopicDetail = Loadable({
  loader: () => import('../containers/TopicListDetail'),
  loading: Loading,
});

const LoadableTest = Loadable({
  loader: () => import('../containers/Test'),
  loading: Loading,
});

export default () => (
  <React.Fragment>
    <Route exact path="/" render={() => <Redirect to="/list" />} />
    <Route path="/list" component={LoadableTopicList} />
    <Route path="/detail" component={LoadableTopicDetail} />
    <Route path="/test" component={LoadableTest} />
  </React.Fragment>
);
