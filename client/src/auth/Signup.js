import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      cigsPerDay:'',
      yearsSmoked:'',
      quitDate: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }
  handleCigsPerDayChange = (e) => {
    console.log(e.target.value);
    this.setState({ cigsPerDay: e.target.value })
  }
  handleYearsSmokedChange = (e) => {
    console.log(e.target.value);
    this.setState({ yearsSmoked: e.target.value })
  }
  handleQuitDateChange = (e) => {
    console.log(e.target.value);
    this.setState({ quitDate: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cigsPerDay:this.state.cigsPerDay,
      yearsSmoked: this.state.yearsSmoked,
      quitDate: this.state.quitDate
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    })
  }

  render() {
    let form = '';
    if (this.props.user) {
      return (<Redirect to="/stats" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
        <div>
          <input name="Name"
            placeholder="What is your first name?"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <input name="Email"
            placeholder="What is your email?"
            value={this.state.email}
            onChange={this.handleEmailChange} />
        </div>
        <div>
          <input name="Password"
            placeholder="Choose a password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </div>
        <div>
          <input name="cigsPerDay"
            placeholder="How many cigarettes did you smoke a day?"
            type="integer"
            value = {this.state.cigsPerDay}
            onChange={this.handleCigsPerDayChange} />
        </div>
        <div>
          <input name="Duration"
            placeholder="How many years did you smoke?"
            type="integer"
            value={this.state.yearsSmoked}
            onChange={this.handleYearsSmokedChange} />
        </div>
        <div>
          <input name="quitDate"
            placeholder="How many years did you smoke?"
            type="date"
            value={this.state.quitDate}
            onChange={this.handleQuitDateChange} />
        </div>
        <input type="submit" value="Sign up!" className="btn-primary" />
      </form>);
    }
    return (
      <div>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
