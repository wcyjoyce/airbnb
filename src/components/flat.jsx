import React, { Component } from "react";

class Flat extends Component {
  render() {
    return (
      <div className="card" style={ {backgroundImage: `url("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg")`} } >
        <div className="card-category">{this.props.flat.priceCurrency} {this.props.flat.price}</div>
        <div className="card-description">{this.props.flat.name}</div>
        <a className="class-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
