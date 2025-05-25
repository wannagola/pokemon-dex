import React from "react";
import styled from "styled-components";
import { MOCK_DATA } from "../mock.js";
import PokemonCard from "./PokemonCard";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../features/pokemonSlice";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function PokemonList() {
  const selected = useSelector((state) => state.pokemon.selected);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>포켓몬 리스트</h2>
      <ListWrapper>
        {MOCK_DATA.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            selected={selected}
            onAdd={() => dispatch(addPokemon(p))}
          />
        ))}
      </ListWrapper>
    </section>
  );
}
