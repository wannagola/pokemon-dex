export default function PokemonCard({ pokemon, selected, setSelected }) {
  const handleAdd = () => {
    // 1) 중복 검사
    if (selected.some(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    // 2) 최대 6마리 제한
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    // 3) 정상 추가
    setSelected([...selected, pokemon]);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 8, width: 120 }}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} style={{ width: "100%" }} />
      <h3>{pokemon.korean_name}</h3>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}
