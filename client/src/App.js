import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation/Navbar/Navbar';
import Home from './components/views/Home/Home';
import Stores from './components/views/Stores/Stores';
import Store from './components/views/Store/Store';
import EditStores from './components/views/Add/EditStores';
import Tags from './components/views/Tags/Tags';
import Top from './components/views/Top/Top';
import Add from './components/views/Add/Add';
import Map from './components/views/Map/Map';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stores' exact component={Stores} />
          <Route path='/stores/:id' exact component={Store} />
          <Route path='/stores/:id/edit' component={EditStores} />
          <Route path='/tags' component={Tags} />
          <Route path='/top' component={Top} />
          <Route path='/add' component={Add} />
          <Route path='/map' component={Map} />
        </Switch>
      </div>
    );
  }
}



export default App;
