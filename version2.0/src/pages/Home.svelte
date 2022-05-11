<script>
  import { name, level, todoList } from '../store.js';

  const LEVEL_SCOPE = [0, 3, 8, 15, 26];

  const getWhaleStatus = () => {
    for (var i = 0; i < LEVEL_SCOPE.length; i++) {
      if ($level < LEVEL_SCOPE[i]) break;
    }
    return i;
  };

  const status = getWhaleStatus();

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
    <img class="whale-img swing" src="images/whale{status}.gif" alt="웨일 {status}단계" />
    <h2>Lv.{$level} {$name}</h2>
  </section>

  <section class="main-todo">
  <ul>
    {#each $todoList as todo}
      <li>
        <span class="todo">
          <span class="todo-check" />
          <span class="todo-text">{todo.todo}</span>
        </span>
        <button type="button" id={todo.id} />
      </li>
    {/each}
  </ul>

</main>

<style>
  /* container */
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white url("/images/background.png") no-repeat;
    overflow: visible;
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
    color: #003c72;
    text-shadow: 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    text-align: center;
    margin-top: 3rem;
  }

  .swing {
    animation: swing 2s ease-in-out infinite;
  }

  @keyframes swing {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* todoList */
  .main-todo {
    width: 100%;
    position: absolute;
    top: 615px;
    padding-bottom: 30px;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
  }

  li {
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

  button {
    width: 15px;
    height: 15px;
    background: url('/images/ic_close.png') no-repeat transparent;
    background-size: 15px;
    border: none;
    cursor: pointer;
  }
</style>