'use client';
import { useEffect, useState } from "react";
import { getApi } from "@/services/axios";
import { AxiosResponse } from "axios";

export default function Planets() {
  const [listOfPlanets, setListOfPlanets] = useState<AxiosResponse>();

  useEffect(() =>{
    const getData = async () => {
      const response = await getApi('api');      

      setListOfPlanets(response)
      return response;
    }
    getData();
  },[])
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        teste
      </div>
  </div>
  )
}
