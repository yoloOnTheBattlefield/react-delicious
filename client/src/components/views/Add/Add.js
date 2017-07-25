import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { addStore, createStore } from './actions';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: null,
      description: null,
      tags: []
    }
  }

  _handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({
      name
    });
  }

  _handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  }

  _handleTagsChange = (e, data) => {
    this.setState({ tags: [...this.state.tags, data.value] });
  }

  _handleSubmit = () => {
    this.props.createStore(this.state);
    this.setState({
      name: null,
      description: null,
      tags: []
    });
  }

  componentDidMount() {
    this.props.addStore();
  }

  render() {
    const tags = ['Wifi', 'Open Late', 'Family Friendly', 'Vegetarian', 'Off License'];
    return (
      <div>
        <h2>{this.props.title}</h2>
      <Form onSubmit={this._handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            onChange={this._handleNameChange}
            label='Place Name'
            placeholder='Place Name'
            value={this.state.name || ''}
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea
            onChange={this._handleDescriptionChange}
            label='Description'
            placeholder='Tell us more about this place...'
            value={this.state.description || ''}
          />
        </Form.Group>
        <Form.Group>
          {
            tags.map((tag, key) => (
                <Form.Checkbox
                  onChange={this._handleTagsChange}
                  key={key}
                  value={tag}
                  label={tag}
                />
              )
            )
          }
        </Form.Group>
        <Form.Button content='Submit place' />
      </Form>
    </div>
    )
  }
}

const mapStateToProps = ({ addStore }) => ({
  title: addStore.title
});
const mapDispatchToProps = (dispatch) => ({
  addStore: () => dispatch(addStore()),
  createStore: (data) => dispatch(createStore(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
