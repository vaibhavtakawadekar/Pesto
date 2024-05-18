import React from "react";
import './Book.css'

export function BookDerail(props){
return(
    <div className="bookdetail">
      {props.bookArr.map((book) => (
        <>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
        </>
        ))}
    </div>
  );
}


