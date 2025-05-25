export default function Dashboard({ selected, setSelected }) {
  const handleRemove = id => {
    setSelected(selected.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>선택된 포켓몬</h2>
      <div style={{ display: "flex", gap: 12 }}>
        {selected.length === 0 && <p>선택된 포켓몬이 없습니다.</p>}
        {selected.map(p => (
          <div key={p.id} style={{ textAlign: "center" }}>
            <img src={p.img_url} alt={p.korean_name} style={{ width: 60 }} />
            <p>{p.korean_name}</p>
            <button onClick={() => handleRemove(p.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}
