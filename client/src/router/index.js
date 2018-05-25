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

// import TopicList from '../containers/TopicList';
// import TopicDetail from '../containers/TopicListDetail';

export default () => (
  <React.Fragment>
    {/* <Redirect to="/list" /> */}
    <Route exact path="/" render={() => <Redirect to="/list" />} />
    <Route path="/list" component={LoadableTopicList} />
    <Route path="/detail" component={LoadableTopicDetail} />
  </React.Fragment>
);
