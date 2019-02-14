import React, { Component } from "react";

import List from "./list.jsx";
import Flat from "./flat.jsx";
import Map from "./map.jsx";

import flats from "../../data/flats.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: null
    }
  }

  render() {
    return (
      <div>
        <List
          flats={this.state.flats}
          selectedFlat = {this.state.selectedFlat}
        />
        <Map />
      </div>
    )
  }
}

export default App;
