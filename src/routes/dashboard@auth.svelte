<script lang="ts">
  import { logout } from "../lib/utils/auth.js";
  import { fetchApi } from "../lib/utils";

  let newRssUrl = "";

  function addRssUrl() {
    console.log("hey ? ");
    fetchApi("/api/rss-feed", { url: newRssUrl }, "POST").then();
  }
</script>

<h1>Dashboard</h1>
<button on:click={logout} class="btn rounded outline">Se déconnecter</button>

<h2>Ajouter un flux RSS</h2>
<form on:submit|preventDefault={addRssUrl}>
  <input type="text" name="rss-url" bind:value={newRssUrl} />
  <input type="submit" value="Ajouter" class="btn">
</form>
