import Image from "next/image";
import { PokemonProps } from "@/utils/types";
export const Pokemon = ({id, name, image, types, onHandleClick }: PokemonProps) => {
    return(
        <>
        <div className=" m-6 p-5 rounded-2xl  flex flex-col items-center border-2  border-indigo-900 box-content xs:size-90 justify-center mx-auto">
          <div className="bg-gray-900 text-white w-full flex justify-between p-8 rounded-xl">
           <p > Id: {id} </p>
           <p className="font-Honk "> Name: {name} </p>
           </div>
           <Image src={image} alt={name} width={200} height={100}/> 
           <p>Type: {types}</p>
        </div>
        <div className="flex justify-center ">
           <button onClick={()=>onHandleClick()}className='m-4 bg-emerald-300 border-2 ame="px-4 py-2 text-black rounded-md hover:bg-emerald-600 transition  w-40 cursor-pointer'>Next Pokemon</button>
        </div>
        </>
    )
}