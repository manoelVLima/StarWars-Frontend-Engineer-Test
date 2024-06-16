"use client";

import { planets } from "@/services/axios";
import { useEffect } from "react";

export default function Home() {

useEffect(() => {
  const getPlanets = async () => {
    const planeyas = await planets();
    console.log(planeyas);
    
    return planeyas;
  }

  getPlanets();
},[])
  

  return (
    <main id="main-title" className="flex min-h-screen text-2xl flex-col items-center justify-between p-24">
        Star Wars App
    </main>
  );
}
