<script>
  import { doneCount, todoList } from '../store.js';
  import BackButton from '../components/BackButton.svelte';
  import DoneItem from '../components/DoneItem.svelte';
  const getPagesLength = () => {
    let length = 0;
    if ($doneCount % 10 === 0)
      length += parseInt($doneCount / 10);
    else
      length += parseInt($doneCount / 10) + 1;
    return length;
  }
  let pages = {
    current: 1, 
    length: getPagesLength(),
  };
</script>

<main class="back-wave-bg">
  <BackButton white />
  <h3>
    <img src="/images/heart.png" alt="mini heart" />
    지금까지 
    <span class="count">{$doneCount}개</span>의 할 일을 끝냈습니다. 
    <img src="/images/heart.png" alt="mini heart" />
  </h3>
  <ul class="donelist">
    {#each $todoList as todo}
      {#if todo.finishDate}
        <DoneItem todo={todo.todo} addDate={todo.addDate} finishDate={todo.finishDate} />
      {/if}
    {/each}
  </ul>
  <ul class="pagination">
    {#each Array(pages.length) as _, index (index)}
      {#if index + 1 === pages.current}
        <li class="current">{index + 1}</li>
      {:else}
        <li>{index + 1}</li>
      {/if}
    {/each}
  </ul>
</main>

<style>
  h3 {
    margin: 3rem 0 0;
    color: #296e81;
    font-size: 2.15rem;
    font-weight: normal;
  }
  .count {
    color: #f44186;
  }
  .donelist {
    width: 100%;
    padding: 2.95rem;
    box-sizing: border-box;
  }
  .pagination {
    position: absolute;
    bottom: 0;
    margin: 1.5rem;
    display: flex;
    font-size: 2rem;
    color: #003c72;
  }
  .pagination > li {
    cursor: pointer;
  }
  .pagination > li:hover {
    color: #3798D9;
  }
  .pagination > li.current {
    color: #000;
    font-weight: bolder;
    cursor: default;
  }
</style>