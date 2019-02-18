import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker.jsx";

class Map extends Component {
  center() {
    return {
      lat: this.props.selectedFlat.lat,
      lng: this.props.selectedFlat.lng
    };
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAn1QSQh4R1KK-pt_mcoQHAZ1NAXBc7N68" }}
          center={this.center()}
          zoom={12}
        >
          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
