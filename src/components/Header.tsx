import { characters } from "@/services/axios";
import { useEffect } from "react";

export default function Header() {

    /*  useEffect(()=> {
    async function teste() {
      const getPlanets = await characters();

      console.log(getPlanets);
      
    }
     teste();
    
  },[])
*/

  return (
    <header id="main-title" className="flex max-h-1-screen flex-col gap-12 items-center justify-between p-20">
    <h1 className="text-5xl text-center text-yellow-500">
      STAR WARS
    </h1>
    <h2 id="second-title" className="font-sans leading-6">
      A long time ago in a galaxy far, <br /> far away ...
    </h2>
</header>
  )
}
