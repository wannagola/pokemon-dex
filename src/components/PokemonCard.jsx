export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button>추가</button>
    </div>
  );
}
