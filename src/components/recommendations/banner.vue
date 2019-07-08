<template>
  <div>
    <img class="recommend-banner" src="../../assets/5d06ec8379f0854872.png" alt="Recommend author">
    <a target="_blank" class="help" href="#">
      <i class="iconfont icon-wenhao"></i>如何成为签约作者
    </a>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.recommend-banner {
  width: 100%;
  border-radius: 6px;
  background-color: hsla(0, 0%, 71%, 0.2);
  vertical-align: middle;
}

.help {
  position: absolute;
  right: 30px;
  top: 68px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 17px;
}

@media (max-width: 589px) {
  .help {
    display: none;
  }
}
</style>