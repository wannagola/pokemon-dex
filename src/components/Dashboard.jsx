import React from 'react';

export default function Dashboard({ selected, removePokemon }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <h2>선택된 포켓몬</h2>
      {selected.length === 0 ? (
        <p>아직 선택된 포켓몬이 없습니다.</p>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {selected.map((p) => (
            <div key={p.id} style={{ textAlign: 'center' }}>
              <img src={p.img_url} alt={p.korean_name} width={64} />
              <div>{p.korean_name}</div>
              <button onClick={() => removePokemon(p.id)}>삭제</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
