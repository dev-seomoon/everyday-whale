<script>
  import { name, level } from '../store.js';

  const LEVEL_SCOPE = [0, 3, 8, 15, 26];

  const getWhaleStatus = () => {
    for (var i = 0; i < LEVEL_SCOPE.length; i++) {
      if ($level < LEVEL_SCOPE[i]) break;
    }
    return i;
  };

  const status = getWhaleStatus();
  
  console.log($name, $level, status);

</script>

<main>
  <nav>
    <a href="/#/whale"><img class="btn-img" src="images/ic_whale.png" alt="웨일"/><span>웨일</span></a>
    <a href="/#/todo"><img class="btn-img" src="images/ic_todo.png" alt="할일" /><span>할일</span></a>
    <a href="/#/setting"><img class="btn-img" src="images/ic_setting.png" alt="설정" /><span>설정</span></a>
  </nav>
  <section id="main-whale">
    <img class="whale-img swing" src="images/whale{status}.gif" alt="웨일 {status}단계" />
    <h2>Lv.{$level} {$name}</h2>
  </section>
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
  }

  span {
    color: #296e81;
    font-size: 1.68rem;
    font-weight: lighter;
    margin-top: 5px;
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
</style>