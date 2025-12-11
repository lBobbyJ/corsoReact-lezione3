import { useState } from "react";
import './AddBookForm.css';

export default function AddBookForm({ onAdd }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.author || !formData.year) {
            alert('Compila tutti i campi!');
            return;
        }
        onAdd({ ...formData, id: Date.now() });
        setFormData({ title: '', author: '', year: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                name="title"
                placeholder="Titolo del libro"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="author"
                placeholder="Autore"
                value={formData.author}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="year"
                placeholder="Anno di pubblicazione"
                value={formData.year}
                onChange={handleChange}
                required
            />

            <button className="btn" type="submit">Aggiungi libro</button>
        </form>
    );
}