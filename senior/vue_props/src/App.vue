<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <app-annoucement>
          <p slot="one">我是p1标签</p>
          <p slot="two">我是p2标签</p>
        </app-annoucement>
        <app-article></app-article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>