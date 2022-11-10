<script>
    import {bookmarks} from "$lib/stores/bookmarks";
    export let movie;
    
    $: bookmark = $bookmarks.includes(movie.id);

    movie.release_date = new Date(movie.release_date).toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'});

    function addBookmark(){
        if(bookmark == true) {
            bookmarks.update(movies => movies.filter(el => el !== movie.id));
        } else {
            bookmarks.update(movies => [...movies, movie.id])
        }
    }

</script>

<a href="/movie/{movie.id}" class="card" style="background-image: url(https://image.tmdb.org/t/p/w300{movie.poster_path});" target="_self">
    <button 
        type="button"
        class:selected={bookmark}
        class="bookmark"
        on:click|preventDefault={addBookmark}
    >
        <i class="fa-solid fa-bookmark"></i>
    </button>
    <div class="content">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
    </div> 
</a>


<style>
    .card{
        width: 100%;
        aspect-ratio: 2 / 3;
        border-radius: 20px;
        background-size: cover;
        display: flex;
        position: relative;
    }
    .content{
        border-radius: 5px 5px 0 0;
        align-self: flex-end;
        background-color: #262429;
        border-radius: 20px;
        width: 100%;
    }
    .content p{
        margin-left: 10px;
    }
    .content p:last-of-type{
        color: #9b9898;
    }

    .bookmark{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        background-color: #262429;
        padding: 20px;
        border: none;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        color: transparent;
        -webkit-text-stroke: 2px #f1f1f1;
        cursor: pointer;
    }
    .bookmark.selected{
        color: #cf552d;
        -webkit-text-stroke: 2px #cf552d;
    }
</style>