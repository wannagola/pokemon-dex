import React from "react";
import styled from "styled-components";
import { MOCK_DATA } from "../mock.js";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function PokemonList() {
  const { selected, addPokemon } = usePokemon();

  return (
    <section>
      <h2>포켓몬 리스트</h2>
      <ListWrapper>
        {MOCK_DATA.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            selected={selected}
            onAdd={() => addPokemon(p)}
          />
        ))}
      </ListWrapper>
    </section>
  );
}
