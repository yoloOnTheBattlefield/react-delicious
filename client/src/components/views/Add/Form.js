import React from 'react';
import { Form } from 'semantic-ui-react';
import PlacesSuggestions from './PlacesSuggestions';
import UploadImage from './UploadImage';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      photo: '',
      location: {
        address: '',
        coordinates: []
      },
      tags: []
    }
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }

  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  }

  handleAdressChange = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const address = place.formatted_address;
    this.setState({
      location: {
        address,
        coordinates: [lat, lng]
      },
    })
  }

  handleTagsChange = (e, data) => {
    //removes the tags
    if(this.state.tags.includes(data.value)){
      return this.setState({
        tags: this.state.tags.filter((tag) => {
          return tag !== data.value
        })
      })
    }
    //adds the tags witout mutation
    this.setState({ tags: [...this.state.tags, data.value] });
  }

  handleImageUpload = (photo) => this.setState({ photo: photo.url })

  renderImageUpload = () => (
    <UploadImage
      handleImageUpload={this.handleImageUpload}
    />
  )

  renderSuggestions = () => {
    //this renders in the get(/stores/:id/edit)
    if(this.state.location && this.state.location.address){
      return (
        <PlacesSuggestions
          handleAdressChange={this.handleAdressChange}
          address={this.state.location.address}
        />
      )
    }
    //this renders in the get(/add)
    if(!this.props.store){
      return (
        <PlacesSuggestions
          handleAdressChange={this.handleAdressChange}
          address={this.state.location.address}
        />
      )
    }
  }

  handleSubmit = (e) => {
    const data = this.state;
    if(!this.state.image){
      e.preventDefault();
    }
    this.props.handleSubmit(data);
    console.log(data)
    //reset the state after submiting the form
    this.setState({
      name: '',
      description: '',
      photo: '',
      location: {
        address: '',
        coordinates: []
      },
      tags: []
    });
  }

  componentDidMount(){
    //if it is in the get(/add) return
    if(!this.props.store){
      return;
    }
    //else initialize the state with the data from props
    console.log(this.props.store)
    const { name, description, photo, location, tags } = this.props.store;
    this.setState({
      name,
      description,
      photo,
      location: {
        address: location.address,
        coordinates: location.coordinates,
      },
      tags
    });
  }

  render() {
    const choices = ['Wifi', 'Open Late', 'Family Friendly', 'Vegetarian', 'Off License'];
    const tags = this.state.tags || [];
    return (
      <Form
        style={{
          margin:  '50px auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        size={'huge'}
        onSubmit={this.handleSubmit}
        encType="multipart/form-data"
      >
        <Form.Group>
          <Form.Input
            required
            onChange={this.handleNameChange}
            label='Place Name'
            placeholder='Place Name'
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            onChange={this.handleDescriptionChange}
            label='Description'
            placeholder='Tell us more about this place...'
            value={this.state.description}
          />
        </Form.Group>
        <Form.Group>
          {
            this.renderImageUpload()
          }
        </Form.Group>
        <Form.Group>
          {
            this.renderSuggestions()
          }
        </Form.Group>
        <Form.Group>
          {
            choices.map((choice, key) => (
                <Form.Checkbox
                  onClick={this.handleTagsChange}
                  key={key}
                  value={choice}
                  label={choice}
                  checked={tags.includes(choice)}
                />
              )
            )
          }
        </Form.Group>
        <Form.Button
          size={'huge'}
          color={'green'}
          content='Submit place'
        />
      </Form>
    );
  }
}
