import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
 
const MapContainer = ({ google }) => {

    const mapStyles = {
      width: "100%",
      height: "100%",
    }

    return (
      <Map
        google={google}
        zoom={13}
        style={mapStyles}
        initialCenter={{lat: 51.39858314350437, lng: 30.04838163728326}} >
          <Marker
            name={"Power unit explosion"}
            position={{lat: 51.40858314350437, lng: 30.05638163728326}}
          />
      </Map>
    );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyB5MIj6ZM2mbursTf2MaIoadcyHg2zNlwA")
})(MapContainer)

