<script>
import { status, name, level } from "../store";
</script>

<section class="main-whale">
  <img class="whale-img swing" src="images/whale{$status}.gif" alt="웨일 {$status}단계" />
  <h2 class="whale-name">Lv.{$level} {$name}</h2>
</section>

<style>
  .whale-img {
    width: 300px;
  }

  h2 {
    font-size: 3rem;
    margin-top: 3rem;
  }
</style>