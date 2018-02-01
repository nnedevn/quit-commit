import React, { Component } from 'react';
import axios from 'axios';

class JournalSubmitForm extends Component {
  constructor(props) {
    super();
    this.state = {
      moodRating: '',
      journalEntry: ''
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/user/journal/new', {
      moodRating: this.state.moodRating,
      journalEntry: this.state.journalEntry,
      dateAndTime: new Date(),
      userId:this.props.user.id
    });
  }

  render() {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="">How are you feeling?</label>
            <input name="moodRating" onChange={this.handleInput} type="number" />
          </div>
          {console.log(this.props.user)}
          <div>
            <label htmlFor="">Tell me more</label>
            <textarea name="journalEntry" onChange={this.handleInput} id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <input type="submit" onClick={this.handleSubmit} value="submit" />
          </div>
        </form>
        {console.log(this.state.moodRating)}
        {console.log(this.state.journalEntry)}
      </div>
    );
  }
}

export default JournalSubmitForm;
