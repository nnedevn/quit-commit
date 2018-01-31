import React, { Component } from 'react';
import JournalSubmitForm from './JournalSubmitForm';
class Journal extends Component {
  render() {
    return (
      <div>
        <JournalSubmitForm user={this.props.user}/>
      </div>
    );
  }
}

export default Journal;
