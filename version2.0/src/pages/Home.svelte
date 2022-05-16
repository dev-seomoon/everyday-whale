<script>
  import { nanoid } from 'nanoid';
  import { todoList } from '../store.js';
  import Nav from '../components/Nav.svelte';
  import TodoItem from '../components/TodoItem.svelte';
  import MainWhale from '../components/MainWhale.svelte';

  let todoValue = '';

  const addTodo = (e) => {
    e.preventDefault();
    todoList.set([...$todoList, {
      id: nanoid(),
      todo: todoValue,
      isChecked: false,
      addDate: new Date().toISOString().slice(0, 10),
      finishDate: null,
    }]);
    todoValue = '';
  };
</script>

<main>
  <Nav />
  <MainWhale />
  <section class="main-todo">
    <ul>
      {#each $todoList as todo}
        <TodoItem todo={todo} />
      {/each}
    </ul>
    <form class="todo-box" on:submit={addTodo} >
      <input type="text" placeholder="새로운 할 일" bind:value={todoValue} />
      <button type="button" on:click={addTodo} />
    </form>
  </section>
</main>

<style>
  /* container */
  main { 
    background: white url('/images/background.png') no-repeat; 
  }

  /* todoList */
  .main-todo {
    width: 100%;
    position: absolute;
    top: 615px;
    padding: 0 3rem 3rem;
    box-sizing: border-box;
  }

  button {
    width: 25px;
    height: 25px;
    background: url('/images/plus.png') no-repeat transparent;
    background-size: 25px;
  }

  input {
    width: 80%;
    font-size: 1.56rem;
    font-weight: 600;
  }

</style>