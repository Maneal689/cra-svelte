<script lang="ts">
  import { loading, user } from "../lib/stores/user";
  import { goto } from "$app/navigation";

  $: {
    if (typeof window !== "undefined" && !$user && !$loading) goto("/login");
  }
</script>

{#if !$loading && $user}
  <slot />
{/if}
