'use client';
import CharacterCard from "@/components/CharacterCard";
import { PeopleResponse } from "@/interfaces/ICharacter";
import { getApi } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export default function Characters() {

  const { data:listOfCharacters, isLoading } = useQuery({ queryKey: ['getCharacters'], queryFn: async () =>{
    const { results } = await getApi<PeopleResponse>('https://swapi.dev/api/people/?page=2');

    return results;
  }  })
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          listOfCharacters?.map((character,index)=>(
            <CharacterCard character={character}/>
          ))
        }
      </div>
  </div>
  )
}
