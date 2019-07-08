<template>
  <div id="app">
    <Tou/>
    <div class="help">
      <left class="left"/>
      <right class="right"/>
    </div>
  </div>
</template>

<script>
import Tou from "../../../src/components/index/tou.vue";
import Right from "../../../src/components/help/right.vue";
import Left from "../../../src/components/help/left.vue";

export default {
  components: {
    Tou,
    Left,
    Right
  }
};
</script>

<style lang="scss" scoped>
.help:after,
.help:before {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.help {
  width: 960px;
  padding: 30px 0;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.left {
  width: 63%;
}

.right {
  width: 29%;
}
@media (max-width: 920px) {
  .right {
    display: none;
  }
}
@media (max-width: 920px) {
  .left {
    width: 500px;
  }
}
</style>
