import { useState } from 'react';
import './FilterBar.css'

export default function FilterBar({ onChange }) {
    const [filtersData, setFiltersData] = useState({
        author: 'tutti',
        year: 'tutti',
        sort: false
    });

    const [toggled, setToggled] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltersData(prev => ({ ...prev, [name]: value }));
        onChange({ ...filtersData });
    };

    return (
        <div className='container-filters'>
            <div className='filter'>
                <label name='author'>Autore</label>
                <input
                    type="text"
                    name='author'
                    placeholder=''
                    onChange={handleChange}
                />
            </div>
            <div className='filter'>
                <label name='year'>Anno</label>
                <input
                    type="number"
                    name='year'
                    placeholder=''
                    onChange={handleChange}
                />
            </div>
            <div className='filter'>
                <label name='sort'>Ordine alfabetico</label>
                <button className={`toggle-btn ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)}>
                    <div className='thumb'></div>
                </button>
            </div>
        </div>
    )
}