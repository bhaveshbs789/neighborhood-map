import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './Map'
import * as FourSquareAPI from './FourSquareAPI'

class App extends Component {

  componentDidMount(){
  	FourSquareAPI.searchVenue({
  		near:'Chicago,IL',
  		query:'burger',
  		limit: 10
  	}).then(results => console.log(results))
  }

  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
