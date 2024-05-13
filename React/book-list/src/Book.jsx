import React from "react";
import './Book.css'
export function Book(props) {
  return (
    <div class="bookitem">
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}
