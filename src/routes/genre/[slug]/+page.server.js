import TMDB from "$lib/api/TMDB";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({params, url}) {

    const page = url.searchParams.get('page') || 1;
    const genre = await TMDB.getGenre(params.slug);

    if(genre == null){
        throw error('404', "This genre doesn't exist")
    }

    const movies = await TMDB.getMovieFromGenre(params.slug, page);
    return {movies, genre};
};