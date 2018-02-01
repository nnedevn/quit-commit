import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Upload from './Upload.js';
import { render } from 'react-dom';
import axios from 'axios';

class Reward extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      price: ''
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      axios.put('/user/reward', {
        rewardUrl: this.state.url,
        rewardPrice: this.state.price,
        userId: this.props.user.id
      });
  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({price: e.target.value});
    console.log(e.target.value);
  }

  getUrl = (url) => {
    this.setState({ url: url });
  }

  render(){
    return(
      <div>
        <div className="treat-title">
          <h1>Treat Yo Self</h1>
        </div>
        <div className="reward-desc">
          <h2>What do you want to do with all that cash you are saving? </h2>
          <h4>Throw a picture up here to remind yourself what youre working towards!</h4>
        </div>
        <Upload getUrl={this.getUrl} />
        <div>
          <h3>How Much Does It Cost?</h3>
          <form onSubmit={this.handleSubmit}>
            <span className="dollasign">$</span>
            <input type="integer" onChange={this.handleChange} />
            <input type="submit" value="submit" placeholder="Count em up!" />
            <h3>Heres How Long It Will take to Save Up</h3>
          </form>
        </div>
        {this.getUrl}
      </div>
    );
  }
}


export default Reward;
