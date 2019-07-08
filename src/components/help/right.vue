<template>
  <div class="col-hid-xs col-xs-offset-1 aside">
    <div class="go-to-feedback">
      <img :src="imgUrl" alt="helps">
      <div class="text">
        没解决你的疑问？
        <a href="###">
          去反馈
          <i class="iconfont ic-link"></i>
        </a>
      </div>
    </div>
    <div class="hint-text">帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com</div>
    <div class="hint-text">程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。</div>
    <div class="hint-text">也可以<a href="###"> 联系我们 <i class="iconfont ic-link"></i></a></div>
  </div>
</template>

<script>
  export default {
    name: "right",
    data() {
      return {
        imgUrl: require('../../assets/AYZcDQMpHQRNAAAAAElFTkSuQmCC.png')
      }
    }
  }
</script>

<style scoped>

  a {
text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  .aside {
    float: left;
  }

  .col-xs-offset-1 {
    margin-left: 4.1%;
  }

  /*.col-xs-7 {*/
    /*width: 40%;*/
  /*}*/

  .go-to-feedback img {
    width: 60px;
  }

  .go-to-feedback .text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 14px;
  }

  .go-to-feedback .text a {
    display: block;
  }

  a {
    margin-top: 3px;
    color: #3194d0;
  }

  .hint-text {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #f0f0f0;
    font-size: 14px;
  }
@media (max-width: 920px) {
  .col-hid-xs {
    display: none;
  }
}
</style>