import { Character } from '@/interfaces/ICharacter';
import { Planet } from '@/interfaces/IPlanet';
import { getApi } from '@/services/requests';
import { useQuery } from '@tanstack/react-query';

export interface ICharacterCardProps {
  character: Character;
  index: number;
}

export default function CharacterCard({ character }: ICharacterCardProps) {
  const { data: PlanetData } = useQuery({
    queryKey: ['getPlanet', character.name],
    queryFn: async () => {
      const results = await getApi<Planet>(`${character.homeworld}`);

      return results;
    }
  });

  return (
    <div className="bg-white rounded-sm shadow-md overflow-hidden">
      <img //sadly the API does not allow me to use Image from Next
        loading="lazy"
        className="w-full h-48"
        src={`https://picsum.photos/300/300?random=${character.name}`}
        alt={character.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{character.name}</h2>
        <h3 className="text-gray-700 font-medium">{PlanetData?.name}</h3>
        <div className="text-gray-500 pt-2 text-sm">
          <p>HEIGHT - {character.height}</p>
          <p>MASS - {character.mass}</p>
          <p>GENDER - {character.gender}</p>
        </div>
      </div>
    </div>
  );
}
