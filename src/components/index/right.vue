<!-- Lambert -->
<template>
  <div id="right">
    <div class="board">
      <img src="https://i.loli.net/2019/06/03/5cf4ea6986b1163757.png" alt="1">
      <img src="https://i.loli.net/2019/06/03/5cf4ea4a02fcf78514.png" alt="2">
      <img src="https://i.loli.net/2019/06/03/5cf4e9f2a616a92593.png" alt="3">
      <img src="https://i.loli.net/2019/06/03/5cf4ea200703c45319.png" alt="4">
    </div>
    <div class="downloadApp" @mouseenter="em = true" @mouseleave="em = false">
      <div class="ewmbig" v-show="em">
        <img
          src="https://i.loli.net/2019/06/03/5cf4ea7d7bf6f37811.png"
          height="160px"
          width="160px"
          alt="ewm"
        >
        <div>&nbsp;</div>
      </div>
      <div class="ewm">
        <img
          src="https://i.loli.net/2019/06/03/5cf4ea7d7bf6f37811.png"
          height="60px"
          width="60px"
          alt="ewm"
        >
      </div>
      <div class="App">
        <p>下载简书手机App ></p>
        <p>随时随地发现和创作内容</p>
        <span style="display:inline-block;height:100%;vertical-align:middle;font-size:0;"></span>
      </div>
    </div>
    <div class="adv">
      <img
        src="https://i.loli.net/2019/06/03/5cf4e9c24af7889981.png"
        width="280px"
        height="159px"
        alt="广告"
      >
    </div>
    <div class="author">
      <div class="change">
        <div class="changeL">推荐作者</div>
        <div class="changeR" @click="order">
          <i
            :class="{rotate: rotate}"
            class="iconfont icon-Change"
            style="transform: rotate(0deg);"
          ></i>
          <!-- <img src="../assets/images/xunhuan.png" alt="xunhuan"> -->
          换一批
        </div>
      </div>
      <!-- 用户循环 -->
      <div :key="index" v-for="(item,index) in alluser" class="authorItem">
        <div class="aItop">
          <div class="aIhead">
            <img :src="item.avatar_source" width="48px" height="48px" alt="head">
          </div>
          <div class="aItitle">{{item.nickname}}</div>
          <div class="aIstart">+关注</div>
        </div>
        <div class="aImark">写了{{item.total_wordage}}.字·{{item.total_likes_count}}喜欢</div>
      </div>
      <!-- <div class="authorItem">
        <div class="aItop">
          <div class="aIhead">
            <img
              src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png"
              width="48px"
              height="48px"
              alt="head"
            >
          </div>
          <div class="aItitle">穿着prada挤地铁</div>
          <div class="aIstart">+关注</div>
        </div>
        <div class="aImark">写了359.字·4.4k喜欢</div>
      </div>
      <div class="authorItem">
        <div class="aItop">
          <div class="aIhead">
            <img
              src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png"
              width="48px"
              height="48px"
              alt="head"
            >
          </div>
          <div class="aItitle">穿着prada挤地铁</div>
          <div class="aIstart">+关注</div>
        </div>
        <div class="aImark">写了359.字·4.4k喜欢</div>
      </div>
      <div class="authorItem">
        <div class="aItop">
          <div class="aIhead">
            <img
              src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png"
              width="48px"
              height="48px"
              alt="head"
            >
          </div>
          <div class="aItitle">穿着prada挤地铁</div>
          <div class="aIstart">+关注</div>
        </div>
        <div class="aImark">写了359.字·4.4k喜欢</div>
      </div>-->
      <div class="searchbox">
        <router-link tag="div" to="/recommendations" class="searchAll">查看全部 ></router-link>
      </div>
      <div class="adv">
        <img
          src="https://i.loli.net/2019/06/03/5cf4e9c24af7889981.png"
          width="280px"
          height="159px"
          alt="广告"
        >
      </div>
    </div>
  </div>
