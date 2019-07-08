<template>
  <div class="nav">
    <ul>
      <li><router-link to="/card">关注的专题/文集/连载1</router-link></li>
      <li><router-link to="/center">喜欢的文章3</router-link></li>
      <!-- <li><router-link to="/about"><i class="iconfont icon-wechat"></i></router-link></li>
      <li><router-link to="/home"><i class="iconfont icon-douban"></i></router-link></li> -->
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.nav{
  display: flex;
  width: 100%;
  
  // background-color: aquamarine;
  border-bottom:1px solid #969696;
  ul{
    width: 40%;
    display: flex;
    justify-content: space-around;
    padding: 0 1em;
    padding-left: 0;
    li{
      list-style: none;
      a{
        text-decoration: none;
        color: #969696;
      }
      .router-link-active{
        color:#646464;
        font-weight: bold;
        border-bottom:2px solid #646464; 
        padding-bottom: 16px;
      }
    }
  }
}
</style>


