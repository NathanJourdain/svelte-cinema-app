<script>
    import { page } from '$app/stores';
    import CardMovie from '$lib/components/CardMovie.svelte';

    $:pageNumber = parseInt($page.url.searchParams.get('page')) || 1;
    const query = $page.url.searchParams.get('query');

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Search {query}</title>
</svelte:head>

<h1>Results for <em>{query}</em></h1>

{#if data.results.length > 0 }
<section class="grid">
    {#each data.results as movie}
        <CardMovie {movie}/>
    {/each}
</section>

<div class="paging">
    {#if pageNumber != 1}
        <a href="/search?query={query}&page={pageNumber-1}"><i class="fa-solid fa-chevron-left"></i></a>
    {/if}
    <p>Page {pageNumber} of {data.total_pages}</p>
    {#if pageNumber < data.total_pages }
        <a href="/search?query={query}&page={pageNumber+1}"><i class="fa-solid fa-chevron-right"></i></a>
    {/if}
</div>
{:else}
    <p>No movie found</p>
{/if}

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
    }

</style>