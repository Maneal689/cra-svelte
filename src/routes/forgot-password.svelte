<script lang="ts">
  import { sendPasswordResetMail } from "../lib/utils/auth";

  let mail = "";
  let mailSent = false;

  function resetPassword() {
    sendPasswordResetMail(mail).then(() => {
      mailSent = true;
    });
  }
</script>

<h1>Mot de passe oublié</h1>
<form on:submit|preventDefault={resetPassword}>
  <input type="text" name="email" bind:value={mail} />
  <input type="submit" value="Valider" />
</form>

{#if mailSent}
  <p>Un mail vous a été envoyé pour réinitialiser votre mot de passe.</p>
{/if}
