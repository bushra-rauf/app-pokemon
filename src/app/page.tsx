'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { PokemonType } from "@/utils/types";
import { Pokemon } from "@/components/Pokemon";
import { Information } from "@/components/Information";

export default function Home() {
  const [caughtPokemon, setCaughtPokemon] = useState <PokemonType | null>(null)
 

  const fetchPokemon = async(): Promise<void> => {
   try {
    const randomNum: number = Math.floor(Math.random() * 151)
    const API_URL: string = 'https://pokeapi.co/api/v2/pokemon'
    const responce: Response = await fetch(`${API_URL}/${randomNum}`)
    const data = await responce.json();
    const pokemonData: PokemonType = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((item:{type: {name: string; }; }) => item.type.name)
  
  }
    console.log(pokemonData)

    setCaughtPokemon(pokemonData)
  } catch(error){
     console.log(`something went wrong: ${error}`)
  }
  }
  useEffect(() => {
    fetchPokemon()
  },[])

  const handleClick = ():void => {
      fetchPokemon()
  }
  return (
   
    <div className=' bg-blue-200  p-10 grow '>
        <Information/>   
      {caughtPokemon && <Pokemon onHandleClick={handleClick} { ...caughtPokemon}/>}
      

    </div>
  );
}
