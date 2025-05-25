import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokeball from "../assets/pika.png"; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #ffffff;
`;

const Hero = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const StartButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  background: linear-gradient(90deg, #f8e71c, #7ed321);
  border: none;
  border-radius: 999px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Hero src={pokeball} alt="Pikachu" />
      <Title>나만의 포켓몬 도감</Title>
      <StartButton onClick={() => navigate("/dex")}>
        시작하기
      </StartButton>
    </Wrapper>
  );
}
