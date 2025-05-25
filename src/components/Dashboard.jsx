import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../features/pokemonSlice";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Card = styled.div`
  text-align: center;
`;

const Thumb = styled.img`
  width: 64px;
  height: auto;
  display: block;
  margin: 0 auto 0.5rem;
`;

const Name = styled.div`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Dashboard() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);

  return (
    <Wrapper>
      <Grid>
        {selected.map((p) => (
          <Card key={p.id}>
            <Thumb src={p.img_url} alt={p.korean_name} />
            <Name>{p.korean_name}</Name>
            <Button onClick={() => dispatch(removePokemon(p.id))}>
              삭제
            </Button>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}
