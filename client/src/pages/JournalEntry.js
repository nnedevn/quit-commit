import React, {Component} from 'react';

class JournalEntry extends Component{
  render(){
    return(
      <div> Journal Entry: {this.props.entry}</div>
    )
  }
}

export default JournalEntry