import React, { useState } from "react";
import "./BookForm.css";
import { Book } from "./Book.jsx";

function BookForm() {
  const [entry, setEntry] = useState({
    title: "",
    year: "",
    author: "",
  });
  const [bookdata, setPushBook] = useState([]);
  const [deletebook, setDeleteBook] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("event.targetof input change", event.target);
    console.log("event.target.name input change", name);
    setEntry((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPushBook([...bookdata, entry]);
    setEntry({ title: "", year: "", author: "" });
    console.log("in handleSubmit: ", bookdata);
  };

  const handleDelete = () => {
    setPushBook((prevBooks) =>
      prevBooks.filter((book) => book.title !== deletebook)
    );
    setDeleteBook("");
  };

  console.log("Outside handler bookdata:", bookdata);
  return (
    <>
      <div className="myform">
        <form>
          <div>
            <label htmlFor="bookname">Enter Name of the book:</label>
            <input
              type="text"
              id="bookname"
              name="title"
              value={entry.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Enter Name of the Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={entry.author}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="year">Enter year when published:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={entry.year}
              onChange={handleInputChange}
            />
          </div>
          <button value={entry} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="formdata"></div>
      <h1>Books after form submission:</h1>
      {bookdata.length > 0 ? (
        <div>
          {bookdata.map((book, index) => (
            <Book
              key={index}
              title={book.title}
              author={book.author}
              year={book.year}
            />
          ))}
        </div>
      ) : (
        <div>Data base empty</div>
      )}
      <div class="delete">
        <h2>Wanna delete a book from the list?</h2>
        <div>
          <label htmlFor="delete">Enter name of the book to delete: </label>
          <input
            type="text"
            id="delete"
            value={deletebook}
            onChange={(e) => setDeleteBook(e.target.value)}
          />
        </div>
        <div class="deletebutton">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default BookForm;
