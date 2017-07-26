import React from 'react';
import { connect } from 'react-redux';
import { getStores } from './actions';

// import StoreCard from './components/StoreCard';
import Card from './components/Card';

class Stores extends React.Component{
  componentDidMount() {
    this.props.getStores()
  }

  render() {
    if(!this.props.stores){
      return <div>Loading stores...</div>
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            this.props.stores.map((store, key) => {
              return <Card key={key} store={store}/>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ stores }) => ({
  title: stores.title,
  stores: stores.stores
})

const mapDispatchToProps = (dispatch) => ({
  getStores: () => dispatch(getStores())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stores)
