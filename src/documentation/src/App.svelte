<script lang="ts">
	import About from './routes/about.svelte';
	import { Router, Route, Link } from "svelte-navigator";
	import MenuComponent from './components/Menu/MenuComponent.svelte';
  import ContentComponent from './components/Content/ContentComponent.svelte';
  import Admin from './routes/Admin.Routes.svelte';

</script>

<Router>
  <MenuComponent />

  <main>

    <Route path="/" primary={true}>
      <ContentComponent />
    </Route>

    <Route path="/admin" primary={false}>
      <Admin />
    </Route>


    <Route path="/usuarios" primary={false}>
      <About />
    </Route>

  </main>
</Router>

<style>
  main {
    width: 86vw;
    position: absolute;
    right: 0;
    color: #35343D;
  }

</style>