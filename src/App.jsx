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
    author: 'tutti',
    year : 'tutti',
    sort: false
  });

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

  const handleAddFilters = (newFilters) => {
    setFilters(prev => [...prev, newFilters]);
  }


  return (
    <div className='app'>
      <h1>Gestione Libri</h1>
      <AddBookForm onAdd={handleAddBook} filters={filters} />
      <FilterBar onChange={handleAddFilters} />
      <div className='cards-container'>
        {books.length > 0 ? (
          books.map(book => <Card key={book.id} {...book} onDelete={handleDelete}/>)
        ) : (
          <p>Nessun libro aggiunto alla raccolta</p>
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
