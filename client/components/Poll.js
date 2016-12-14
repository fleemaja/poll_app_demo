import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const style = {
  width: 300,
  padding: 5,
  margin: 20,
  display: 'inline-block',
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const Poll = React.createClass({
  render() {
    const poll = this.props.poll;
    return (
      <Paper style={style}>
        <div>
          <p>{poll.title}</p>
          <RadioButtonGroup name="option">
            {poll.options.map(function(option){
              return <RadioButton value={option} label={option}
                     style={styles.radioButton} />
            })}
          </RadioButtonGroup>
        </div>
      </Paper>
    )
  }
});

export default Poll;
