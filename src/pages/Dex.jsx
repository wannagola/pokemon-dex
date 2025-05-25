import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

export default function Dex() {
  return (
    <div>
      <h1>Dex</h1>
      <Dashboard />
      <PokemonList />
    </div>
  );
}
