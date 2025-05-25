import React from 'react';
import PokemonCard from './PokemonCard';
import { MOCK_DATA } from '../mock.js';

export default function PokemonList({ selected, addPokemon }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      {MOCK_DATA.map((p) => (
        <PokemonCard
          key={p.id}
          pokemon={p}
          isSelected={!!selected.find((x) => x.id === p.id)}
          onAdd={() => addPokemon(p)}
        />
      ))}
    </div>
  );
}
