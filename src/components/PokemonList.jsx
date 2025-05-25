import { MOCK_DATA } from "../mock.js";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ selected, setSelected }) {
  return (
    <div>
      <h2>포켓몬 리스트</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {MOCK_DATA.map(p => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
}
