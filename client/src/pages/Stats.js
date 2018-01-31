import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quitDateEpoch: null,
      rightNowEpoch: '',
      days: '',
      hours: '',
      mins: '',
      seconds: ''
    }
  }

  tick = () => {
    let msecPerMin = 60 * 1000;
    let msecPerHour = msecPerMin * 60;
    let msecPerDay = 24 * msecPerHour;

    let currentDateEpoch = new Date().getTime();
    let interval = currentDateEpoch - this.state.quitDateEpoch;

    let days = Math.floor(interval / msecPerDay);
    interval = interval - days * msecPerDay;
    let hours = Math.floor(interval / msecPerHour);
    interval = interval - hours * msecPerHour;
    let mins = Math.floor(interval / msecPerMin);
    interval -= mins * msecPerMin;
    let seconds = Math.floor(interval / 1000);

    this.setState({
      rightNowEpoch: currentDateEpoch,
      days: days,
      hours: hours,
      mins: mins,
      seconds: seconds
    });

  }

  componentWillMount() {
    let quitDateToEpoch = new Date(this.props.user.quitDate).getTime();
    this.setState({
      quitDateEpoch: quitDateToEpoch
    })
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    // TODO: Stop the timer just in case;
  }

  render() {
    if (this.props.user && this.props.user.name) {
      return (<div>

        <h2>HELLO AGAIN {this.props.user.name}!</h2>
        <div>{this.state.quitDateEpoch}</div>
        <h4>You have been smoke free for {this.state.days} days, {this.state.hours} hours, {this.state.mins} minutes and {this.state.seconds} seconds.</h4>
        <h4>You've been smoking for {this.props.user.yearsSmoked} years</h4>
        <h4>You've smoked  {this.props.user.cigsPerDay} cigs per day</h4>
        <h1>Stats page</h1>
        
      </div>);
    }
    else {
      return (<p>Stats page</p>);
    }
  }
}

export default Stats;
