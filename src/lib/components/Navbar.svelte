<script>
    	import { page } from '$app/stores';
</script>

<nav>
    <a href="/" class="logo">Movies</a>
    <a href="/" class:selected={$page.url.pathname === '/'}><i class="fa-solid fa-house"></i>Home</a>
    <a href="/bookmarks" class:selected={$page.url.pathname === '/bookmarks'}><i class="fa-solid fa-bookmark"></i>Bookmarks</a>
</nav>


<style>
    nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #262429;
        gap: 10px;
        padding: 20px 20px;
    }
    .logo{
        font-family: "Ethnocen";
        font-size: clamp(1rem, 3.5vw ,2rem);
        margin-right: auto;
    }

    a{
        color: #f1f1f1;
        text-decoration: none;
        font-family: Lexend;
        font-size: clamp(1rem, 2vw,1.25rem);
        border-radius: 8px;
    }
    a > i{
        margin-right: 1ch;
    }
    a.selected{
        color: #cf552d;
    }
</style>