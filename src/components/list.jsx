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
          />
        );
      })}
    </div>
  );
}

export default List;
