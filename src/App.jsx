import { useState, useEffect } from 'react'
import Card from './components/Card'
import AddBookForm from './components/AddBookForm'
import FilterBar from './components/FilterBar'
import './App.css'

function App() {

  // Lazy init
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [message, setMessage] = useState("");

  const [filters, setFilters] = useState({
    author: '',
    year: '',
    sort: false
  });

  const filteredBooks = books
    .filter(book => {
      if (filters.author.trim() !== '') {
        return book.author
          .toLowerCase()
          .includes(filters.author.trim().toLowerCase());
      }
      return true;
    })
    .filter(book => {
      if (filters.year !== '') {
        return String(book.year).includes(filters.year);
      }
      return true;
    });

  const sortedBooks = [...filteredBooks];
  if (filters.sort) {
    sortedBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  } 
  // else {
  //   sortedBooks.sort((a, b) =>
  //     b.title.localeCompare(a.title)
  //   )
  // }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
    setMessage(`Hai aggiunto '${newBook.title}' alla raccolta`);
    setTimeout(() => setMessage(""), 2500);
  }

  const handleDelete = (id) => {
    setBooks((prev) => {
      return prev.filter(book => book.id !== id);
    });
  }


  return (
    <div className='app'>
      <h1>Gestione Libri</h1>
      <AddBookForm onAdd={handleAddBook} />
      <FilterBar filters={filters} onChangeFilters={setFilters} />
      <div className='cards-container'>
        {sortedBooks.length > 0 ? (
          sortedBooks.map(book => <Card key={book.id} {...book} onDelete={handleDelete} />)
        ) : (
          <p>Nessun libro trovato</p>
        )}
        {/* {books.length > 0 ? (
          books.map(book => <Card key={book.id} {...book} onDelete={handleDelete}/>)
        ) : (
          <p>Nessun libro aggiunto alla raccolta</p>
        )} */}
      </div>

      {(message) && <p className='success'>{message}</p>}
    </div>
  )
}

export default App
