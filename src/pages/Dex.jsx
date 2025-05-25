import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

export default function Dex() {
  // 상태는 오직 여기서만 관리
  const [selected, setSelected] = useState([]);

  const addPokemon = (p) => {
    if (selected.find((x) => x.id === p.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (selected.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setSelected((s) => [...s, p]);
  };

  const removePokemon = (id) => {
    setSelected((s) => s.filter((x) => x.id !== id));
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <h1>Dex</h1>
      <Dashboard selected={selected} removePokemon={removePokemon} />
      <hr />
      <PokemonList selected={selected} addPokemon={addPokemon} />
    </div>
  );
}
