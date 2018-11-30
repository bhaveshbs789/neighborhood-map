import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    	{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  	</GoogleMap>
	))
);
  
class Map extends Component {
	render() {
		return (
			<MyMapComponent
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAcMflL553xnoMM7BcgV4X9rUtDw0yeyFQ"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `100%`, width:`100%` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

export default Map;
