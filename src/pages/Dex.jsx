import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

export default function Dex() {
  // ① 선택된 포켓몬을 담을 state
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Dex</h1>
      {/* ② Dashboard와 PokemonList에 모두 전달 */}
      <Dashboard selected={selected} setSelected={setSelected} />
      <PokemonList selected={selected} setSelected={setSelected} />
    </div>
  );
}
