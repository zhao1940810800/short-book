<template>
  <div>
    <div class="menu">全部关注</div>
    <ul class="comment-list">
      <div class="notification-list-placeholder comment" v-show="show">
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
    <div class="find-nothing" v-show="!show">
      <img src="//cdn2.jianshu.io/assets/web/icon_nocontent-00c423de394b9184d467f2f2a7284b54.png">
      <div>这里还木有内容哦~</div>
    </div>
    <div>
      <!---->
    </div>
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
.notification .main .find-nothing div {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .find-nothing img {
  width: 100px;
}
.notification .main .find-nothing {
  margin-top: 150px;
  text-align: center;
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
.notification-list-placeholder.comment .meta,
.notification-list-placeholder.comment p {
  display: block;
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
.notification-list-placeholder.comment .meta,
.notification-list-placeholder.comment p {
  display: block;
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
.notification-list-placeholder.comment .wrap .name {
  animation: none;
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  -ms-animation: none;
}
.notification-list-placeholder .wrap {
  padding: 23px 20px 20px 72px !important;
  margin: 0 -20px;
  border-top: 1px solid #f0f0f0;
}
.notification-list-placeholder.comment .wrap {
  padding-bottom: 4px !important;
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
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .aside ul span {
  font-size: 15px;
  vertical-align: middle;
}
.notification .aside ul i {
  margin-right: 15px;
  font-size: 24px;
  color: #ea6f5a;
  vertical-align: middle;
}
a,
body {
  color: #333;
}
a {
  cursor: pointer;
  text-decoration: none;
}
.notification .aside ul a {
  height: auto;
  padding: 10px 25px;
  line-height: 30px;
  display: block;
}
.notification .aside ul li.active a {
  background-color: #f0f0f0;
  border-radius: 4px;
}
li {
  line-height: 20px;
}
.notification .aside ul li {
  margin: 0;
}
ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}
ul {
  padding-left: 0;
}
.notification .aside ul {
  list-style: none;
}
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-13,
.col-lg-14,
.col-lg-15,
.col-lg-16,
.col-lg-17,
.col-lg-18,
.col-lg-19,
.col-lg-20,
.col-lg-21,
.col-lg-22,
.col-lg-23,
.col-lg-24,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-13,
.col-md-14,
.col-md-15,
.col-md-16,
.col-md-17,
.col-md-18,
.col-md-19,
.col-md-20,
.col-md-21,
.col-md-22,
.col-md-23,
.col-md-24,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-13,
.col-sm-14,
.col-sm-15,
.col-sm-16,
.col-sm-17,
.col-sm-18,
.col-sm-19,
.col-sm-20,
.col-sm-21,
.col-sm-22,
.col-sm-23,
.col-sm-24,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-13,
.col-xs-14,
.col-xs-15,
.col-xs-16,
.col-xs-17,
.col-xs-18,
.col-xs-19,
.col-xs-20,
.col-xs-21,
.col-xs-22,
.col-xs-23,
.col-xs-24 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-13,
.col-xs-14,
.col-xs-15,
.col-xs-16,
.col-xs-17,
.col-xs-18,
.col-xs-19,
.col-xs-20,
.col-xs-21,
.col-xs-22,
.col-xs-23,
.col-xs-24 {
  float: left;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.notification .main {
  padding-left: 0;
}
.notification .aside {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 86px 0 0;
  padding: 0 0 30px;
  width: 280px;
  overflow: auto;
}
.row:after,
.row:before {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}
.row:after,
.row:before {
  content: " ";
  display: table;
}
.row {
  width: 100%;
  margin-left: -15px;
  margin-right: -15px;
}
.notification .row {
  padding: 30px 0;
}
.container:after {
  clear: both;
}
.container:after,
.container:before {
  content: " ";
  display: table;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
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

@media (min-width: 1081px) {
  .container {
    width: 960px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
</style>
