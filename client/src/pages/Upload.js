import React, {Component} from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import axios from 'axios';

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: ''
      }
    }

    uploadWidget = () => {
      let imageURL;
      let base = this
        window.cloudinary.openUploadWidget({ cloud_name: 'spaceviking', upload_preset: 'u6iawft7', tags:[]},
            function(error, result) {
             base.setState({imageUrl: result[0].secure_url});
             console.log(base.state.imageUrl)
            });
      }

      render(){
        return(
          <div>
            <div>
              <button className="uploadbtn" onClick={this.uploadWidget}>Upload a Pic</button>
            </div>
            <img className="div--cloud__image" src={this.state.imageUrl} />
          </div>
        );
    }
  }

  export default Upload;
