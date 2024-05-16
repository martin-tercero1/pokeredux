import { getPokemon, getPokemonDetails } from "@/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemonList: [],
}

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonWithDetails',
  async (_, { dispatch }) => {
    // dispatch loader
    dispatch(setLoading(true))
    // fetch
    const pokemonRes = await getPokemon();
    const pokemonDetails = await Promise.all(
      pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    // dispatch loader
    dispatch(setPokemonList(pokemonDetails))
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload
        },
        setFavorite: (state, action) => {
          const currentPokemonIndex = state.pokemonList
            .findIndex((pokemon) => {
              return pokemon.id === action.payload.pokemonId;
            });

          if (currentPokemonIndex >= 0) {
            const isFavorite = state.pokemonList[currentPokemonIndex].favorite;
            state.pokemonList[currentPokemonIndex].favorite = !isFavorite;
          }
        }
    },
});

export const {
    setPokemonList,
    setFavorite
} = dataSlice.actions;

export default dataSlice.reducer;