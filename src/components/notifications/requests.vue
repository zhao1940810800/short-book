<template>
  <div>
    <div class="menu">
      全部投稿请求
      <!---->
    </div>
    <ul class="push-list">
      <li>
        <a href="/notifications/#/pending_submissions" class="wrap">
          <div class="all-push">
            <i class="iconfont icon-tougaoqingqiu"></i>
          </div>
          <div class="name">全部未处理请求</div>
        </a>
      </li>
      <div class="jianxin-placeholder request" v-show="show">
        <div class="avatar"></div>
        <div class="wrap">
          <div class="time"></div>
          <div class="name"></div>
          <div class="text"></div>
        </div>
      </div>
    </ul>
    <!---->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 300);
  }
};
</script>
<style lang="scss" scoped>
.notification .main .push-list .all-push i {
  margin-top: 14px;
  font-size: 25px;
  color: #ea6f5a;
  display: block;
}
@keyframes shortLoading {
  0% {
    width: 20%;
  }

  50% {
    width: 40%;
  }

  to {
    width: 20%;
  }
}
.jianxin-placeholder .wrap .text {
  margin: 7px 0;
  width: 80%;
  height: 12px;
  background-color: #eaeaea;
  animation: shortloading 1s ease-in-out infinite;
  -webkit-animation: shortLoading 1s ease-in-out infinite;
  -moz-animation: shortLoading 1s ease-in-out infinite;
  -o-animation: shortLoading 1s ease-in-out infinite;
  -ms-animation: shortLoading 1s ease-in-out infinite;
}
.jianxin-placeholder.request .wrap .text {
  margin: 5px 0;
}
.jianxin-placeholder .wrap .name {
  position: inherit !important;
  width: 30px;
  height: 15px;
  background-color: #eaeaea;
}
.notification .main .push-list .name {
  max-width: 500px;
  font-size: 15px;
  vertical-align: middle;
  display: inline-block;
}
.jianxin-placeholder .wrap .time {
  float: right;
  width: 100px;
  height: 13px;
  background-color: #eaeaea;
}
.jianxin-placeholder.request .wrap .time {
  display: none;
}
.jianxin-placeholder .wrap {
  padding: 28px 20px 20px 80px !important;
  margin: 0 -20px 0 0;
  border-top: 1px solid #f0f0f0;
}
.jianxin-placeholder.request .wrap {
  padding: 20px 20px 20px 84px !important;
}
.notification .main .push-list .wrap {
  padding: 20px;
  display: block;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.jianxin-placeholder .avatar {
  position: absolute;
  cursor: default !important;
  margin-top: 20px;
  width: 48px;
  height: 48px;
  background-color: #eaeaea;
  border-radius: 50%;
}
.jianxin-placeholder.request .avatar {
  margin-left: 20px;
  border-radius: 5px;
}
.jianxin-placeholder {
  margin-top: -10px;
  padding: 10px 20px 10px 0;
}
.notification .main .push-list .name {
  max-width: 500px;
  font-size: 15px;
  vertical-align: middle;
  display: inline-block;
}
.notification .main .push-list .all-push {
  position: relative;
  margin-right: 10px;
  width: 48px;
  height: 48px;
  text-align: center;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}
a {
  color: #333;
  cursor: pointer;
}
.notification .main .push-list .wrap {
  padding: 20px;
  display: block;
}
li {
  line-height: 20px;
}
.notification .main .push-list li {
  border-top: 1px solid #f0f0f0;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}
ul {
  padding-left: 0;
}
.notification .main ul {
  list-style: none;
}
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
*,
:after,
:before {
  box-sizing: border-box;
}
@media (max-width: 1079px) {
  .notification .main .push-list .name {
    max-width: 360px;
  }
}
</style>
