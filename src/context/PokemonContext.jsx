import React, { createContext, useContext, useState } from "react";

// 1. 컨텍스트 객체 생성
const PokemonContext = createContext();

// 2. Provider 컴포넌트
export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState([]);

  const addPokemon = (pokemon) => {
    if (selected.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

// 3. 커스텀 훅
export function usePokemon() {
  return useContext(PokemonContext);
}
