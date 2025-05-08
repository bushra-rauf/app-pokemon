export type PokemonType = {
    id: number,
    name: string,
    image: string,
    types: string [],
}

export type PokemonProps = PokemonType & {
    onHandleClick: () => void;
  };