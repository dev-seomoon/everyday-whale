<main>
  <nav>
    <a href="/#/whale"><img src="images/ic_whale.png" alt="웨일"/><span>웨일</span></a>
    <a href="/#/todo"><img src="images/ic_todo.png" alt="할일" /><span>할일</span></a>
    <a href="/#/setting"><img src="images/ic_setting.png" alt="설정" /><span>설정</span></a>
  </nav>
</main>

<style>
  main {
    height: 100%;
    display: flex;
    justify-content: center;
    background: white url("/images/background.png") no-repeat;
    overflow: visible;
  }
  
  a {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 1.8rem;
  }

  img {
    width: 35px;
  }

  span {
    color: #296e81;
    font-size: 1.68rem;
    font-weight: lighter;
    margin-top: 5px;
  }
</style>