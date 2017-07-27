import React from 'react';
import { connect } from 'react-redux';
import { getStoreToEdit, updateStore } from './actions';
import { Container, Grid, Loader, Header } from 'semantic-ui-react';
import Form from './Form';

class EditStores extends React.Component{
  handleSubmit = (data) => {
    console.log(data)
    const id = this.props.match.params.id;
    this.props.updateStore(data, id);
    console.log('submited form data ', data)
  }
  componentDidMount(){
    const path = this.props.location.pathname;
    this.props.getStoreToEdit(path)
  }
  render() {
    if(!this.props.store){
      return (
        <Loader active size={'huge'} inline='centered' />
      )
    }
    return (
      <Container>
        <Header as='h2' textAlign={'center'}>
          Edit {this.props.store.name}
        </Header>
        <Form
          store={this.props.store}
          handleSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ editStore }) => ({
  store: editStore.store
})

const mapDispatchToProps = (dispatch) => ({
  getStoreToEdit: (path) => dispatch(getStoreToEdit(path)),
  updateStore: (data, id) => dispatch(updateStore(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStores);
