import React, { Component } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { render } from 'react-dom';

class Reward extends Component {
    uploadWidget() {

        window.cloudinary.openUploadWidget({ cloud_name: 'process.env.CLOUD_NAME', upload_preset: 'PRESET', tags:['xmas']},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
                <h1>Treat Yo Self</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>

        );
    }
}

export default Reward;
