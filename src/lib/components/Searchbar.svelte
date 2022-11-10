<form method="GET" action="/search">
    <label for="search-input">Search a movie</label>
    <input type="text" name="query" id="search-input" placeholder="Search a movie..." required>
    <button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>
</form>


<style>
    form{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;
        margin-bottom: 20px;
    }
    label{
        display: none;
    }
    input{
        width: 100%;
        box-sizing: border-box;
        background-color: #2d2e33;
        border: none;
        padding: 10px;
        font-family: Lexend;
        border-radius: 8px;
        font-size: 1.25rem;
        color: #f1f1f1;
    }
    input:focus{
        outline: 2px solid #cf552d;
    }
    button{
        background-color: #cf552d;
        border: none;
        aspect-ratio: 1 / 1;
        height: 100%;
        border-radius: 8px;
        font-size: 1rem;
        align-self: center;
        cursor: pointer;
    }
</style>