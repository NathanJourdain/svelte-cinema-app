import TMDB from "$lib/api/TMDB";

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
    const page = url.searchParams.get('page') || 1;
    const nowPlaying = await TMDB.getNowPlaying(page);
    return nowPlaying;
};