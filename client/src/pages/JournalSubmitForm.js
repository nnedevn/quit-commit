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
    let base = this;
    axios.put('/user/journal/new', {
      moodRating: this.state.moodRating,
      journalEntry: this.state.journalEntry,
      userId:this.props.user.id
    }).then(function(result){
      let allTheEntries = []
      for (let index in result.data.user.journalEntries){
        allTheEntries.push(result.data.user.journalEntries[index]);
      }
      base.props.returnToJournalOnSubmit(allTheEntries[allTheEntries.length - 1]);
    }).catch(err=>console.log(err));
  }

  render() {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="">How are you feeling?</label>
            <input name="moodRating" onChange={this.handleInput} type="number" />
          </div>
          <div>
            <label htmlFor="">Tell me more</label>
            <textarea name="journalEntry" onChange={this.handleInput} id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <input type="submit" onClick={this.handleSubmit} value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default JournalSubmitForm;
