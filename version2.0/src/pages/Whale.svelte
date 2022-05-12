<script>
  import BackButton from '../components/BackButton.svelte';
  import { name, level, exp } from '../store.js';

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

  <BackButton />

  <section class="whale-whale">
    <img class="whale-img swing" src="images/whale{status}.gif" alt="웨일 {status}단계" />
    <div class="whale-name-wrap">
      <h2>Lv.{$level} {$name}</h2>
      <button type="button" class="btn-modify-name">이름 변경</button>
    </div>
    <div class="progress-container">
      <div class="progress-bar" style="width: {$exp}">
      </div>
      <div class="progress-label">{$exp}</div>
    </div>
  </section>

  <section class="whale-story"></section>

</main>

<style>
  main {
    background: white url('/images/whale_bg.png') no-repeat;
  }
  .whale-whale {
    margin-top: -4.5rem;
  }
  .whale-img {
    width: 230px;
  }
  .progress-container {
    width: 100%;
    height: 15px;
    border-radius: 9px;
    background-color: #EEE;
    box-shadow: inset 0 1px 3px rgb(0 0 0 / 20%);
    position: relative;
    margin: 10px 0 20px;
  }
  .progress-bar {
    height: 100%;
    border-radius: 9px;
    background: #ff556a;
    box-shadow: inset 0 -1px 2px rgb(0 0 0 / 10%);
    transition: width .8s ease-in-out;
  }
  .progress-label {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    line-height: 15px;
    color: rgba(0,0,0,.6);
    font-size: 1.2rem;
    text-shadow: 0 1px rgb(0 0 0 / 30%);
    padding-top: 0.05rem;
  }

  .whale-name-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2.6rem;
    margin-right: 7px;
  }

  .btn-modify-name {
    height: 15px;
    color: white;
    background-color: #003c72;
    border-radius: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0 6px;
  }

</style>