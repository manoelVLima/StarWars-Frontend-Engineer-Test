import axios from "axios";


const baseURL = "https://swapi.dev/";


export async function planets () {
    const getPlanets = axios.get(`${baseURL}/api/planets`);

    return getPlanets;
}