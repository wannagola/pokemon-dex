import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { addPokemon } from "../features/pokemonSlice";
import { MOCK_DATA } from "../mock.js";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  gap: 1.5rem;
  justify-items: center; 
  margin-bottom: 2rem;
`;

export default function PokemonList() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);

  return (
    <ListWrapper>
      {MOCK_DATA.map((p) => (
        <PokemonCard
          key={p.id}
          pokemon={p}
          isSelected={selected.some((s) => s.id === p.id)}
          onAdd={() => dispatch(addPokemon(p))}
        />
      ))}
    </ListWrapper>
  );
}
