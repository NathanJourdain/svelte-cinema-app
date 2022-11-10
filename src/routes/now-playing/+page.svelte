<script>
    import { page } from '$app/stores';
    import CardMovie from '$lib/components/CardMovie.svelte';

    $:pageNumber = parseInt($page.url.searchParams.get('page')) || 1;

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Now playing</title>
</svelte:head>

<h1>Now playing</h1>

{#if data.results.length > 0 }
<section class="grid">
    {#each data.results as movie}
        <CardMovie {movie}/>
    {/each}
</section>

<div class="paging">
    {#if pageNumber != 1}
        <a href="/now-playing?page={pageNumber-1}"><i class="fa-solid fa-chevron-left"></i></a>
    {/if}
    <p>Page {pageNumber} of {data.total_pages}</p>
    {#if pageNumber < data.total_pages }
        <a href="/now-playing?page={pageNumber+1}"><i class="fa-solid fa-chevron-right"></i></a>
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