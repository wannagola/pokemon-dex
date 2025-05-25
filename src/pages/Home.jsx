import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>나만의 포켓몬 도감</h1>
      <button onClick={() => navigate('/dex')}>시작하기</button>
    </div>
  );
}
