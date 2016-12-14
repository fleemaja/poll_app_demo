import React from 'react';
import Poll from './Poll';

const PollGrid = React.createClass({
  render() {
    return (
      <div>
        {this.props.polls.map((poll, i) => <Poll key={i} i={i} poll={poll} />)}
      </div>
    )
  }
});

export default PollGrid;
