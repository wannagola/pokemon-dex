import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../mock.js';

export default function PokemonDetail() {
  const [qs] = useSearchParams();
  const id = Number(qs.get('id'));
  const pokemon = MOCK_DATA.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!pokemon) return <p>존재하지 않는 포켓몬입니다.</p>;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} style={{ width: 200 }} />
      <p>타입: {pokemon.types.join(', ')}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}
