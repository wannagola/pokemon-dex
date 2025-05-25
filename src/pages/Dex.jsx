import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
`;

export default function Dex() {
  return (
    <Container>
      <Title>나만의 포켓몬 도감</Title>

      <SectionTitle>선택된 포켓몬</SectionTitle>
      <Dashboard />

      <SectionTitle>포켓몬 리스트</SectionTitle>
      <PokemonList />
    </Container>
  );
}
