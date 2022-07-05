<script lang="ts">
  import Accordion from "../lib/components/Accordion.svelte";
</script>

<ul class="category-list content">
  <li>
    <Accordion title="Titres">
      <ul class="component-list">
        <li>
          <pre class="text-xs">{"<h1>"}</pre>
          <h1>Titre 1</h1>
        </li>
        <li>
          <pre class="text-xs">{"<h2>"}</pre>
          <h2>Titre 2</h2>
        </li>
        <li>
          <pre class="text-xs">{"<h3>"}</pre>
          <h3>Titre 3</h3>
        </li>
        <li>
          <pre class="text-xs">{"<h4>"}</pre>
          <h4>Titre 4</h4>
        </li>
        <li>
          <pre class="text-xs">{"<h5>"}</pre>
          <h5>Titre 5</h5>
        </li>
        <li>
          <pre class="text-xs">{"<h6>"}</pre>
          <h6>Titre 6</h6>
        </li>
      </ul>
    </Accordion>
  </li>
  <li>
    <Accordion title="Boutons">
      <ul class="component-list">
        <li>
          <pre class="text-xs">.btn(.primary)</pre>
          <button class="btn">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.secondary</pre>
          <button class="btn secondary">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.light</pre>
          <button class="btn light">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.light.secondary</pre>
          <button class="btn light secondary">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.outline.light</pre>
          <button class="btn outline light">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.outline.light.secondary</pre>
          <button class="btn outline light secondary">Bouton</button>
        </li>
      </ul>
      <ul class="component-list">
        <li>
          <pre class="text-xs">.btn.rounded</pre>
          <button class="btn rounded">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.outline</pre>
          <button class="btn outline">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.circular</pre>
          <button class="btn circular">+</button>
        </li>
        <li>
          <pre class="text-xs">.btn.circular.outline</pre>
          <button class="btn circular outline">+</button>
        </li>
      </ul>
      <ul class="component-list">
        <li>
          <pre class="text-xs">.btn.btn-xs</pre>
          <button class="btn btn-xs">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.btn-sm</pre>
          <button class="btn btn-sm">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn(.btn-md)</pre>
          <button class="btn btn-md">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.btn-lg</pre>
          <button class="btn btn-lg">Bouton</button>
        </li>
        <li>
          <pre class="text-xs">.btn.btn-xl</pre>
          <button class="btn btn-xl">Bouton</button>
        </li>
      </ul>
    </Accordion>
  </li>
</ul>

<style lang="scss">
  .category-list {
    list-style: none;
  }

  .component-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    column-gap: var(--sp-7);
    row-gap: var(--sp-3);

    &:not(:first-child) {
      margin-top: var(--sp-7);
    }

    li {
      pre {
        color: var(--gray-4);
        margin-bottom: var(--sp-2);
      }

      .btn {
        box-shadow: var(--shadow-md);
        transition: var(--transition);
        &:hover {
          box-shadow: var(--shadow-sm);
        }
      }
    }
  }
</style>
