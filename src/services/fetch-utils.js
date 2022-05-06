import { client } from './client.js';

export async function fetchAllBirds() {
    const response = await client
        .from('Birds')
        .select('*')

    return response.body;
}

export async function fetchAllPlants() {
    const response = await client
        .from('Plants')
        .select('*')

    return response.body;
}

export async function fetchAllBooks() {
    const response = await client
        .from('Books')
        .select('*')

    return response.body;
}

export async function fetchAllPlanets() {
    const response = await client
        .from('Planets')
        .select('*')

    return response.body;
}