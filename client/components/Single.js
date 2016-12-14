import React from 'react';
import Poll from './Poll';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { pollId } = this.props.params;

    const i = this.props.polls.findIndex((poll) => poll.code === pollId);
    const poll = this.props.polls[i];

    const pollComments = this.props.comments[pollId] || [];

    return (
      <div>
        <Poll i={i} poll={poll} {...this.props} />
        <Comments pollComments={pollComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
