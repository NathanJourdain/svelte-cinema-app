import TMDB from "$lib/api/TMDB";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
    if(url.searchParams.has('query') == false){
        throw redirect('301', '/');
    }

    const page = url.searchParams.get('page') || 1;
    const movies = await TMDB.searchMovie(url.searchParams.get('query'), page);
    return movies;
};