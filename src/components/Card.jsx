import './Card.css';

export default function Card({ id, title, author, year, onDelete }) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p><strong>Autore:</strong> {author}</p>
            <p><strong>Anno:</strong> {year}</p>
            <button className='btn' onClick={() => { onDelete(id) }}>Rimuovi</button>
        </div>
    );
}   