import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { Doughnut } from 'react-chartjs-2';

const styles = {
  paper: {
      width: 300,
      padding: 10,
      margin: 20,
      display: 'inline-block',
  }
};

const DonutChart = React.createClass({
  render() {
    const poll = this.props.poll;
    const data = {
    	labels: [
    		'Red',
    		'Green',
    		'Yellow'
    	],
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };
    // const chartData = poll.options.map(function(o) { return o.votes });
    // const chartLabels = poll.options.map(function(o) { return o.option });
    return (
      <Paper style={styles.paper}>
        <Doughnut
          data={data}
          width={280}
          height={280}
          options={{
              maintainAspectRatio: false
          }}
        />
      </Paper>
    )
  }
});

export default DonutChart;
