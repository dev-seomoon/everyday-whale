<script>
  import { name, level, todoList, status } from '../store.js';
</script>

<main>

  <nav>
    <a href="/#/whale">
      <img class="btn-img" src="images/ic_whale.png" alt="웨일"/>
      <span>웨일</span>
    </a>
    <a href="/#/todo">
      <img class="btn-img" src="images/ic_todo.png" alt="할일" />
      <span>할일</span>
    </a>
    <a href="/#/setting">
      <img class="btn-img" src="images/ic_setting.png" alt="설정" />
      <span>설정</span>
    </a>
  </nav>

  <section class="main-whale">
    <img class="whale-img swing" src="images/whale{$status}.gif" alt="웨일 {$status}단계" />
    <h2 class="whale-name">Lv.{$level} {$name}</h2>
  </section>

  <section class="main-todo">
    <ul>
      {#each $todoList as todo}
        <li class="todo-wrap">
          <span class="todo">
            <span class="todo-check" />
            <span class="todo-text">{todo.todo}</span>
          </span>
          <button type="button" id={todo.id} class="btn-delete" />
        </li>
      {/each}
    </ul>
    <form class="todo-wrap">
      <input type="text" placeholder="새로운 할 일" />
      <button type="button" class="btn-add" />
    </form>
  </section>

</main>

<style>
  /* container */
  main { 
    background: white url('/images/background.png') no-repeat; 
  }

  /* menu */
  a {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 1.8rem;
  }

  .btn-img {
    width: 35px;
    margin-bottom: 5px;
  }

  span {
    color: #296e81;
    font-size: 1.68rem;
    font-weight: lighter;
  }

  /* whale */
  .whale-img {
    width: 300px;
  }

  h2 {
    font-size: 3rem;
    margin-top: 3rem;
  }

  /* todoList */
  .main-todo {
    width: 100%;
    position: absolute;
    top: 615px;
    padding: 0 30px 30px;
    box-sizing: border-box;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
  }

  .todo-wrap {
    width: 100%;
    height: 41px;
    margin-bottom: 10px;
    padding: 0 11px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #f2f7ff;
    border: 1.5px solid #003c72;
    border-radius: 8px;
  }

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

  .btn-delete {
    width: 15px;
    height: 15px;
    background: url('/images/ic_close.png') no-repeat transparent;
    background-size: 15px;
  }

  .btn-add {
    width: 25px;
    height: 25px;
    background: url('/images/plus.png') no-repeat transparent;
    background-size: 25px;
  }

  input {
    width: 80%;
    background: none;
    border: none;
    font-size: 1.56rem;
    font-weight: 600;
  }

</style>