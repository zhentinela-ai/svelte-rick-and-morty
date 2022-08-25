<script>
  import Character from "./lib/Character.svelte";

  let characters = [];
  let page = 1;

  async function laodCharacters() {
    const result = await fetch(
      "https://rickandmortyapi.com/api/character?page=" + page
    );
    const data = await result.json();
    characters = data.results;
    console.log(characters);
    return data.results;
  }
  laodCharacters();

  function nextPage() {
    page++;
    laodCharacters();
  }

  function previousPage() {
    page--;
    laodCharacters();
  }
</script>

<h1 class="title">Rick and Morty Svelte</h1>

<div class="container">
  <div class="btns">
    <button class="btn" on:click={previousPage} disabled={page === 1}>Previous</button>
    <button class="btn" on:click={nextPage}>Next</button>
  </div>
  <div class="grid">
    {#each characters as character}
      <Character {character} />
    {/each}
  </div>
</div>
