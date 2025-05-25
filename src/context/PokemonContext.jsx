import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "my-pokemon-dex-selected";
const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    } catch {}
  }, [selected]);

  const addPokemon = (pokemon) => {
    if (selected.some((p) => p.id === pokemon.id)) {
      toast.error("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      toast.error("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected((prev) => [...prev, pokemon]);
    toast.success(`${pokemon.korean_name} 추가되었습니다!`);
  };

  const removePokemon = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
    toast.success("포켓몬이 삭제되었습니다.");
  };

  return (
    <PokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
