'use client';
import CharacterCard from "@/components/CharacterCard";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import { CharacterResponse } from "@/interfaces/ICharacter";
import { getApi } from "@/services/requests";
import updatePageQueryString from "@/utils/updatePageQueryString";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPageParam = searchParams.get('page')
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
    // Faça algo com o valor selecionado, como filtrar uma lista
    console.log('Selected filter:', value);
  };

  const filterOptions = [
    { value: '', label: 'Select an option' },
    { value: 'Name', label: 'Name' },
    { value: 'Homeworld', label: 'Homeworld' },
    { value: 'Age', label: 'Age' },
  ];

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
      <div className="flex w-full justify-between pb-5">
        <Filter
          options={filterOptions}
          selectedValue={selectedFilter}
          onChange={handleFilterChange}
        />
        <button
        type='button'
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Clear All
        </button>
      </div>
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
