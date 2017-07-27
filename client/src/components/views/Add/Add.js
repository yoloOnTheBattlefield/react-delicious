import React from 'react';
import { connect } from 'react-redux';
import { addStore, createStore } from './actions';
import { Header } from 'semantic-ui-react';
import Form from './Form';

class Add extends React.Component{
  handleSubmit = (data) => {
    console.log(data)
    this.props.createStore(data);
  }

  componentDidMount() {
    this.props.addStore();
  }

  render() {
    return (
      <div>
        <Header as='h2' textAlign={'center'}>{this.props.title}</Header>
        <Form
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ addStore }) => ({
  title: addStore.title,
  storeSlug: addStore.slug
});
const mapDispatchToProps = (dispatch) => ({
  addStore: () => dispatch(addStore()),
  createStore: (data) => dispatch(createStore(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
