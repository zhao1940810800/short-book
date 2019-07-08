<template>
  <div class="footer">
    <div class="row">
      <div class="main">
        <a href="#" target="_blank">关于简书</a>
        <em>·</em>
        <a href="#" target="_blank">联系我们</a>
        <em>·</em>
        <a href="#" target="_blank">加入我们</a>
        <em>·</em>
        <a href="#" target="_blank">简书出版</a>
        <em>·</em>
        <a href="#" target="_blank">品牌与徽标</a>
        <em>·</em>
        <a href="#" target="_blank">帮助中心</a>
        <em>·</em>
        <a href="#" target="_blank">合作伙伴</a>
        <div class="icp">
          ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
          <a target="_blank" href="#">
            <img
              src="https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png"
              alt="Smrz"
            >
          </a>
          <a target="_blank" href="#">沪公网安备31010402002252号 /</a>
          <br>
          <a target="_blank" href="#">
            <img
              src="https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png"
              alt="Wxb"
            >
          </a>
          简书网举报电话：021-34770013 /
          <a target="_blank" href="#">
            <img
              src="https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png"
              alt="Zggsrz"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heaerder"
};
</script>

<style scoped>
.footer {
  /* width: 60%; */
  /* background: aqua; */
  /* margin-left: 20%; */
  /* padding-left: 15px; */
  /* margin-bottom: 20px; */
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

/*.footer {*/
/*margin-bottom: 20px;*/
/*}*/

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.footer .main {
  padding-right: 0;
  font-size: 13px;
  color: #969696;
}

.footer .main a {
  color: #969696;
  display: inline-block;
  text-decoration: none;
}

em {
  font-size: italic;
}

.footer .icp {
  margin-top: 10px;
  font-size: 12px;
}

.footer .icp img {
  height: 30px;
}

img {
  vertical-align: middle;
}
.footer .main a:hover {
  color: #2f2f2f;
}
@media (min-width: 992px) {
  .footer {
    /* width: 960px; */
  }
}
@media (max-width: 480px) {
  .icp {
    display: none;
  }
}
</style>
