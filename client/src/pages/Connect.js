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
        this.setState({messages: [...this.state.messages, data]});
    };

    this.sendMessage = ev => {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.props.user.name,
            message: this.state.message
        });
        this.setState({message: ''});
    }

  }

  render(){
      return (
          <div className="container">
              <div className="chat">
              <div className="row">
                  <div className="col align-self-center">
                      <div className="card">
                          <div className="card-body">
                              <div className="card-title">Global Support Chat for {this.props.user.name}</div>
                              <hr/>
                              <div className="messages">
                                {this.state.messages.map(message => {
                                  return (
                                    <h2>{message.author}: {message.message}</h2>
                                  )
                                })}
                              </div>
                          </div>
                          <div className="card-footer">
                              <form className="subForm" onSubmit={this.sendMessage}>
                                <input type="hidden" placeholder="Username" />
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
          </div>
      );
  }
}

export default Connect;



// <h4>Nicotene Anonymous</h4>
// <p>Nicotine Anonymous has face-to-face meetings in many locations. Follow the instructions below to connect with nicotine-anonymous.org for a meeting near you.</p>
// <iframe height="500px" width="100%" frameborder="0" allowtransparency="true" scrolling="auto" src="https://creator.zohopublic.com/nic.anon12/wwmlmaindatabase/form-embed/Search_Meeting/GEhEhGkGTFV5YQrz01NXqQ6jQgqwmdtCWyhKCknkdd6TQEJnrhPJszdYeXpgBfE3OWqf1RBhwVe5rk8NWtEwnU2haMRqDjuw4qdQ">
// </iframe>
