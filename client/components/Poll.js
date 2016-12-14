import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  paper: {
      width: 300,
      padding: 10,
      margin: 20,
      display: 'inline-block',
  },
  radioButton: {
    marginBottom: 16
  },
  raisedButton: {
    margin: 0
  }
};

const Poll = React.createClass({
  getInitialState() {
    return { voted: false, disabled: true, selectedOption: "" };
  },
  makeVote() {
    this.setState({ voted: true });
  },
  selectOption(changeEvent) {
    this.setState({ disabled: false, selectedOption: changeEvent.target.value })
  },
  render() {
    const poll = this.props.poll;
    const pollVotes = poll.votes;
    const that = this;
    if (this.state.voted) {
      return (
        <Paper style={styles.paper}>
          <div>
            <p>{poll.title}</p>
            <div>
              {poll.options.map(function(o){
                const percent = o['votes']/pollVotes;
                if (that.state.selectedOption === o['option']) {
                  return (
                    <div className="result-bar" style={{width: percent * 280, background: '#ddf'}}>
                      {Math.round(percent * 100) + "% " + o['option']}
                    </div>
                  )
                } else {
                  return (
                    <div className="result-bar" style={{width: percent * 280, background: '#ddd'}}>
                      {Math.round(percent * 100) + "% " + o['option']}
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </Paper>
      )
    } else {
      return (
        <Paper style={styles.paper}>
          <div>
            <p>{poll.title}</p>
            <RadioButtonGroup name="option" onChange={this.selectOption}>
              {poll.options.map(function(o){
                return <RadioButton value={o['option']} label={o['option']}
                       style={styles.radioButton} />
              })}
            </RadioButtonGroup>
            <RaisedButton disabled={this.state.disabled} onClick={this.makeVote} label="Vote" style={styles.raisedButton} />
          </div>
        </Paper>
      )
    }
  }
});

export default Poll;
