<template>
  <div id="outer-container">
    <ul class="trigger-menu">
      <li class @click="topath('/article')">
        <div href :class="{ active :$route.name === 'home-article'}">
          <i class="iconfont ic-articles">&#xe63a;</i>
          文章
        </div>
      </li>
      <li @click="topath('/comments')">
        <div href :class="{ active :$route.name === 'home-comments'}">
          <i class="iconfont ic-articles">&#xe642;</i>
          动态
        </div>
      </li>
      <li @click="topath('/dynamic')">
        <div href :class="{ active:$route.name === 'home-dynamic'}">
          <i class="iconfont ic-articles">&#xe618;</i>
          最新评论
        </div>
      </li>
      <li @click="topath('/hot')">
        <div href :class="{ active:$route.name === 'home-hot'}">
          <i class="iconfont ic-articles">&#xe638;</i>
          热门
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "normalize.css";

export default {
  // name: "tab"
  // data() {
  //   return ({
  //     list: [
  //
  //     ]
  //   })
  // },
  methods: {
    topath(path) {
      // console.log(this.$route.name);
      // console.log(this);
      // console.log(path);
      // console.log(this.$router);
      this.$router.push(`/Home${path}`);
      // console.log(`/Home${path}`);
    }
  }
};
</script>

<style scoped>
*,
:after,
:before {
  box-sizing: border-box;
  text-decoration: none;
}

#outer-container {
  /*margin-right: 35%;*/
  width: 100%;
}

#list-container {
  text-align: left;
}

ul {
  padding-left: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.trigger-menu {
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}

.trigger-menu li.active {
  border-bottom: 2px solid #646464;
}

.trigger-menu li {
  position: relative;
  display: inline-block;
  /*padding: 8px 0;*/
  /*margin-bottom: -1px;*/
}

li {
  line-height: 20px;
}

.trigger-menu .active div,
.trigger-menu div:hover {
  color: #646464;
  border-bottom-style: solid;
}

.active {
  color: #646464;
  border-bottom-style: solid;
}

.trigger-menu div {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #969696;
  line-height: 25px;
  text-decoration: none;
}

.trigger-menu i {
  margin-right: 5px;
  font-size: 17px;
}

.iconfont {
  font-family: iconfont !important;
  font-size: inherit;
  font-style: normal;
  font-weight: 400 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*.ic-articles:before {*/
/*content: "\E60A";*/
/*}*/
.trigger-menu li:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 100%;
  opacity: 0;
  border-bottom: 2px solid #646464;
  -webkit-transform: translate(-50%) scaleX(0);
  transform: translate(-50%) scaleX(0);
  transition: 0.2s ease-in-out;
}

.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}

.note-list .author {
  margin-bottom: 14px;
  font-size: 13px;
}

.note-list .author .avatar,
.note-list .author .info {
  display: inline-block;
  vertical-align: middle;
}

.note-list .author .avatar {
  margin: 0 5px 0 0;
}

.note-list .author a {
  color: #333;
}

.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.note-list .author .info .nickname {
  vertical-align: middle;
}

.note-list .author .info span {
  display: inline-block;
  padding-left: 3px;
  color: #969696;
  vertical-align: middle;
}

.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #969696;
}

.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}

p {
  margin: 0 0 10px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.note-list .origin-author {
  display: inline;
  margin-bottom: 5px;
  font-size: 12px;
  color: #969696;
}

.note-list .meta a,
.note-list .meta a:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}

.note-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}

.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
</style>