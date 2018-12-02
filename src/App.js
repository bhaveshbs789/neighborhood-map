import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import * as SquareAPI from './SquareAPI'

class App extends Component {

  state = {
  	venues : [],
  	markers : [],
  	center : [],
  	zoom : 14
  }

  /* Destructuring in the promise 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */

  componentDidMount(){
  	SquareAPI.searchVenue({
  		near:'Udaipur,IN',
  		query:'palace',
  		limit: 10  		
  	}).then(results => {
  		const { venues } = results.response;
  		const { center } = results.response.geocode.feature.geometry;
  		const { bounds } = results.response.geocode.feature.geometry;
  		// const venues = results.response.venues;
  		// const center = results.response.geocode.feature.geometry;  		
  		// console.log(Array.isArray(venues));
  		console.log(results);
  		const markers = venues.map(venue => {
  			return {
  				lat: venue.location.lat,
  				lng: venue.location.lng
  			}
  		});
  		// console.log(markers);
  		// console.log(center);
  		this.setState({venues: venues, markers: markers, center: center})
  	})

  	// SquareAPI.getVenueDetails("50dbf6b3e4b08766dcc9f835")
  	// .then(result => console.log(result))

  	// SquareAPI.getVenuePhoto("50dbf6b3e4b08766dcc9f835")
  	// .then(result => console.log(result))
  }

  //https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
  render() {
    return (
      <div className="App">
        <Map {...this.state}/>
      </div>
    );
  }
}

export default App;
