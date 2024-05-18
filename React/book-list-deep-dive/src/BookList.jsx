import React from 'react'
import './BookList.css'
import './Book.css'
import withLogger from './withLogger.jsx'
import {showAuther, showBook, showYear} from './common.js'

export function BookList() {
  return (
    <>
    
    <div class="bookmain">
      <li>Book: {showBook(0)}   Auther: {showAuther(0)}     Year: {showYear(0)}</li>
      <li>Book: {showBook(1)}   Auther: {showAuther(1)}     Year: {showYear(1)}</li>
      <li>Book: {showBook(2)}   Auther: {showAuther(2)}     Year: {showYear(2)}</li>
    </div>
    </>
    
  )
}

const MyComponentWithLogger = withLogger(BookList);
export default MyComponentWithLogger;

