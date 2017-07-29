import React from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import { Button } from 'semantic-ui-react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preview: null,
      loading: false
    }
  }
  handleUpload = (files) => {
    const image = files[0];
    const cloudName= 'dezgoqngv';
    const apiSecret = 'xfVTgvOjxwHeE_SCAC5Wgi4RvAs';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timestamp = Date.now()/1000;
    const uploadPreset = 'fu2buh3e';

    const paramStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${apiSecret}`;

    const signature = sha1(paramStr);
    const params = {
      'api_key': '731668425858718',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    };

    const request = superagent.post(url);
    request.attach('file', image);

    Object.keys(params).forEach((key) => {
      request.field(key, params[key]);
    });
    this.setState({
      loading: true
    })
    request.end((err, resp) => {
      if(err){
        console.log(err)
        return;
      }
      const image = resp.body;
      this.props.handleImageUpload(image);
      this.setState({
        loading: false,
        success: true
      })
    })
  }
  render(){
    return (
      <Dropzone
        onDrop={this.handleUpload}
        style={{
          margin: '0 auto'
        }}
      >
        <Button loading={this.state.loading} color='blue'>
          {
            this.state.success && !this.state.loading? 
              'Upload successful'
              :
              'Click to upload or drag and drop a photo'
          }
        </Button>
      </Dropzone>
    );
  }
}
