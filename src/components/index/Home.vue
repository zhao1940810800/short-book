<template>
  <div class="home">
    <Home></Home>
    <div class="container">
      <Mine></Mine>
      <right></right>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import "../../../node_modules/normalize.css/normalize.css";
import Home from "./tou.vue";
import Mine from "../index/Mine.vue";
import right from "./right.vue";
import foot from "../index/foot.vue";
export default {
  components: {
    Home,
    Mine,
    right,
    foot
  }
};
</script>
<style lang="scss">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}

@media (min-width: 1081px) {
  .container {
    width: 960px;
  }
}
@media (max-width: 820px) {
  .container {
    flex-wrap: wrap;
  }
  .searhbar {
    // border: 1px solid;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100%;
    position: absolute;
    top: 59px;
    width: 100vw !important;
    li {
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      .iconfont {
        display: none;
      }
      .icon-search {
        display: block;
      }
      span {
        text-align: center;
        display: block !important;
      }
    }
  }
  .fangda {
    // position: unset !important;
    position: relative !important;
    bottom: 43px;
    // border: 1px solid;
    right: -90%;
    top: unset !important;
    margin-left: unset !important;
  }
  .sousuo {
    width: 100% !important;
  }
}
</style>
