import React from "react";
import styled from "styled-components";
import { MOCK_DATA } from "../mock.js";
import PokemonCard from "./PokemonCard";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function PokemonList({ selected, setSelected }) {
  return (
    <section>
      <h2>포켓몬 리스트</h2>
      <ListWrapper>
        {MOCK_DATA.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ListWrapper>
    </section>
  );
}
