import React from 'react';
import { Form } from 'semantic-ui-react';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  setIntialAddress = (searchTerm) => {
    this.setState({
      searchTerm
    });
  }

  handleChange = (e) => {

    this.setState({ searchTerm: e.target.value })
  }
  componentDidMount(){
    const input = document.getElementById('input');
    const dropdown = new window.google.maps.places.Autocomplete(input);
    dropdown.addListener('place_changed', () => {
      const place = dropdown.getPlace();
      this.setState({
        searchTerm: place.formatted_address
      })
      this.props.handleAdressChange(place)
    });

    input.addEventListener('keydown', (e) => {
      if(e.keyCode === 13) e.preventDefault()
    })
    this.setIntialAddress(this.props.address);
  }
  render() {
    return (
      <Form.Input
        id='input'
        required
        label={'Address'}
        placeholder={'Where is this place?'}
        onChange={this.handleChange}
        value={this.state.searchTerm}
      />
    );
  }
}
