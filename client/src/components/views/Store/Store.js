import React from 'react';
import { connect } from 'react-redux';
import { getStoreWithId } from './actions';

class Store extends React.Component{
  componentDidMount(){
    const path = this.props.location.pathname;
    this.props.getStoreWithId(path)
  }
  render() {
    return (
      <h1>it works</h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStoreWithId: (path) => dispatch(getStoreWithId(path))
});

export default connect(null, mapDispatchToProps)(Store);
