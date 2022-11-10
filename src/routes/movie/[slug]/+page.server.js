import TMDB from "$lib/api/TMDB";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const movie = await TMDB.getMovieDetails(params.slug);
    const similar = await TMDB.getSimilarMovie(params.slug);
    return {
        movie: movie,
        similar : similar.results.splice(0, 4)
    };
};