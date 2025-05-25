import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../features/pokemonSlice";
import { MOCK_DATA } from "../mock.js";

const Wrapper = styled.div`
  padding: 24px;
`;

const Img = styled.img`
  width: 200px;
  display: block;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
`;

const Types = styled.p`
  margin-bottom: 16px;
`;

const Desc = styled.p`
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.remove ? "#e00" : "#0070f3")};
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.remove ? "#c00" : "#005bb5")};
  }
`;

export default function PokemonDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((p) => p.id === id);

  const selected = useSelector((state) => state.pokemon.selected);
  const dispatch = useDispatch();
  const isSelected = selected.some((p) => p.id === id);

  if (!pokemon) return <Wrapper>존재하지 않는 포켓몬입니다.</Wrapper>;

  return (
    <Wrapper>
      <Title>{pokemon.korean_name}</Title>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <Types>타입: {pokemon.types.join(", ")}</Types>
      <Desc>{pokemon.description}</Desc>
      <ButtonGroup>
        {!isSelected ? (
          <ActionButton onClick={() => dispatch(addPokemon(pokemon))}>
            추가
          </ActionButton>
        ) : (
          <ActionButton
            remove
            onClick={() => dispatch(removePokemon(id))}
          >
            삭제
          </ActionButton>
        )}
        <ActionButton onClick={() => navigate(-1)}>뒤로 가기</ActionButton>
      </ButtonGroup>
    </Wrapper>
  );
}
