import { useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
// import { getPokemon, getPokemonDetails } from "./api";
// import {
//   setPokemons as setPokemonList,
//   getPokemonWithDetails,
//   setLoading,
// } from "./actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Spinner } from "./components/ui/spinner";
import "./App.css";
import { fetchPokemonWithDetails } from "./slices/dataSlice";
// function App({pokemonList, setPokemonList}) { - We will use redux with hooks
function App() {
  // we will use redux
  // const [pokemonList, setPokemonList] = useState(null)

  // const pokemonList = useSelector((state) => state.getIn(['data','pokemonList'], shallowEqual)).toJS();
  const pokemonList = useSelector((state) => state.data.pokemonList, shallowEqual);
  const dispatch = useDispatch();

  // const loading = useSelector((state) => state.getIn(['iu', 'loading']));
  const loading = useSelector((state) => state.ui.loading)  

  useEffect(() => {
    // this does not have to be async because it is alrady handled in the thunk
    // const fetchPokemons = async () => {
    //   dispatch(setLoading(true));
    //   const pokemonsResponse = await getPokemon();
    //   dispatch(getPokemonWithDetails(pokemonsResponse));
    //   dispatch(setLoading(false));
    // }
    // fetchPokemons();
    dispatch(fetchPokemonWithDetails())

    return () => {
      console.log("Component unmounted");
    };
  }, [])
  

  return (
    <Layout>
      <Header />
      {loading ? (
        <Spinner show={loading} size="medium" />
      ) : (
        <PokemonGrid pokemonList={pokemonList} />
      )}
    </Layout>
  );
}

// Receives the state and returns an object, which props will be obtained by props
// const mapStateToProps = (state) => ({
//   pokemonList: state.pokemonList
// });

// // Receives the dispatcher, returns an object that will be mapped to props,but with the action creators.
// const mapDispatchToProps = (dispatch) => ({
//   setPokemonList: (value) => dispatch(setPokemonsActions(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
