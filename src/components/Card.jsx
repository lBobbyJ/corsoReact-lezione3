import './Card.css';

export default function Card({ title, author, year }){
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p><strong>Autore:</strong> {author}</p>
            <p><strong>Anno:</strong> {year}</p>
        </div>
    );
}   