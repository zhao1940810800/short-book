<template>
  <div>
    <tou/>
    <div class="con">
      <div class="con-l">
        <contop></contop>
        <tab></tab>
        <router-view></router-view>
      </div>
      <div class="con-r">
        <conre></conre>
      </div>
    </div>

  </div>
</template>

<script>
  import Tou from "../../../src/components/index/tou.vue";
  import contop from "../../../src/components/zhuyehexihuan/view/con-top.vue";
  import conre from "../../../src/components/zhuyehexihuan/view/con-r.vue";
  import tab from "../../../src/components/zhuyehexihuan/view/tab.vue";

  export default {
    components: {
      Tou, contop, conre, tab
    }
  }

</script>


<style scoped>
  .con {
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  }

  .con-r {
    width: 100%;
    margin-left: 2%;

  }

  .con-l {
    width: 200%;

  }
</style>

