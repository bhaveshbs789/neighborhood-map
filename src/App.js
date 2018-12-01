import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import * as SquareAPI from './SquareAPI'

class App extends Component {

  componentDidMount(){
  	SquareAPI.searchVenue({
  		near:'Chicago,IL',
  		query:'tacos',
  		limit: 10
  	}).then(results => console.log(results))

  	SquareAPI.getVenueDetails("50dbf6b3e4b08766dcc9f835")
  	.then(result => console.log(result))

  	SquareAPI.getVenuePhoto("50dbf6b3e4b08766dcc9f835")
  	.then(result => console.log(result))
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
