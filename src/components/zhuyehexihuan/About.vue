<template>
  <div>
    <Tou/>
    <div class="con">
      <div class="con-l">
        <contop></contop>
        <nave></nave>
        <centere></centere>
      </div>
      <div class="con-r">
        <conre></conre>
      </div>
    </div>

  </div>
</template>

<script>
  import contop from "../../../src/components/zhuyehexihuan/view/con-top.vue";
  import conre from "../../../src/components/zhuyehexihuan/view/con-r.vue";
  import nave from "../../../src/components/zhuyehexihuan/view/Nav.vue";
  import centere from "../../../src/components/zhuyehexihuan/view/Center.vue";
  import Tou from "../../../src/components/index/tou.vue";
  export default {
    components: {
      Tou, contop, conre, nave, centere,
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

