import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Upload from './Upload.js';
import { render } from 'react-dom';
import axios from 'axios';

class Reward extends Component {
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
        <Upload />
        <div>
          <h3>How Much Does It Cost?</h3>
          <span className="dollasign">$</span><input type="integer"></input>
          <h3>Heres How Long It Will take to Save Up</h3>
        </div>
      </div>
    );
  }
}


export default Reward;