</template>
<script>
import "../../../node_modules/normalize.css/normalize.css";
import { setTimeout } from "timers";
import axios from "axios";
export default {
  // var Down = document.getElementsByTagName('downloadApp');
  // var Download = Download.
  data() {
    return {
      em: false,
      rotate: false,
      alluser: ""
    };
  },
  methods: {
    // showrotate() {
    //   this.rotate = true;
    //   setTimeout(() => {
    //     this.rotate = false;
    //   }, 500);
    // }
    order() {
      let a = this.alluser;
      let len = a.length;
      let shuffled = Array(len);
      this.rotate = true;
      for (let i = len; i--; ) {
        let rand = ~~(Math.random() * i);
        shuffled[i] = a[rand];
        a[rand] = a[i];
      }

      // return shuffled;
      this.alluser = a;
      setTimeout(() => {
        this.rotate = false;
      }, 500);
    }
  },

  mounted() {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    let publicPath =
      process.env.NODE_ENV === "production" ? "/Short-book/" : "/";
    axios({
      method: "get",
      url: `${publicPath}static/moock/recommended.json`
      // responseType: "stream"
    }).then(res => {
      console.log("this", this);
      console.log(res, this.current);
      // return res.data;
      this.alluser = res.data.users;
      // this.flag = "全部关注";
      // this.current.source.notes = res.data.notes;
      setTimeout(() => {
        // this.skeleton = false;
      }, 300);
    });
  }
};
</script>
<style scoped>
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.rotate {
  display: inline-block;
  /* transform: rotate(360deg); */
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}

* {
  padding: 0;
  margin: 0;
}

#right {
  float: right;
  width: 280px;
  /* min-height: 2000px; */
  margin-top: 30px;
  margin-left: 4%;
}
.board {
  margin-top: -4px;
}

.board img {
  display: block;
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
}

.downloadApp {
  /* width: 245px; */
  /* width: 100%; */
  /* height: 81px; */
  padding: 10px 20px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  position: relative;
  /* display: inline-block; */
}

.ewmbig {
  /* display: none; */
  position: absolute;
  z-index: 10;
  top: -230px;
  left: 36px;
  width: 180px;
  /* height: 180px; */
  background-color: #ffffff;
  border: 1px solid #cccccc;
}

.ewmbig img {
  margin: 0 auto;
  padding: 10px;
  display: block;
}

.ewmbig div {
  width: 19px;
  height: 19px;
  display: block;
  position: relative;
  left: 80px;
  top: -9px;
  z-index: 6;
  transform: rotate(45deg);
  background-color: white;
}

.ewm {
  /* position: relative;
  top: 0px;
  float: left; */
  width: 60px;
  height: 60px;
  /* margin: 10px 10px 0 20px; */
  z-index: -1;
  display: inline-block;
}

.ewm img {
  vertical-align: bottom;
}

.App {
  position: relative;
  z-index: -1;
  display: inline-block;
  vertical-align: sub;
  margin-left: 7px;
}

.App p:first-child {
  font-size: 14px;
  /* margin-top: 20px; */
}

.App p:last-child {
  /* margin-top: 4px; */
  font-size: 12px;
  color: #999;
}
.App p:nth-of-type(2) {
  margin-top: 4px;
  font-size: 13px;
  color: #999;
}

.adv {
  width: 280px;
  height: 160px;
  margin-top: 50px;
}

.change {
  margin: 20px 0;
  height: auto;
}

.changeL {
  display: inline-block;
  width: 70%;
  text-align: left;
  font-size: 14px;
  color: #969696;
  margin-top: 6px;
}

.changeR {
  display: inline-block;
  width: 30%;
  text-align: right;
  font-size: 14px;
  color: #969696;
}

.changeR img {
  position: relative;
  top: 4px;
}

.authorItem {
  margin: 20px 0;
}

.aItop {
  width: 280px;
  height: 44px;
  display: flex;
  justify-content: space-between;
}

.aIhead {
  height: 48px;
  width: 48px;
}

.aIhead img {
  border-radius: 48px;
}

.aItitle {
  height: 44px;
  width: 170px;
  font-size: 14px;
  margin-top: 5px;
}

.aIstart {
  font-size: 13px;
  color: #42c02e;
  text-align: right;
  margin-top: 5px;
}

.aImark {
  text-align: center;
  margin-top: 2px;
  font-size: 12px;
  color: #969696;
}

.searchbox {
  width: 280px;
  height: auto;
}

.searchAll {
  padding: 7px 7px 7px 12px;
  margin: 20px auto;
  left: 0;
  width: 198px;
  font-size: 13px;
  color: #787878;
  text-align: center;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
@media (max-width: 820px) {
  #right {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .board img {
    width: 100%;
  }
}
@media (max-width: 820px) {
  .board img {
    width: 100%;
  }
  .adv {
    width: 100%;
  }
  .adv img {
    width: 100%;
  }
  .aItop {
    width: 100%;
  }
  .searchbox {
    width: 100%;
  }
  .searchAll {
    display: none;
  }
}
</style>
