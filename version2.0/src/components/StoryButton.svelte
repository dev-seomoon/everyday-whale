<script>
  export let locked;
  export let order;
  export let clickStoryBtn;
</script>

<button type="button" on:click={() => clickStoryBtn(order)}>
  <img
    src="/images/whale{order}_50px{locked ? '_grey' : ''}.png" alt="{order}번째 스토리 버튼"
  />
</button>

<style>
  button {
    box-sizing: border-box;
    border: 2px solid #006689;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>