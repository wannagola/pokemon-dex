import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon, isSelected, onAdd }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', width: 120, textAlign: 'center' }}>
      <Link to={`/detail?id=${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} style={{ width: '100%' }} />
        <h4>{pokemon.korean_name}</h4>
      </Link>
      <button onClick={onAdd} disabled={isSelected}>
        {isSelected ? '선택됨' : '추가'}
      </button>
    </div>
  );
}
