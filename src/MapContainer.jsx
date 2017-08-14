import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

const triangleCoords = [
	{lat: 25.774, lng: -80.190},
	{lat: 18.466, lng: -66.118},
	{lat: 32.321, lng: -64.757},
	{lat: 25.774, lng: -80.190}
];

export class MapContainer extends Component {
	render() {
		return (
			<Map google={this.props.google}
				 style={{width: '100%', height: '100%', position: 'relative'}}
				 className={'map'}
				 zoom={6}
				 // initialCenter={{lat: 50.401951, lng: 30.3922673}}>
				 initialCenter={{lat: 25.774, lng: -80.190}}>
				<Marker
					name={'Work'}
					position={{lat: 50.4636993, lng: 30.5221587}} />
				<Marker
					name={'Home'}
					position={{lat: 50.387096, lng: 30.372248}} />
				<Marker
					position={triangleCoords[1]} />
				<Marker
					position={triangleCoords[2]} />
				<Marker
					position={triangleCoords[3]} />
				<Polygon
					paths={triangleCoords}
					strokeColor="#0000FF"
					strokeOpacity={0.8}
					strokeWeight={2}
					fillColor="#0000FF"
					fillOpacity={1} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBydncO-ZJ3Spym-Ks7KVe47KDtXfwwYFE"
})(MapContainer)