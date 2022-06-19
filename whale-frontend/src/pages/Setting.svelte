<script>
  import { replace } from "svelte-spa-router";
  import BackButton from "../components/BackButton.svelte";
  import { STORAGE_KEYS } from "../constants";

  const reset = () => {
    const resetConfirm = confirm("정말 초기화 하시겠습니까?\n모든 데이터가 영구적으로 삭제됩니다.");

    if (resetConfirm) {
      STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
      replace("/start");
    }
  };
</script>

<main class="back-wave-bg">
  <BackButton white />
  <section class="first">
    <h2>초기화</h2>
    <p>지금까지의 모든 기록을 초기화하고 다시 시작합니다.</p>
    <button type="button" on:click={reset}>초기화하기</button>
  </section>
  <hr />
  <section>
    <h2>피드백</h2>
    <ul>
      <li>
        <h4 class="nickname">[기획] 뷰오</h4>
        <p class="contact plain-text">dpals1234@naver.com
        </p>
      </li>
      <li>
        <h4 class="nickname">[디자인] sunnyk</h4>
        <p class="contact plain-text">drawing_sun@naver.com</p>
      </li>
      <li>
        <h4 class="nickname">[개발] 코알라일락, 서문</h4>
        <p class="contact plain-text">
          zion830@naver.com,
          <br />
          seomoon.frontend@gmail.com
        </p>
      </li>
    </ul>
    <p>
      이용하면서 불편을 겪으셨거나
      <br />
      개선 사항이 있으시다면 언제든지 문의를 보내주세요.
    </p>
  </section>
  <hr />
  <section>
    <h2>Open Source</h2>
    <ul class="opensource-list">
      <li class="plain-text">Svelte 3.0.0</li>
    </ul>
    <p class="plain-text">version 1.0.5</p>
  </section>
</main>

<style>
  section {
    text-align: center;
  }

  section.first {
    margin-top: 3rem;
  }

  button {
    font-family: inherit;
    font-size: 1.9rem;
    color: white;
    background-color: #003c72;
    border-radius: 8px;
    width: 120px;
    height: 35px;
    line-height: 38.5px;
    margin-top: 5px;
  }

  hr {
    margin: 3.6rem auto;
    width: calc(100% - 12rem);
    box-sizing: border-box;
  }
  
  h2 {
    color: #003c72;
    font-size: 2.4rem;
  }

  h4 {
    margin-top: 1.5rem;
  }

  p {
    color: #19aac1;
    font-size: 1.32rem;
    margin: 1rem 0;
  }

  ul {
    margin-bottom: 3rem;
  }

  .nickname {
    color: #000;
    font-size: 1.32rem;
  }

  .plain-text {
    color: #003c72;
    font-size: 1.2rem;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0.1rem 0;
  }

  .opensource-list {
    margin: 2rem 0 4rem;
  }
</style>