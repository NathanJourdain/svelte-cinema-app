<script>
    import { page } from '$app/stores';
    import CardMovie from '$lib/components/CardMovie.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    $:pageNumber = parseInt($page.url.searchParams.get('page')) || 1;
    
</script>

<svelte:head>
    <title>{data.genre.name}</title>
</svelte:head>

<h1>Genre <em>{data.genre.name}</em></h1>

<section class="grid">
    {#each data.movies.results as movie}
        <CardMovie {movie}/>
    {/each}
</section>

<div class="paging">
    {#if pageNumber != 1}
        <a href="/genre/{data.genre.id}&page={pageNumber-1}"><i class="fa-solid fa-chevron-left"></i></a>
    {/if}
    <p>Page {pageNumber} of {data.movies.total_pages}</p>
    {#if pageNumber < data.movies.total_pages }
    <a href="/genre/{data.genre.id}&page={pageNumber+1}"><i class="fa-solid fa-chevron-right"></i></a>
    {/if}
</div>


<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
    }

</style>