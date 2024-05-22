const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
    // Add more books if you'd like
  ];

export const showBook = (i) =>{ return JSON.stringify(books[i].title)}
export const showAuther = (i) =>{ return JSON.stringify(books[i].author)}
export const showYear = (i) =>{ return JSON.stringify(books[i].year)}

export default books;