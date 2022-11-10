import {PRIVATE_API_KEY_TMDB} from "$env/static/private";
const baseUrl = "https://api.themoviedb.org/3";

export default class TMDB{

    static async getNowPlaying(page = 1){
        const response = await fetch(baseUrl + "/movie/now_playing?page="+page+"&api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }

    static async getPopulars(page = 1){
        const response = await fetch(baseUrl + "/movie/popular?page="+page+"&api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }

    static async getGenres(){
        const response = await fetch(baseUrl + "/genre/movie/list?api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }

    static async getMovieDetails(id){
        const response = await fetch(baseUrl + "/movie/"+id+"?api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }
    
    static async searchMovie(query, page = 1){
        const response = await fetch(baseUrl + "/search/movie?query="+query+"&page="+page+"&api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }

    static async getSimilarMovie(id){
        const response = await fetch(baseUrl + "/movie/"+id+"/similar?api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }

    static async getMovieFromGenre(genre, page = 1){
        const response = await fetch(baseUrl + "/discover/movie?with_genres="+genre+"&page="+page+"&api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data;
    }
    
    static async getGenre(genre){
        const response = await fetch(baseUrl + "/genre/movie/list?api_key=" + PRIVATE_API_KEY_TMDB);
        const data = await response.json();
        return data.genres.filter(el => el.id == genre)[0] || null;
    }
}