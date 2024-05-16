import PokemonCard from "./PokemonCard";

function PokemonGrid({pokemonList}) {
  return (
    <section className="grid grid-cols-4 gap-4 m-10">
      {pokemonList?.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </section>
  );
}

// PokemonGrid.defaultProps = {
//     pokemonList: Array(10).fill('')
// }

export default PokemonGrid