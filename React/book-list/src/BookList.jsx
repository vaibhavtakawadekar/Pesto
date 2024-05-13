import React from 'react'
import { Book } from './Book';
import './BookList.css'
import './Book.css'
const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];

  console.log(books[0])
const showBook = (i) =>{ return JSON.stringify(books[i].title)}
const showAuther = (i) =>{ return JSON.stringify(books[i].author)}
const showYear = (i) =>{ return JSON.stringify(books[i].year)}

export function BookList() {
  return (
    <>
    
    <div class="bookmain">
    <h1>BookList without any other compnonent:</h1>
      <li>Book: {showBook(0)}   Auther: {showAuther(0)}     Year: {showYear(0)}</li>
      <li>Book: {showBook(1)}   Auther: {showAuther(1)}     Year: {showYear(1)}</li>
      <li>Book: {showBook(2)}   Auther: {showAuther(2)}     Year: {showYear(2)}</li>
    </div>
    <div class="bookprops">
    <h1>BookList with other compnonent (using Props):</h1>
    {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} year={book.year} />
      ))}

    </div>
    </>
    
  )
}
