<script>
    import { browser } from '$app/environment';
    import {bookmarks} from '$lib/stores/bookmarks';
    import CardMovie from '$lib/components/CardMovie.svelte';


    let movies = [];
    if(browser && $bookmarks.length > 0){
        fetch(`/bookmarks?movies=${$bookmarks.join('+')}`)
        .then(res => res.json())
        .then(data => movies = data);
    }
</script>

<svelte:head>
    <title>Bookmarks</title>
</svelte:head>

<h1>Your bookmarks</h1>

{#if $bookmarks.length == 0}
<p>You don't have bookmark for the moment !</p>
{:else}
<section class="grid">
    {#each movies as movie}
        <CardMovie {movie}/>
    {/each}
</section>
{/if}

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 30px;
    }

</style>