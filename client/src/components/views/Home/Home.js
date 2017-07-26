import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: null
    }
  }
  componentDidMount(){
    fetch('/')
    .then((data) => data.json())
    .then(data => console.log(data))
    .then(({ title }) => this.setState({
      title
    }))
  }
  render(){
    if(!this.state.title){
      return <div>not fetched :(</div>
    }
    return (
      <div><h1>{this.state.title}</h1></div>
    )
  }
}
