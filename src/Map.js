import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) => (

	<GoogleMap defaultZoom={8} 
	    	defaultCenter={{ lat: -34.397, lng: 150.644 }}
	    	zoom={props.zoom}
	    	center={props.center}
	    	>
    		{props.markers.map((marker,index) => 
    			<Marker 
    			key={index} 
    			position={{ lat: marker.lat, lng: marker.lng }}
    			/>)
    		}
  	</GoogleMap>
	))
);
  
class Map extends Component {

	render() {
		return (
			<MyMapComponent
			  {...this.props}
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDvxYjj-1V6ARbUow3UKS-uRpRk_SpN9mQ"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `100%`, width:`100%` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

export default Map;
