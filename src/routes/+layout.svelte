<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Searchbar from "$lib/components/Searchbar.svelte";
</script>

<div class="container">
    <header>
        <Navbar />
    </header>
    <main>
        <Searchbar />
        <slot></slot>
    </main>
    <footer>
        
    </footer>
</div>


<style>
    main{
        padding: 30px;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>

