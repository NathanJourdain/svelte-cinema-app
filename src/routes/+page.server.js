import TMDB from "$lib/api/TMDB";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const nowPlaying = await TMDB.getNowPlaying()
    const populars = await TMDB.getPopulars()
    
    return {
        nowPlaying: nowPlaying.results.slice(0, 4),
        populars: populars.results.slice(0, 4)
    };
};