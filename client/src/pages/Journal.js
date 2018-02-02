import React, { Component } from 'react';
import JournalSubmitForm from './JournalSubmitForm';
import JournalEntry from './JournalEntry';
class Journal extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      journalEntries: [],
      buttonValue: 'Show'
    }
  }

  returnToJournalOnSubmit = (entry) => {  
    console.log(entry);
    this.setState({
      showForm: false,
      journalEntries: this.state.journalEntries.push(entry)
    });
  }

  componentWillMount(){
    // console.log(this.props.user.journalEntries);
    let journalEntriesWeird = this.props.user.journalEntries;
    let journalEntries = [];
    for (let index in journalEntriesWeird){
      journalEntries.push(journalEntriesWeird[index]);
    }
    this.setState({
      journalEntries: journalEntries
    })
  }

  content = () => {

    if (this.state.showForm){
      return <JournalSubmitForm user={this.props.user} returnToJournalOnSubmit={this.returnToJournalOnSubmit}/>
    } else {
      return this.state.journalEntries.reverse().map(function(entry){
        return <JournalEntry entry={entry}/>
      });
 
    }
  }

  toggleForm = (e) => {
    this.setState({
      showForm: !this.state.showForm
    })
    this.state.showForm ? this.setState({buttonValue:"Show"}) : this.setState({buttonValue:"Hide"});
  }
  
  render() {


    return (
      <div>
        {this.content()}
        <input type="button" value={this.state.buttonValue} onClick={this.toggleForm}/>
        {this.journalContent}
      </div>
    );
  }
}

export default Journal;
