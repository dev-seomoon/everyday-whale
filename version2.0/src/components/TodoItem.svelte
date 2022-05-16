<script>
  export let todo;
  export let removeTodo;
  export let toggleTodo;
</script>

<li class="todo-box">
  <span class="todo" class:checked="{todo.isChecked}" on:click={() => toggleTodo(todo.id)} >
    <span class="todo-check" />
    <span class="todo-text">{todo.todo}</span>
  </span>
  <button type="button" on:click={() => removeTodo(todo.id)} />
</li>

<style>
.todo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-text {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.56rem;
  color: #003c72;
}

.todo-check {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url("/images/unchecked.png") no-repeat;
  background-size: 25px;
  margin-right: 10px;
}

.checked > .todo-text {
  text-decoration: line-through;
}
.checked > .todo-check:after {
  position: absolute;
  content: "";
  width: 25px;
  height: 25px;
  background: url("/images/checked.png") no-repeat;
  background-size: 25px; 
}

button {
  width: 15px;
  height: 15px;
  background: url('/images/ic_close.png') no-repeat transparent;
  background-size: 15px;
}
</style>