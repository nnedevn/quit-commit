import React, { Component } from 'react';
import JournalSubmitForm from './JournalSubmitForm';
class Journal extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      journalEntries: [],
      buttonValue: 'Show'
    }
  }

  componentWillMount(){
    this.setState({
      journalEntries: this.props.user.journalEntries
    })
  }

  content = () => {
    
    if (this.state.showForm){
      return <JournalSubmitForm user={this.props.user}/>
    } else {
      return <div>Journal entries go here</div>

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
        {console.log(this.state.journalEntries)}
        {this.content()}
        <input type="button" value={this.state.buttonValue} onClick={this.toggleForm}/>
      </div>
    );
  }
}

export default Journal;
