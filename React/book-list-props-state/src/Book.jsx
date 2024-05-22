import React, { useState } from "react";
import './Book.css'
import axios from 'axios';
// let toggleFlag = false;


export function Book(props) {

  const [toggleFlag, setToggleFlag] = useState(false);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');  

  const fetchDescription = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.title}&key=AIzaSyA3WQV57fHZoaSWc9uAcF-uOv_PpE71kM0`
      );
      const book = response.data.items[0];
      const description = book.volumeInfo.description || 'No description available';
      setDescription(description);
      setToggleFlag(!toggleFlag);
      console.log("toggleFlag: ", toggleFlag);
    } catch (error) {
      setError('Could not fetch book description');
    }
  };

  return (
    <div class="bookitem">
      <p>Book name: {props.title} <br/>
      Author: {props.author}<br/>
      Year: {props.year}</p>
      <label class="switch">
        <input type="checkbox" onClick={fetchDescription}/>
        <span class="slider round"></span>
      </label>
      {description && toggleFlag && <p class="description">{description}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
