'use client';
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import { CharacterResponse } from "@/interfaces/ICharacter";
import { getApi } from "@/services/requests";
import updatePageQueryString from "@/utils/updatePageQueryString";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPageParam = searchParams.get('page')
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1

  const handleUpdatePage = (page:number | null | string) => {
    const newUrl = updatePageQueryString(searchParams, pathname, page);
    
    router.replace(newUrl);
  };
  const { data:listOfCharacters, isLoading } = useQuery({ queryKey: ['getCharacters', currentPage], queryFn: async () =>{
    const { results } = await getApi<CharacterResponse>(`https://swapi.dev/api/people/?page=${currentPage}`);

    return results;
  }  })

  return (
    <div className="mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          listOfCharacters?.map((character,index)=>(
            <CharacterCard key={index} index={index} character={character}/>
          ))
        }
      </div>
      <div>
        <Pagination currentPage={currentPage} handlePageChange={handleUpdatePage} />
      </div>
  </div>
  )
}
