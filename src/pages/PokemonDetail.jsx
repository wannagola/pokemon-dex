import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../features/pokemonSlice";
import { MOCK_DATA } from "../mock.js";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1.5rem; 
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  gap: 1rem;           
  margin-bottom: 1rem;  
`;

const ActionButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: ${(props) => (props.selected ? "#e74c3c" : "#3498db")};
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background: #95a5a6;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;

export default function PokemonDetail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);

  const id = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((p) => p.id === id);
  const isSelected = selected.some((p) => p.id === id);

  const handleClick = () => {
    if (isSelected) dispatch(removePokemon(id));
    else dispatch(addPokemon(pokemon));
  };

  return (
    <Container>
      <Title>{pokemon.korean_name}</Title>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />

      <Description>타입: {pokemon.types.join(", ")}</Description>
      <Description>{pokemon.description}</Description>

      <ButtonGroup>
        <ActionButton selected={isSelected} onClick={handleClick}>
          {isSelected ? "삭제" : "추가"}
        </ActionButton>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
}
