import { useState } from 'react';
import './FilterBar.css'

export default function FilterBar({ filters, onChangeFilters }) {
    const handleClick = () => {
        const toggleValue = !filters.sort;
        onChangeFilters(prev => ({ ...prev, sort: toggleValue }));
    }

    
    return (
        <div className='container-filters'>
            <div className='filter'>
                <label name='author'>Autore</label>
                <input
                    type="text"
                    name='author'
                    value={filters.author}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, author: e.target.value }))}
                />
            </div>
            <div className='filter'>
                <label name='year'>Anno</label>
                <input
                    type="number"
                    name='year'
                    value={filters.year}
                    onChange={(e) => onChangeFilters(prev => ({ ...prev, year: e.target.value }))}
                />
            </div>
            <div className='filter'>
                <label name='sort'>Ordine alfabetico</label>
                <button className={`toggle-btn ${filters.sort ? 'toggled' : ''}`} onClick={handleClick}>
                    <div className='thumb'></div>
                </button>
            </div>
        </div>
    )
}