import axios from "axios";

export const getPokemon = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        return response.data.results;
    } catch(error) {
        console.error(`There was an error ${error}}`);
    }
}

export const getPokemonDetails = async (pokemon) => {
        try {
          const response = await axios.get(pokemon.url);
          return response.data;
        } catch (error) {
          console.error(`There was an error ${error}}`);
        }
}