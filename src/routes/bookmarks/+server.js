import TMDB from "$lib/api/TMDB";

export async function GET({ url }) {
  const data = url.searchParams.get("movies")?.split(" ") || [];
  
  let movies = [];
  await Promise.all(
    data.map(async (movie) => {
      const data = await TMDB.getMovieDetails(movie);
      movies.push(data);
    })
  );

  return new Response(JSON.stringify(movies));
}