<script lang="ts">
  import { signin, signup } from "$lib/utils/auth";
  import { signinWithGoogle } from "$lib/utils/auth";
  import { loading, user } from "../lib/stores/user";
  import { goto } from "$app/navigation";

  let mail = "";
  let password = "";
  let error = null;

  $: {
    if (typeof window !== "undefined" && !$loading && $user) {
      goto("/dashboard");
    }
  }

  function submit(login: boolean) {
    if (login) {
      // Connexion
      signin(mail, password).catch((e) => {
        error = e;
      });
    } else {
      // Inscription
      signup(mail, password).catch((e) => {
        error = e;
      });
    }
  }
</script>

<div>
  <h1>Page de connexion</h1>
  <form action="">
    <label>
      Email:
      <input type="email" name="email" bind:value={mail} />
    </label>
    <label>
      Mot de passe:
      <input type="password" name="password" bind:value={password} />
    </label>
    <input type="submit" value="Se connecter" on:click|preventDefault={() => submit(true)} />
    ou
    <input type="submit" value="S'inscrire" on:click|preventDefault={() => submit(false)} />
  </form>
  OU
  <button on:click={signinWithGoogle}>Se connecter avec google</button>
  <a href="/forgot-password">Mot de passe oublié ?</a>
</div>
