'use client';
import CharacterCard from "@/components/CharacterCard";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import TextInput from "@/components/TextInput";
import { Character, CharacterResponse } from "@/interfaces/ICharacter";
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
  const [selectedFilter, setSelectedFilter] = useState<string>('name');
  const [inputValue, setInputValue] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedFilter(value);
    // Faça algo com o valor selecionado, como filtrar uma lista
    console.log('Selected filter:', value);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    // Faça algo com o valor selecionado, como filtrar uma lista
    console.log('Selected filter:', value);
  };

  

  const handleUpdatePage = (page:number | null | string) => {
    const newUrl = updatePageQueryString(searchParams, pathname, page);
    
    router.replace(newUrl);
  };
  const { data: listOfCharacters, isLoading } = useQuery({
    queryKey: ['getCharacters', currentPage],
    queryFn: async () => {
      const { results } = await getApi<CharacterResponse>(`https://swapi.dev/api/people/?page=${currentPage}`);
      const charactersWithHomeworld = await Promise.all(
        results.map(async (character) => {
          const homeworld = await getApi<{ name: string }>(character.homeworld);
          return { ...character, planet: homeworld.name };
        })
      );      
      return charactersWithHomeworld;
    }
  });


  const filteredList = listOfCharacters?.filter((character)=> character[selectedFilter as keyof Character]?.toLowerCase().includes(inputValue.toLowerCase()))
  console.log(filteredList);
  
  return (
    <div className="mx-auto p-4">
      <div className="flex w-full justify-between pb-5">
        <div className="flex w-full gap-2 items-center justify-start">
          <Filter
            selectedValue={selectedFilter}
            onChange={handleSelectChange}
          />
          <TextInput onChange={handleInputChange} value={inputValue} />
          <button
          type='button'
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          filteredList?.map((character,index)=>(
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
