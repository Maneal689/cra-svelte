<script lang="ts">
  import heightToggle from "../transitions/heightToggle";

  export let title = "";
  let open = true;
</script>

<div class="accordion">
  <div class="accordion__toggle text-3xl" class:open on:click={() => (open = !open)}>
    {title}
  </div>
  {#if open}
    <p class="accordion__content" transition:heightToggle="{{ duration: 230 }}">
      <slot />
    </p>
  {/if}
</div>

<style lang="scss">
  .accordion {
    width: 100%;

    .accordion__toggle {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: var(--sp-2) var(--sp-1);
      border-bottom: 1px solid var(--gray-3);

      &::after {
        display: block;
        content: "";

        position: absolute;
        right: 0.75rem;
        top: 50%;

        width: 0.75rem;
        aspect-ratio: 1/1;
        border-left: 1px solid var(--black);
        border-top: 1px solid var(--black);
        transition: var(--transition);
        transform: translateY(-50%) rotate(45deg);
      }

      &.open::after {
        transform: translateY(-50%) rotate(calc(-45deg - 90deg));
      }
    }

    .accordion__content {
      overflow: hidden;
      padding: var(--sp-4) var(--sp-6);
    }
  }
</style>
