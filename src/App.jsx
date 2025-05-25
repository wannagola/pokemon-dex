import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";

export default function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}
