<script>
import StartWhale from "../components/StartWhale.svelte";
</script>

<main>
  <h1>목표를 향해 함께 달릴<br/> 웨일의 이름을 지어주세요!</h1>
  <StartWhale />
  <input type="text" placeholder="이름" />
  <button type="button">시작하기</button>
</main>

<style>
  main {
    background-image: linear-gradient(#c6eaff, white, white);
  }
  h1 {
    color: #296e81;
    font-size: 2.2rem;
    text-align: center;
    margin-top: 32px;
  }
  input {
    border-bottom: 1.5px solid #003c72;
    font-family: 'Jua', sans-serif;
    font-size: 2.2rem;
    text-align: center;
    letter-spacing: 0.1em;
  }
  button {
    width: 120px;
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 2.9rem;
    color: #fff;
    background: #003c72;
    font-family: 'Jua', sans-serif;
    font-size: 2rem;
    letter-spacing: 0.3em;
    text-align: center;
    padding-left: 0.3em;
  }
</style>