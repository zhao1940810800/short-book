<template>
  <div>
    <tou></tou>
    <div class="app">
      <div class="container recommend">
        <Banner></Banner>
        <Content></Content>
        <Btn></Btn>
      </div>
      <!--    <div id="nav">-->
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
      <!--    </div>-->
      <!--    <router-view />-->
    </div>
  </div>
</template>
<script>
import tou from "../index/tou.vue";
import Banner from "./banner.vue";
import Content from "./content.vue";
import Btn from "./btn.vue";
export default {
  components: {
    Banner: Banner,
    Content: Content,
    Btn: Btn,
    tou
  }
};
</script>
<style lang="scss">
/*#app {*/
/*  font-family: "Avenir", Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/
/*#nav {*/
/*  padding: 30px;*/
/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/
/*    &.router-link-exact-active {*/
/*      color: #42b983;*/
/*    }*/
/*  }*/
/*}*/
* {
  margin: 0px;
  padding: 0px;
  /*box-sizing: border-box;*/
}
.app {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.recommend {
  width: 72%;
  height: 100%;
  position: relative;
  padding: 30px 0 50px;
  text-align: center;
}
@media (max-width: 1080px) {
  .recommend {
    width: 750px;
  }
}
</style>
