<template>
  <div>
    <div class="menu">其它提醒</div>
    <ul class="other-list">
      <!-- <pts_auto_exchange_fp notification="[object Object]"></pts_auto_exchange_fp>
      <pts_will_stop notification="[object Object]"></pts_will_stop> -->
      <div class="notification-list-placeholder other" v-show="show">
        <div class="avatar"></div>
        <div class="wrap">
          <div class="name"></div>
          <div class="text"></div>
        </div>
        <p></p>
        <p class="animation-delay"></p>
        <div class="meta">
          <i class="iconfont ic-list-comments"></i>
          <div class="text"></div>
          <i class="iconfont ic-go"></i>
          <div class="text longer"></div>
        </div>
      </div>
    </ul>
    <!---->
    <div>
      <!---->
    </div>
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
.notification-list-placeholder.other .text {
  margin-left: -22px;
  width: 94px;
}
.notification-list-placeholder .meta .text.longer {
  width: 56px;
}
.notification-list-placeholder .meta .text {
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  height: 14px;
  width: 26px;
  background-color: #eaeaea;
}
.notification-list-placeholder.other .text {
  margin-left: -22px;
  width: 94px;
}
.notification-list-placeholder .meta i {
  margin-right: 5px;
  vertical-align: middle;
}
.notification-list-placeholder .meta {
  display: none;
  margin: 0;
  padding-top: 6px;
  color: #eaeaea;
  font-size: 15px;
}
.notification .main .comment-list .meta,
.notification .main .follow-list .meta,
.notification .main .like-list .meta,
.notification .main .other-list .meta,
.notification .main .pay-list .meta {
  margin-top: 10px;
  height: 20px;
}
.notification-list-placeholder p {
  display: none;
  margin-bottom: 10px;
  height: 15px;
  background-color: #eaeaea;
  animation: loading 1s ease-in-out infinite;
  -webkit-animation: loading 1s ease-in-out infinite;
  -moz-animation: loading 1s ease-in-out infinite;
  -o-animation: loading 1s ease-in-out infinite;
  -ms-animation: loading 1s ease-in-out infinite;
}
.notification-list-placeholder .animation-delay {
  animation: shortLoading 1s ease-in-out -0.5s infinite;
  -webkit-animation: shortLoading 1s ease-in-out -0.5s infinite;
  -moz-animation: shortLoading 1s ease-in-out -0.5s infinite;
  -o-animation: shortLoading 1s ease-in-out -0.5s infinite;
  -ms-animation: shortLoading 1s ease-in-out -0.5s infinite;
}
.notification .main .comment-list p,
.notification .main .follow-list p,
.notification .main .like-list p,
.notification .main .other-list p,
.notification .main .pay-list p {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.7;
}
.notification-list-placeholder p {
  display: none;
  margin-bottom: 10px;
  height: 15px;
  background-color: #eaeaea;
  animation: loading 1s ease-in-out infinite;
  -webkit-animation: loading 1s ease-in-out infinite;
  -moz-animation: loading 1s ease-in-out infinite;
  -o-animation: loading 1s ease-in-out infinite;
  -ms-animation: loading 1s ease-in-out infinite;
}
.notification .main .comment-list p,
.notification .main .follow-list p,
.notification .main .like-list p,
.notification .main .other-list p,
.notification .main .pay-list p {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.7;
}
.notification-list-placeholder .wrap .text {
  margin: 7px 0;
  width: 80px;
  height: 12px;
  background-color: #eaeaea;
}
.notification-list-placeholder.other .text {
  margin-left: -22px;
  width: 94px;
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
.notification-list-placeholder .wrap .name {
  width: 30%;
  height: 15px;
  background-color: #eaeaea;
  animation: shortLoading 1s ease-in-out -0.5s infinite;
  -webkit-animation: shortLoading 1s ease-in-out -0.5s infinite;
  -moz-animation: shortLoading 1s ease-in-out -0.5s nfinite;
  -o-animation: shortLoading 1s ease-in-out -0.5s infinite;
  -ms-animation: shortLoading 1s ease-in-out -0.5s infinite;
}
.notification-list-placeholder .wrap {
  padding: 23px 20px 20px 72px !important;
  margin: 0 -20px;
  border-top: 1px solid #f0f0f0;
}
.notification-list-placeholder.other .wrap {
  padding: 23px 20px 20px 42px !important;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.notification-list-placeholder .avatar {
  position: absolute;
  cursor: default !important;
  margin-top: 20px;
  width: 48px;
  height: 48px;
  background-color: #eaeaea;
  border-radius: 50%;
}
.notification-list-placeholder.other .avatar {
  margin-top: 24px;
  width: 15px !important;
  height: 15px !important;
  border-radius: 2px;
}
.notification .main .comment-list .avatar,
.notification .main .follow-list .avatar,
.notification .main .like-list .avatar,
.notification .main .other-list .avatar,
.notification .main .pay-list .avatar {
  display: inline-block;
  margin-right: 5px;
  width: 40px;
  height: 40px;
}
.notification-list-placeholder {
  margin-top: -10px;
  padding: 10px 20px;
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
*,
:after,
:before {
  box-sizing: border-box;
}
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
</style>
