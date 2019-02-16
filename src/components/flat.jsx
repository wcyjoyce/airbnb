import React, { Component } from "react";

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.index);
    }
  }

  render() {
    return (
      <div className={`card${this.props.selected ? " active" : ""}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("${this.props.flat.imageUrl}")` }}>
        <div className="card-category">{this.props.flat.priceCurrency} {this.props.flat.price}</div>
        <div className="card-description"><h2>{this.props.flat.name}</h2></div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
