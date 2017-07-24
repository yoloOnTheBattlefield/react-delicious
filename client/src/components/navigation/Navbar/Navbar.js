import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component{
  render(){
    return (
      <nav>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/stores'>Stores</Link>
            </li>
            <li>
              <Link to='/tags'>Tags</Link>
            </li>
            <li>
              <Link to='/top'>Top</Link>
            </li>
            <li>
              <Link to='/add'>Add</Link>
            </li>
            <li>
              <Link to='/map'>Map</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
