<script>
    import CardMovie from "$lib/components/CardMovie.svelte";
    export let data;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section class="card-container">
    <h2>Now playing</h2>
    <div class="cards">
        {#each data.nowPlaying as movie}
            <CardMovie {movie}/>
        {/each}
    </div>
    <a href="/now-playing">View all <i class="fa-solid fa-chevron-right"></i></a>
</section>

<section class="card-container">
    <h2>Populars</h2>
    <div class="cards">
        {#each data.populars as movie}
            <CardMovie {movie}/>
        {/each}
    </div>
    <a href="/populars">View all <i class="fa-solid fa-chevron-right"></i></a>
</section>


<style>
    .card-container{
        display: grid;
        grid-row-gap: 10px;
        grid-template-areas: "h2 link" "cards cards";
        margin-bottom: 50px;
    }
    .card-container > h2{
        grid-area: h2;
    }
    .card-container > .cards{
        grid-area: cards;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 30px;
    }
    .card-container > a{
        grid-area: link;
        align-self: center;
        justify-self: right;
        padding: 15px;
        border-radius: 8px;
        background-color: #262429;
        width: max-content;

    }
</style>