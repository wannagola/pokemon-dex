import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  width: 140px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const Name = styled.h3`
  margin: 8px 0 4px;
  font-size: 1rem;
`;

const Type = styled.p`
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: #555;
`;

const AddButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: #0070f3;
  color: white;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;

export default function PokemonCard({ pokemon, selected, onAdd }) {
  return (
    <Card>
      <Link
        to={`/detail?id=${pokemon.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Thumbnail src={pokemon.img_url} alt={pokemon.korean_name} />
        <Name>{pokemon.korean_name}</Name>
      </Link>
      <Type>타입: {pokemon.types.join(", ")}</Type>
      <AddButton onClick={onAdd}>추가</AddButton>
    </Card>
  );
}
