import {  Person } from "@/interfaces/ICharacter";
import { getApi } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

interface ICharacterCardProps {
  character: Person;
}
export default function CharacterCard({character}:ICharacterCardProps) {

  const { data:PlanetData, isLoading } = useQuery({ queryKey: ['getPlanet',character.name], queryFn: async () =>{
    const results = await getApi<Planet>(`${character.homeworld}`);

    return results;
  }  })

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://picsum.photos/400/400" alt="Personagem 1" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{character.name}</h2>
              <p className="text-gray-700">{PlanetData?.name}</p>
            </div>
          </div>
  )
}
