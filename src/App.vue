<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <!-- </div> -->
    <!-- <router-link to="/login">注册</router-link> -->
    <!-- <router-link to="/signup">登录</router-link> -->
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.reader-night-mode {
  background-color: #3f3f3f;
  color: #c8c8c8;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
</style>
