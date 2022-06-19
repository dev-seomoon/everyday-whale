<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import Whale from './pages/Whale.svelte';
  import Todo from './pages/Todo.svelte';
  import Setting from './pages/Setting.svelte';
  import Start from './pages/Start.svelte'
</script>

  <Router routes={{
    '/': Home,
    '/whale': Whale,
    '/todo': Todo,
    '/setting': Setting,
    '/start': Start,
  }} />

<style>


</style>