import './Books.css';
import {books} from './BookStore';
import Book from './Book';



function BookListApp() {
  return (
    <section className="App">
      {books.map((book)=> {
         return (
          <Book 
            key={book.id}
            book={book}
          />
         )
      })}
    </section>
  );
}

export default BookListApp;