import React, { Component } from 'react';
import io from "socket.io-client";

class Connect extends Component{
  constructor(props){
      super(props);

      this.state = {
          username: '',
          message: '',
          messages: []
      };
    this.socket = io('localhost:8080');

    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });

    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };

    this.sendMessage = ev => {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message
        });
        console.log(this.state.message);
        this.setState({message: ''});
    }

  }

  render(){
      return (
          <div className="container">
              <div className="row">
                  <div className="col-4">
                      <div className="card">
                          <div className="card-body">
                              <div className="card-title">Global Chat</div>
                              <hr/>
                              <div className="messages">
                                {this.state.messages.map(message => {
                                  return (
                                    <div>{message.author}: {message.message}</div>
                                  )
                                })}
                              </div>
                          </div>
                          <div className="card-footer">
                              <form className="subForm" onSubmit={this.sendMessage}>
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Message" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} className="form-control"/>
                                <br/>
                                <button type="submit" className="btn btn-primary form-control">Send</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default Connect;



// <h4>Nicotene Anonymous</h4>
// <p>Nicotine Anonymous has face-to-face meetings in many locations. Follow the instructions below to connect with nicotine-anonymous.org for a meeting near you.</p>
// <iframe height="500px" width="100%" frameborder="0" allowtransparency="true" scrolling="auto" src="https://creator.zohopublic.com/nic.anon12/wwmlmaindatabase/form-embed/Search_Meeting/GEhEhGkGTFV5YQrz01NXqQ6jQgqwmdtCWyhKCknkdd6TQEJnrhPJszdYeXpgBfE3OWqf1RBhwVe5rk8NWtEwnU2haMRqDjuw4qdQ">
// </iframe>
