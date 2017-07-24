import React from 'react';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    fetch('/api')
      .then((data) => data.json())
      .then(({ message }) => this.setState({
        message
      }))
  }

  render() {
    if(!this.state.message){

    }
    return (
      <h1>{this.state.message}</h1>
    )
  }
}
