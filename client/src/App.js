import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navigation/Navbar/Navbar';
import Home from './components/views/Home/Home';
import Stores from './components/views/Stores/Stores';
import Tags from './components/views/Tags/Tags';
import Top from './components/views/Top/Top';
import Add from './components/views/Add/Add';
import Map from './components/views/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/stores' component={Stores} />
              <Route path='/tags' component={Tags} />
              <Route path='/top' component={Top} />
              <Route path='/add' component={Add} />
              <Route path='/map' component={Map} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
