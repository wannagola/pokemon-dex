// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";

// ★ react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {/* 토스트 컨테이너를 루트에 한 번만 배치 */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </PokemonProvider>
  );
}
