import React from 'react';
import { connect } from 'react-redux';
import { getStores } from './actions';
import { Loader, Header } from 'semantic-ui-react';
import Card from './components/Card';

class Stores extends React.Component{
  componentDidMount() {
    this.props.getStores()
  }

  render() {
    if(!this.props.stores){
      return <Loader active inline='centered' />
    }
    return (
      <div>
        <Header as='h1' textAlign={'center'}>{this.props.title}</Header>
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
