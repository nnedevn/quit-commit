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
        <Upload />
      </div>
    );
  }
}


export default Reward;
