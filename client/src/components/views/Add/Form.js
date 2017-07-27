import React from 'react';
import { Form, Loader } from 'semantic-ui-react';
import PlacesSuggestions from './PlacesSuggestions';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      location: {
        address: '',
        coordinates: []
      },
      tags: []
    }
  }

  _handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }

  _handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  }

  _handleAdressChange = (place) => {
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

  _handleTagsChange = (e, data) => {
    if(this.state.tags.includes(data.value)){
      return this.setState({
        tags: this.state.tags.filter((tag) => {
          return tag !== data.value
        })
      })
    }
    this.setState({ tags: [...this.state.tags, data.value] });
  }

  _handleSubmit = () => {
    const data = this.state;
    this.props.handleSubmit(data);
    this.setState({
      name: '',
      description: '',
      location: {
        address: '',
        coordinates: []
      },
      tags: []
    });
  }

  renderSuggestions = () => {
    if(this.state.location && this.state.location.address){
      return (
        <PlacesSuggestions
          handleAdressChange={this._handleAdressChange}
          address={this.state.location.address}
        />
      )
    }
    if(!this.props.store){
      return (
        <PlacesSuggestions
          handleAdressChange={this._handleAdressChange}
          address={this.state.location.address}
        />
      )
    }
  }
  componentDidMount(){
    if(!this.props.store){
      return this.setState({
        name: '',
        description: '',
        location: {
          address: '',
          coordinates: []
        },
        tags: []
      })
    }
    const { name, description, location, tags } = this.props.store;
    this.setState({
      name,
      description,
      location: {
        address: location.address,
        coordinates: location.coordinates,
      },
      tags
    })
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
        onSubmit={this._handleSubmit}
      >
        <Form.Group>
          <Form.Input
            required
            onChange={this._handleNameChange}
            label='Place Name'
            placeholder='Place Name'
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            onChange={this._handleDescriptionChange}
            label='Description'
            placeholder='Tell us more about this place...'
            value={this.state.description}
          />
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
                  onClick={this._handleTagsChange}
                  key={key}
                  value={choice}
                  label={choice}
                  checked={tags.includes(choice)}
                />
              )
            )
          }
        </Form.Group>
        <Form.Button size={'huge'} color={'green'} content='Submit place' />
      </Form>
    );
  }
}
