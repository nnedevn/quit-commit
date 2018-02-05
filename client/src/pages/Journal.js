import React, { Component } from 'react';
import JournalSubmitForm from './JournalSubmitForm';
import JournalEntry from './JournalEntry';
import { isArray } from 'util';
class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      journalEntries: [],
      buttonClass: 'fas fa-plus-circle'
    }
  }

  returnToJournalOnSubmit = (entry) => {
    console.log(entry);
    this.setState({
      showForm: false,
      journalEntries: this.state.journalEntries.concat(entry)
    });
  }

  componentWillMount() {
    let journalEntriesWeird = this.props.user.journalEntries;
    let journalEntries = [];
    for (let index in journalEntriesWeird) {
      journalEntries.push(journalEntriesWeird[index]);
    }
    this.setState({
      journalEntries: journalEntries
    })
  }

  content = () => {

    if (this.state.showForm) {
      return <JournalSubmitForm user={this.props.user} returnToJournalOnSubmit={this.returnToJournalOnSubmit} />
    } else {
      console.log("######STUFF",isArray(this.state.journalEntries) );
      let thing = this.state.journalEntries.reverse().map(function (entry) {
        return <JournalEntry entry={entry} />
      });
      return thing;
    }
  }

  toggleForm = (e) => {
    this.setState({
      showForm: !this.state.showForm
    })
    this.state.showForm ? this.setState({ buttonClass: "fas fa-plus-circle" }) : this.setState({ buttonClass: "fas fa-minus-circle" });
  }

  render() {

    return (
      <div>
        {this.content()}

        {this.journalContent}
        <div className="lower-right-buttons">
          <button type="button" class="btn btn-default btn-circle btn-xl"><i class="fas fa-plus-circle"></i></button>
          <button type="button" onClick={this.toggleForm} class="btn btn-default btn-circle btn-xl"><i class={this.state.buttonClass}></i></button>
        </div>
      </div>
    );
  }
}

export default Journal;
