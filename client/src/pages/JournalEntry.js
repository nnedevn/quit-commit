import React, {Component} from 'react';

class JournalEntry extends Component{
  render(){
    return(
      <div className="journal-entry"> 
        <h4>Mood rating: {this.props.entry.moodRating}</h4>
        <h5>Journal Entry: </h5>
        <p>{this.props.entry.journalEntry}</p> 
      </div>
      
    )
  }
}

export default JournalEntry