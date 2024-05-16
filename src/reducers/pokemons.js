import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_POKEMONS } from '../actions/types';

const initialState = fromJS({
    pokemonList: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            // return {...state, pokemonList: action.payload}
            return state.setIn(['pokemonList'], fromJS(action.payload));
        case SET_FAVORITE: {
          // const newPokemonList = [...state.pokemonList];
          const currentPokemonIndex = state
            .get("pokemonList")
            .findIndex((pokemon) => {
              return pokemon.get("id") === action.payload.pokemonId;
            });

          if (currentPokemonIndex < 0) {
            return state;
          }

          // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;

          const isFavorite = state.getIn([
            "pokemonList",
            currentPokemonIndex,
            "favorite",
          ]);
          return state.setIn(
            ["pokemonList", currentPokemonIndex, "favorite"],
            !isFavorite
          );
        }
        default:
            return state;
    }
}