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

  statImage = () => {
    if(this.props.user.rewards.length !== 0 ){
      
      return <img className="dash-image" src={this.props.user.rewards[0].rewardUrl} />;
    } else {
      
      return <a href="/reward"><p>Reward yourself</p></a>
    }
  }

  render() {
    if (this.props.user && this.props.user.name) {

      let cigsNotSmoked = (this.state.days * this.props.user.cigsPerDay) + Math.round(this.state.hours * (this.props.user.cigsPerDay / 24));

      let moneyNotSpent = (.478 * cigsNotSmoked).toFixed(2);

      return (
        <div>
          <h2>{this.props.user.name}&lsquo;s Dashboard</h2>
          <div className="icon-cont">
            <div className="dash-icon">
              <h3>Smoke free for:</h3>
              <h4> {this.state.days} days, {this.state.hours} hours, {this.state.mins} minutes and {this.state.seconds} seconds.</h4>
            </div>
            <div className="dash-icon">
              <h4>You would have smoked {cigsNotSmoked} cigarets.</h4>
            </div>
            <div className="dash-icon">
              <h4>You would have spent an extra ${moneyNotSpent} </h4>
            </div>
            <div className="dash-icon">
              <h4>You&lsquo;ve been smoking for {this.props.user.yearsSmoked} years</h4>
            </div>
            <div className="dash-icon">
              <h4>You've smoked  {this.props.user.cigsPerDay} cigs per day</h4>
            </div>
            <div className="dash-icon">
            {this.statImage()}
            </div>
          </div>
        </div>);
    }
    else {
      return (<p>Stats page</p>);
    }
  }
}

export default Stats;
