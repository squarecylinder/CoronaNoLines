import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '600px',
  height: '600px'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 40.4173, lng: -82.9071},
              {latitude: 40.4173, longitude: -82.9071},
              {latitude: 41.505493, longitude: -81.681290},
              {latitude: 39.983334, longitude: -82.983330}
              ],
              showingInfoWindow: false,  //Hides or the shows the infoWindow
              activeMarker: {},          //Shows the active marker upon click
              selectedPlace: {}
    }
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => this.onMarkerClick} />
    })
  }
  

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.4173, lng: -82.9071}}
        >
          {this.displayMarkers()}
          <Marker
          onClick={this.onMarkerClick}
          name={'Info Window'}
          />
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>
 
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWs77OPf3_03s5yGD-UtwXeR5B5q9TuF8'
})(MapContainer);