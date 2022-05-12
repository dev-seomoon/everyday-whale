<script>
  import { name, level, exp, status} from '../store.js';
  import { LEVEL_SCOPE, STORY } from '../constants.js';
  import BackButton from '../components/BackButton.svelte';
  import StoryButton from '../components/StoryButton.svelte';
</script>

<main>

  <BackButton />

  <section class="whale-whale">
    <img class="whale-img swing" src="images/whale{$status}.gif" alt="웨일 {$status}단계" />
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

  <section class="whale-story">
    <h3>
      <img src="/images/heart.png" alt="mini heart" />
      {$name}의 이야기
    </h3>
    <p class="desc">
      고래의 성장단계에 따른 스토리가 표시됩니다.
      <br />
      버튼을 클릭해보세요!
    </p>
    <ul class="story-btn-list">
      {#each LEVEL_SCOPE as _, i}
        <li class="story-btn-item">
          <StoryButton locked={$status < i + 1} order={i + 1}/>
        </li>
      {/each}
    </ul>
    <ul class="story-list">
    {#each Array(Number($level)) as _, index (index)}
      <li class="story-item">
        <h4>#{index + 1}번째 이야기</h4>  
        <p>{STORY[index]}</p>
      </li>
    {/each}
    </ul>
  </section>

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

  .whale-story {
    margin-top: 4rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    color: #006689;
    margin-bottom: 0.3rem;
  }

  h3 > img {
    width: 8px;
    margin: 4px 6px;
  }

  .desc {
    font-size: 1.56rem;
    color: #8C8C8C;
    margin-bottom: 1.5rem;
  }

  .story-btn-list {
    display: flex;
    justify-content: center;
  }

  .story-btn-item {
    margin: 0 2.5px;
  }

  .story-list {
    width: 100%;
    color: #006689;
    font-size: 1.7rem;
    text-align: left;
    padding: 1.5rem;
    box-sizing: border-box;
  }

  .story-item {
    margin: 1.7rem;
    margin-bottom: 2rem;
  }

  .story-item > p {
    font-family: 'Noto Sans KR', sans-serif;
  }

</style>