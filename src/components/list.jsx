import React, { Component } from "react";
import Flat from "./flat";

const List = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={index}
            index={index}
            selected={flat.name === props.selectedFlat.name}
            selectFlat={props.selectFlat}
          />
        );
      })}
    </div>
  );
}

export default List;
