// import './App.css';
import BookClass from './BookClass.jsx';
import {BookDerail } from './BookDetail.jsx';
import { BookList } from './BookList';
import BookPureComponent from './BookPureComponent.jsx';
import {books} from './common.js'
import MyComponentWithLogger from './BookList';

function App() {
  return (
    <div className="App">
      <h1>Book component as function</h1>
      <BookList/>
      <h1>Book component as class</h1>
      <BookClass/>
      <h1>Passing book details as props:</h1>
      <BookDerail bookArr={books}/>
      <h1>Book as pure component</h1>
      <BookPureComponent/>
      <h1>BookList with HOC</h1>
      <MyComponentWithLogger/>
    </div>
  );
}

export default App;
