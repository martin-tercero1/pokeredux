import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useDispatch } from "react-redux";
import { setFavorite } from "@/slices/dataSlice";
// import { setFavorite } from "@/actions";


// TO - DO ADD ABILITIES

function PokemonCard({name, image, types, id, favorite}) {
  const dispatch = useDispatch();

  const typesString = types.map(element => element.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Description about Ditto</CardDescription>
        <ButtonIcon isFavorite={favorite} onClick={handleOnFavorite}/>
      </CardHeader>
      <CardContent>
        <img
          src={image}
          alt={name}
        />
      </CardContent>
      <CardFooter>
        <p>Type(s): {typesString}</p>
      </CardFooter>
    </Card>
  );

}

export default PokemonCard;
