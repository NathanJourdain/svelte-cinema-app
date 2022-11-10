<script>
    import CardMovie from '$lib/components/CardMovie.svelte';
    import {bookmarks} from '$lib/stores/bookmarks';

    export let data;
    const {movie, similar} = data;

    $: bookmark = $bookmarks.includes(movie.id);

    movie.release_date = new Date(movie.release_date).toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'});

    function intToString (value) {
        value = value.toString();
        const split = value.split("");  
        split.reverse();
        for(let i = 3; i < split.length; i+=4){
            split.splice(i, 0, ' ');
        }
        split.reverse();
        return split.join('');
    }

    function addBookmark(){
        if(bookmark == true) {
            bookmarks.update(movies => movies.filter(el => el !== movie.id));
        } else {
            bookmarks.update(movies => [...movies, movie.id])
        }
    }

</script>

<svelte:head>
    <title>{movie.title}</title>
</svelte:head>

<article>

    <img src="https://image.tmdb.org/t/p/w1280{movie.backdrop_path}" alt="Banner of {movie.title}" class="banner">

    <section class="title">
        <h1>{movie.title}</h1>
        <ul class="genres-list">
            {#each movie.genres as genre}
            <li><a href="/genre/{genre.id}" class="pill">{genre.name}</a></li>
            {/each}
        </ul>
        <button 
            type="button"
            class:selected={bookmark}
            class="bookmark"
            on:click|preventDefault={addBookmark}
        >
            <i class="fa-solid fa-bookmark"></i>
        </button>
    </section>

    <div class="content">
        
        <section>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
        </section>

        <section>
            <h2>Produced by</h2>
            <ul class="list">
            {#each movie.production_companies as company}
                <li>{company.name}</li>
            {/each}
            </ul>
        </section>

        <section>
            <h2>Informations</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Budget</td>
                        <td>{intToString(movie.budget)}$</td>
                    </tr>
                    <tr>
                        <td>Revenue</td>
                        <td>{intToString(movie.revenue)}$</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>{movie.runtime} min</td>
                    </tr>
                    <tr>
                        <td>Vote average</td>
                        <td>{movie.vote_average} / 10</td>
                    </tr>
                    <tr>
                        <td>Release date</td>
                        <td>{movie.release_date}</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </section>

    </div>

    <img src="https://image.tmdb.org/t/p/w300{movie.poster_path}" alt="Poster of {movie.title}" class="poster">
</article>
<aside>
    <h2>Similar movies</h2>
    <div class="grid">
        {#each similar as movie}
            <CardMovie {movie} />
        {/each}
    </div>
</aside>

<style>
    article{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
    }


    .banner{
        grid-column: 1 / 4;
        grid-row: 1 / 3;
        aspect-ratio: 4 / 1.5;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .poster{
        grid-column: 3 / 4;
        grid-row: 3 / 5;
        border-radius: 20px;
        width: 100%;
        aspect-ratio: 1 / 1.5;

        margin-top: 30px;
        position: sticky;
        top: 30px;
    }
    .title{
        grid-column: 1 / 3;
        grid-row: 3 / 4;
        position: relative;
    }
    .title h1{
        margin-bottom: 0;
    }    
    .genres-list{
        list-style: none;
        padding: 0;
    }
    .genres-list li{
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 15px;
    }
    .genres-list a{
        background-color: #cf552d;
        padding: 5px 10px;
        border-radius: 99px;
    }
    
    .content{
        grid-column: 1 / 3;
    }

    .bookmark{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        background-color: #262429;
        padding: 20px;
        border: none;
        border-bottom-left-radius: 20px;
        color: transparent;
        -webkit-text-stroke: 2px #f1f1f1;
        cursor: pointer;
    }
    .bookmark.selected{
        color: #cf552d;
        -webkit-text-stroke: 2px #cf552d;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
        width: 100%;
    }
</style>