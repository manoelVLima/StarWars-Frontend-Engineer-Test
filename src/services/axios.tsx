import axios from "axios";


const baseURL = "https://swapi.dev/";


export async function planets () {
    const getPlanets = axios.get(`${baseURL}/api/planets`);

    return getPlanets;
}

export async function characters () {
    const getCharacters = axios.get(`${baseURL}/api/people`);

    return getCharacters;
}