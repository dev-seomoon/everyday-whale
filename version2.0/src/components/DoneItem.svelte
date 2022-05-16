<script>
  export let todo, addDate, finishDate;
</script>

<li>
  <span class="title">{todo}</span>
  <span class="term">진행기간 | {addDate} ~ {finishDate}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    background: #f2f7ff;
    color: #003c72;
    border: 1px solid #003c72;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 1rem;
    margin-bottom: 10px;
  }

  .title {
    font-size: 1.56rem;
  }

  .term {
    font-size: 1.24rem;
    font-family: 'Noto Sans KR', sans-serif;
  }
</style>
