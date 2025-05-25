import { MOCK_DATA } from "../mock.js";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  return (
    <div>
      <h2>포켓몬 리스트</h2>
      <div>
        {MOCK_DATA.map(p => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
