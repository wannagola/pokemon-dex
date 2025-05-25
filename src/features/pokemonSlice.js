import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const STORAGE_KEY = "my-pokemon-dex-selected";

const initialState = {
  selected: (() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  })(),
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon(state, action) {
      const pokemon = action.payload;
      if (state.selected.some((p) => p.id === pokemon.id)) {
        toast.error("이미 선택된 포켓몬입니다.");
        return;
      }
      if (state.selected.length >= 6) {
        toast.error("더 이상 선택할 수 없습니다.");
        return;
      }
      state.selected.push(pokemon);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selected));
      toast.success(`${pokemon.korean_name} 추가되었습니다!`);
    },
    removePokemon(state, action) {
      state.selected = state.selected.filter((p) => p.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selected));
      toast.success("포켓몬이 삭제되었습니다.");
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
