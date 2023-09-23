import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Contact from './Contact';

class GoogleMap extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '600px',
      zIndex: '10 !important',
    };

    return (
      <div
        className="w-[90%] mx-auto grid grid-cols-2 my-10 gap-5"
        id="contact"
      >
        <div className="relative">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 37.7749, // Latitude of your desired location
              lng: -122.4194, // Longitude of your desired location
            }}
          >
            <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
          </Map>
        </div>
        <Contact />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_0rg4rvY4_ZVtS-2vRNZ8VslQGO3CLMk', // Replace with your API key
})(GoogleMap);
