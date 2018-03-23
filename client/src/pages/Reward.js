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
        window.location = '/stats';
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
          <h1>Reward Yourself</h1>
        </div>
        <div className="reward-desc">
          <h4>Picture what you are working towards!</h4>
        </div>
        <Upload getUrl={this.getUrl} />
        <div className="reward-inputs">
          <h3>How Much Does It Cost?</h3>
          <form onSubmit={this.handleSubmit}>
            <span className="dollasign">$</span>
            <input type="integer" onChange={this.handleChange} required/>
            <br />
            <br /> 
            <input className="btn btn-primary mb-2" type="submit" value="submit" placeholder="Count em up!" />
            <h3>Heres How Long It Will take to Save Up</h3>
          </form>
        </div>
        {this.getUrl}
      </div>
    );
  }
}


export default Reward;
