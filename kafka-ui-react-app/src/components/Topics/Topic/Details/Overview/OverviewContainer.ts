import { connect } from 'react-redux';
import { RootState, TopicName, ClusterName } from 'redux/interfaces';
import { getTopicByName } from 'redux/reducers/topics/selectors';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { clearMessagesTopic } from 'redux/actions';
import Overview from './Overview';

interface RouteProps {
  clusterName: ClusterName;
  topicName: TopicName;
}

type OwnProps = RouteComponentProps<RouteProps>;

const mapStateToProps = (
  state: RootState,
  {
    match: {
      params: { topicName, clusterName },
    },
  }: OwnProps
) => ({
  ...getTopicByName(state, topicName),
  topicName,
  clusterName,
});

const mapDispatchToProps = {
  clearMessagesTopic,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Overview)
);
