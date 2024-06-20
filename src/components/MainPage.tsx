'use client';
import CharacterCard from "@/components/CharacterCard";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import SkeletonLoading from "@/components/SkeletonLoading";
import TextInput from "@/components/TextInput";
import { Character, CharacterResponse } from "@/interfaces/ICharacter";
import { getApi } from "@/services/requests";
import updatePageQueryString from "@/utils/updatePageQueryString";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";



export default function MainPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPageParam = searchParams.get('page')
  const currentPage = currentPageParam ? parseInt(currentPageParam) : 1
  const [selectedFilter, setSelectedFilter] = useState<string>('name');
  const [inputValue, setInputValue] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
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
      console.log(charactersWithHomeworld);
      return charactersWithHomeworld;
    }
  });
  const filteredList = listOfCharacters?.filter((character)=> character[selectedFilter as keyof Character]?.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <Suspense>
    <div className="mx-auto p-4">
      <div className="flex w-full justify-between pb-5">
      <div className="flex flex-col w-full gap-2 justify-start md:flex-row md:items-center">
        <h1 className="font-medium">Filter By</h1>
        <Filter
          selectedValue={selectedFilter}
          onChange={handleSelectChange}
        />
        <TextInput
          onChange={handleInputChange}
          value={inputValue}
        />
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 w-full md:w-auto"
        >
          Clear All
        </button>
      </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          isLoading ? Array.from({ length: 10 }).map((element, index)=> <SkeletonLoading key={index} />) :
          filteredList?.map((character,index)=>(
            <CharacterCard key={index} character={character}/>
          ))
        }
      </div>
      <div>
        <Pagination currentPage={currentPage} handlePageChange={handleUpdatePage} />
      </div>
  </div>
  </Suspense>
  )
}

