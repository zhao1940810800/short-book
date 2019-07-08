<template>
  <div>
    <tou/>
  <div id="appi">
    <div id="nav">
      <img src="https://i.loli.net/2019/06/11/5cff43ba84af021263.png" alt="paid-content-6f5f218ca8590aa726791acab7b37951.png" title="paid-content-6f5f218ca8590aa726791acab7b37951.png" />
      <div class="zujian">
      <router-link to="/" class="home"><i class="iconfont icon-xiaohonghua">文章</i></router-link>     
      <router-link to="/about" class="about"><i class="iconfont icon-huo">连载</i></router-link>
      </div>
    </div>
    <router-view />
  </div>
  </div>
</template>

<style lang="scss" scoped>
#appi {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  margin: 0 auto;
  color: #2c3e50;
  width: 690px;
}
#nav {
  img{
    width: 100%;
  }
  .zujian{
     margin-top: 30px;
     padding: 13px 0px 10px 5px;
     border-bottom: 1px solid #f0f0f0;
     line-height: 35px;
     .home{
       width: 5%;
      //  background-color: bisque;
       color: #646464;
       text-decoration: none;
       i{
         font-size: 18px;
         font-weight: 700;
         line-height: 25px;
         color: #969696;
       }
     }
     .about{
       width: 5%;
       margin-left: 30px;
       text-decoration: none;
       i{
         font-size: 18px;
         font-weight: 700;
         line-height: 25px;
         color: #969696;
       }
     }
     :hover{
       color: #646464;
       border-bottom: 1px solid #646464;
       padding-bottom: 19px;
       i{
         color: #646464;
       }
     }
     :focus{
       color: #646464;
       border-bottom: 2px solid #646464;
       padding-bottom: 19px;
       i{
         color: #646464;
       }
     }   
  }
    }
  
@media screen and (max-width: 745px){
  #nav{
    .img{
      margin: 0;
      padding: 0;
      width: 100%;
    }
  .zujian{
    text-align: center;
    
     }
   }
  }

</style>
<script>
  import Tou from "../../../src/components/index/tou.vue";
  export default {
    components: {Tou}
  }
</script>