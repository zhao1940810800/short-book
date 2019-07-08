<template>
  <div>
    <div class="menu">
      全部简信
      <!---->
    </div>
    <ul class="jianxin-list">
      <li :key="index" v-for="(item,index) in all" v-show="!show">
        <div class="pull-right">
          <span class="time">2017.09.16 18:03</span>
          <div>
            <a data-toggle="dropdown" href="javascript:void(0);">
              <i class="iconfont icon-arrLeft-fill"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a>
                  <i class="iconfont ic-delete"></i>删除会话
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont ic-block"></i>加入黑名单
                </a>
              </li>
              <li>
                <a class="report">
                  <span>
                    <i class="iconfont ic-report"></i>举报用户
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/u/b52ff888fd17" target="_blank" class="avatar">
          <img :src="item.user.avatar_source">
          <!---->
        </a>
        <a href="/u/b52ff888fd17" target="_blank" class="name">{{item.user.nickname}}</a>
        <a href="/notifications/#/chats/278885551" class="wrap">
          <p>{{item.last_message_content}}</p>
        </a>
      </li>
      <div class="jianxin-placeholder" v-show="show">
        <div class="avatar"></div>
        <div class="wrap">
          <div class="time"></div>
          <div class="name"></div>
          <div class="text"></div>
        </div>
      </div>
    </ul>
    <!---->
    <!---->
    <!---->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: true,
      all: ""
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.show = false;
    // }, 300);
    let publicPath =
      process.env.NODE_ENV === "production" ? "/Short-book/" : "/";
    axios({
      method: "get",
      url: `${publicPath}static/moock/chats_user.json`
      // responseType: "stream"
    }).then(res => {
      console.log("this", this);
      console.log(res, this.all);
      this.all = res.data.chats;
      setTimeout(() => {
        this.show = false;
      }, 300);
    });
  }
};
</script>
<style lang="scss" scoped>
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
.jianxin-placeholder .wrap .name {
  position: inherit !important;
  width: 30px;
  height: 15px;
  background-color: #eaeaea;
}
.notification .main .jianxin-list .name {
  position: absolute;
  top: 25px;
  font-size: 15px;
}
.jianxin-placeholder .wrap .time {
  float: right;
  width: 100px;
  height: 13px;
  background-color: #eaeaea;
}
.jianxin-placeholder .wrap {
  padding: 28px 20px 20px 80px !important;
  margin: 0 -20px 0 0;
  border-top: 1px solid #f0f0f0;
}
.notification .main .jianxin-list .wrap {
  display: block;
  padding: 20px 20px 20px 0;
  min-height: 88px;
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
.notification .main .jianxin-list .avatar {
  float: left;
  margin: 20px 10px 20px 20px;
  width: 48px;
  height: 48px;
}
.jianxin-placeholder {
  margin-top: -10px;
  padding: 10px 20px 10px 0;
}
.notification .main .jianxin-list p {
  margin: 28px 0 0;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notification .main .jianxin-list .wrap {
  display: block;
  padding: 20px 20px 20px 0;
  min-height: 88px;
}
.notification .main .jianxin-list .name {
  position: absolute;
  top: 25px;
  font-size: 15px;
}
img {
  vertical-align: middle;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.notification .main .jianxin-list .avatar {
  float: left;
  margin: 20px 10px 20px 20px;
  width: 48px;
  height: 48px;
}
.notification .main .dropdown-menu i {
  margin-right: 10px;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857;
  color: #333;
  white-space: nowrap;
}
.notification .main .jianxin-list .dropdown-menu a {
  padding: 10px 20px;
}
.notification .main .jianxin-list li {
  position: relative;
  border-top: 1px solid #f0f0f0;
}
.notification .main .dropdown-menu li {
  border: none !important;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu {
  margin-top: 0;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  -webkit-filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}
.notification .main ul {
  list-style: none;
}
.notification .main .dropdown-menu {
  top: auto;
  left: auto;
  right: 15px;
  color: #333;
  min-width: inherit;
}
a {
  background-color: transparent;
  color: #333;
  text-decoration: none;
  cursor: pointer;
}
.notification .main .jianxin-list .pull-right div {
  display: inline;
}
.notification .main .jianxin-list .pull-right .time {
  color: #9b9b9b;
}
.pull-right {
  float: right !important;
}
.notification .main .jianxin-list .pull-right {
  margin: 20px 20px 0 0;
  font-size: 13px;
}
li {
  line-height: 20px;
}
.notification .main .jianxin-list li {
  position: relative;
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
