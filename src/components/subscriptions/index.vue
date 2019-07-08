<template>
  <div>
    <navigator></navigator>
    <div class="container subscription">
      <div class="row">
        <div
          v-clickoutside="handleClose"
          class="aside"
          :class="{ open: subshow }"
        >
          <a
            @click="showall"
            data-toggle="dropdown"
            class="change-type"
            aria-expanded="false"
          >
            {{ flag }}
            <i class="iconfont icon-angle-down-copy"></i>
          </a>
          <ul class="dropdown-menu arrow-top">
            <li @click="fetch('all')">
              <a>全部关注</a>
            </li>
            <li @click="fetch('user')">
              <a>只看作者</a>
            </li>
            <li @click="fetch('collection')">
              <a>只看专题</a>
            </li>
            <li @click="fetch('notebook')">
              <a>只看文集</a>
            </li>
            <li @click="fetch('update')">
              <a>只看推送更新</a>
            </li>
          </ul>
          <!-- <a href="#/recommendation" class="add-people">
            <i class="iconfont icon-stianjiayonghu"></i>
            <span>添加关注</span>
          </a>-->
          <ul class="js-subscription-list">
            <router-link tag="li" to="/subscriptions/timeline">
              <a href="#/timeline" class="wrap">
                <div class="avatar">
                  <img
                    src="//cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png"
                    style="border: none;"
                  />
                </div>
                <div class="name">简友圈</div>
              </a>
            </router-link>
            <router-link
              :to="'/subscriptions/subscriptions/' + item.id + '/user'"
              tag="li"
              :key="index"
              v-for="(item, index) in subscriptions"
              v-show="!skeleton"
            >
              <a href="#/timeline" class="wrap">
                <div class="avatar">
                  <img :src="item.avatar_source" style="border: none;" />
                </div>
                <div class="name">{{ item.name }}</div>
              </a>
            </router-link>
            <!-- <router-link tag="li" to="/subscriptions/subscriptions/1616908/user">
              <a href="#/subscriptions/1616908/user" class="wrap">
                <div class="avatar">
                  <img
                    src="//upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"
                  >
                </div>
                <div class="name">极客教程</div>
              </a>
            </router-link>
            <router-link tag="li" to="/subscriptions/subscriptions/11711518/user">
              <a href="#/subscriptions/11711518/user" class="wrap">
                <div class="avatar">
                  <img
                    src="//upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp"
                  >
                </div>
                <div class="name">林清猫耳</div>
              </a>
            </router-link>-->
          </ul>
          <div v-show="skeleton" class="subscription-users-placeholder">
            <div class="avatar"></div>
            <div class="text"></div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
const clickoutside = {
  // 初始化指令
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e)
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  update() {},
  // eslint-disable-next-line no-unused-vars
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
import nav from '../index/tou.vue'
import axios from 'axios'

export default {
  data() {
    return {
      subshow: false,
      subscriptions: '',
      skeleton: true,
      flag: ''
    }
  },
  directives: { clickoutside },
  methods: {
    handleClose() {
      this.subshow = false
    },
    showall() {
      this.subshow = !this.subshow
    },
    fetch(type) {
      let publicPath =
        process.env.NODE_ENV === 'production' ? '/Short-book/' : '/'
      // console.log(type);
      this.subshow = false
      this.skeleton = true
      switch (type) {
        case 'all':
          if (this.flag === '全部关注') {
            this.skeleton = false
            return
          }
          axios({
            method: 'get',
            url: `${publicPath}static/moock/user-collection-notebook-only_push_enabled=true.json`
            // responseType: "stream"
          }).then(res => {
            console.log('this', this)
            console.log(res, this.current)
            // return res.data;
            this.subscriptions = res.data.subscriptions
            this.flag = '全部关注'
            // this.current.source.notes = res.data.notes;
            setTimeout(() => {
              this.skeleton = false
            }, 300)
          })
          break
        case 'user':
          if (this.flag === '只看作者') {
            this.skeleton = false
            return
          }
          axios({
            method: 'get',
            url: `${publicPath}static/moock/user.json`
            // responseType: "stream"
          }).then(res => {
            console.log('this', this)
            console.log(res, this.current)
            // this.current.source.notes = res.data.notes;
            this.flag = '只看作者'
            this.subscriptions = res.data.subscriptions

            setTimeout(() => {
              this.skeleton = false
            }, 300)
          })
          break
        case 'collection':
          if (this.flag === '只看专题') {
            this.skeleton = false
            return
          }
          axios({
            method: 'get',
            url: `${publicPath}static/moock/collection.json`
            // responseType: "stream"
          }).then(res => {
            console.log('this', this)
            console.log(res, this.current)
            // this.current.source.notes = res.data.notes;
            this.flag = '只看专题'
            this.subscriptions = res.data.subscriptions

            setTimeout(() => {
              this.skeleton = false
            }, 300)
          })
          break
        case 'notebook':
          if (this.flag === '只看文集') {
            this.skeleton = false
            return
          }
          axios({
            method: 'get',
            url: `${publicPath}static/moock/notebook.json`
            // responseType: "stream"
          }).then(res => {
            console.log('this', this)
            console.log(res, this.current)
            // this.current.source.notes = res.data.notes;
            this.flag = '只看文集'
            this.subscriptions = res.data.subscriptions

            setTimeout(() => {
              this.skeleton = false
            }, 300)
          })
          break
        case 'update':
          if (this.flag === '只看推送更新') {
            this.skeleton = false
            return
          }
          axios({
            method: 'get',
            url: `${publicPath}static/moock/user-collection-notebook-only_push_enabled=false.json`
            // responseType: "stream"
          }).then(res => {
            console.log('this', this)
            console.log(res, this.current)
            // this.current.source.notes = res.data.notes;
            this.flag = '只看推送更新'
            this.subscriptions = res.data.subscriptions

            setTimeout(() => {
              this.skeleton = false
            }, 300)
          })
          break

        default:
          break
      }
    }
  },
  components: {
    navigator: nav
  },
  computed: {
    // subscriptions() {
    //   return this.fetch;
    // }
  },
  mounted() {
    document.body.style.overflowY = 'scroll'
    let publicPath =
      process.env.NODE_ENV === 'production' ? '/Short-book/' : '/'
    axios({
      method: 'get',
      url: `${publicPath}static/moock/user-collection-notebook-only_push_enabled=true.json`
      // responseType: "stream"
    }).then(res => {
      console.log('this', this)
      console.log(res, this.current)
      this.subscriptions = res.data.subscriptions
      //避免 重复请求数据
      this.flag = '全部关注'
      // this.current.source.notes = res.data.notes;
      setTimeout(() => {
        this.skeleton = false
      }, 300)
    })
  }
}
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
.subscription-users-placeholder .text {
  display: inline-block;
  vertical-align: middle;
  margin-top: -30px;
  width: 40%;
  height: 15px;
  background-color: #eaeaea;
  animation: shortLoading 1s ease-in-out infinite;
  -webkit-animation: shortLoading 1s ease-in-out infinite;
  -moz-animation: shortLoading 1s ease-in-out infinite;
  -o-animation: shortLoading 1s ease-in-out infinite;
  -ms-animation: shortLoading 1s ease-in-out infinite;
}
.subscription-users-placeholder .avatar {
  cursor: default !important;
  width: 40px;
  height: 40px;
  background-color: #eaeaea;
  border-radius: 20px;
}
.subscription .aside .avatar,
.subscription .aside .avatar-collection {
  width: 40px;
  height: 40px;
  margin-right: 4px;
  display: inline-block;
}
.subscription-users-placeholder {
  padding: 10px 13px;
  line-height: 1;
}
.note-list .title:hover {
  text-decoration: underline;
}
a {
  text-decoration: none;
}
.subscription .aside .router-link-active .wrap {
  background-color: #f0f0f0;
  border-radius: 4px 0 0 4px;
}
.open > .dropdown-menu {
  display: block;
}
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.small,
small {
  font-size: 85%;
}
.notes-placeholder .meta .small {
  height: 16px;
  width: 30px;
}
.notes-placeholder .meta i {
  margin: 0 5px;
  vertical-align: middle;
}
.notes-placeholder .meta div {
  display: inline-block;
  vertical-align: middle;
  background-color: #eaeaea;
}
.notes-placeholder .meta .read {
  height: 16px;
  width: 50px;
}
.notes-placeholder .meta {
  margin: 0;
  color: #eaeaea;
  font-size: 12px;
}
.notes-placeholder .text {
  width: 100%;
  height: 16px;
  margin: 0 0 10px;
  background-color: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
.notes-placeholder .animation-delay {
  -webkit-animation: loading 1s ease-in-out -0.5s infinite;
  animation: loading 1s ease-in-out -0.5s infinite;
}
@keyframes loading {
  0% {
    width: 60%;
  }

  50% {
    width: 100%;
  }

  to {
    width: 60%;
  }
}
.notes-placeholder .text {
  width: 100%;
  height: 16px;
  margin: 0 0 10px;
  background-color: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
.notes-placeholder .sub-title {
  display: none;
  width: 70%;
  height: 16px;
  margin: 0 0 15px !important;
  background-color: #eaeaea;
}
.notes-placeholder .title {
  float: none !important;
  width: 50%;
  height: 20px;
  margin: 0 0 15px !important;
  background-color: #eaeaea;
}
.notes-placeholder .title:before {
  content: '' !important;
}
.notes-placeholder .img {
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 125px;
  height: 100px;
  border-radius: 4px;
  background-color: #eaeaea;
}
.notes-placeholder {
  position: relative;
  padding: 15px 2px 0 0;
  margin-bottom: 50px;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .meta a,
.note-list .meta a:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}
.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}
// 保护用户隐私
.note-list .title:visited {
  color: #969696;
}
.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.note-list .have-img > div {
  padding-right: 140px;
}
.note-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.note-list .have-img .wrap-img {
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  width: 125px;
  height: 100px;
}
.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.note-list li.have-img {
  min-height: 140px;
}
.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.trigger-menu li:after {
  content: '';
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
.trigger-menu li:hover:after {
  opacity: 1;
  -webkit-transform: translate(-50%) scaleX(1);
  transform: translate(-50%) scaleX(1);
  transition: 0.2s ease-in-out;
}
.trigger-menu li:after {
  content: '';
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
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #969696;
  line-height: 25px;
}
.trigger-menu .active a,
.trigger-menu a:hover {
  color: #646464;
}
.trigger-menu li.active {
  border-bottom: 2px solid #646464;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  margin-bottom: -1px;
}
.subscription .main .main-top .info {
  margin-top: 10px;
  padding-left: 100px;
  font-size: 14px;
  color: #969696;
}
.subscription .main .main-top .title .name {
  font-size: 21px;
  font-weight: 700;
  vertical-align: middle;
  display: inline;
}
.subscription .main .main-top .title {
  padding: 10px 0 0 100px;
}
.btn-hollow {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
}
.subscription .main .main-top .btn {
  float: right;
  margin: 23px 0 23px 20px;
  font-size: 14px;
}
.subscription .main .main-top .btn-hollow {
  padding: 8px 16px;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-delete,
.btn-gray,
.btn-hollow {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  border-radius: 40px;
  background: none;
}
.btn-hollow {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
}
.subscription .main .main-top .btn {
  float: right;
  margin: 23px 0 23px 20px;
  font-size: 14px;
}
.subscription .main .main-top .btn-hollow {
  padding: 8px 16px;
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
.subscription .main .main-top .avatar,
.subscription .main .main-top .avatar-collection {
  float: left;
  width: 80px;
  height: 80px;
}
.subscription .main .main-top .avatar {
  margin-left: -2px;
}
.load-more {
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  display: block;
}
.notes-placeholder {
  position: relative;
  padding: 15px 2px 0 0;
  margin-bottom: 50px;
}
.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.trigger-menu {
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}
.subscription .main .main-top {
  margin-bottom: 30px;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.subscription .main {
  padding-left: 0;
}
.subscription .aside .name {
  font-size: 14px;
  vertical-align: middle;
  display: inline-block;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
.subscription .aside .avatar,
.subscription .aside .avatar-collection {
  width: 40px;
  height: 40px;
  margin-right: 4px;
  display: inline-block;
}
.subscription .aside .wrap {
  padding: 10px 13px;
  display: block;
}
.subscription .aside li:first-child .wrap {
  border-radius: 0 0 0 4px !important;
}
.subscription .aside li.active .wrap {
  background-color: #f0f0f0;
  border-radius: 4px 0 0 4px;
}
ul {
  padding-left: 0;
}
.subscription .aside ul {
  margin-top: 7px;
  list-style: none;
  border-top: 1px solid #f0f0f0;
}
.subscription .aside .add-people span {
  margin-left: 4px;
}
.subscription .aside .add-people {
  float: right;
  margin: 4px 10px 0 0;
  font-size: 13px;
  color: #333;
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
.subscription .aside .dropdown-menu a {
  padding: 10px 20px;
}
li {
  line-height: 20px;
}
.arrow-top:after {
  top: -9px;
  border-bottom: 9px solid #fff;
}
.arrow-top:after,
.arrow-top:before {
  position: absolute;
  top: -10px;
  left: 45%;
  content: '';
  display: inline-block;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid transparent;
}
.subscription .aside .arrow-top:after,
.subscription .aside .arrow-top:before {
  left: 45%;
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
.subscription .aside ul {
  margin-top: 7px;
  list-style: none;
  border-top: 1px solid #f0f0f0;
}
.subscription .aside .ic-filter {
  margin-left: 5px;
  color: #c8c8c8;
}
.subscription .aside .dropdown-menu {
  top: 23px;
  left: 20px;
  min-width: 130px;
  text-align: center;
}
a {
  cursor: pointer;
}
.subscription .aside .change-type {
  margin-left: 15px;
  font-size: 15px;
}
.subscription .main {
  padding-left: 0;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.col-xs-16 {
  width: 66.66667%;
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
.subscription .aside {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 86px 0 0;
  padding: 0 0 30px;
  width: 280px;
  overflow: auto;
  border-right: 1px solid #f0f0f0;
}
.row:after,
.row:before {
  content: ' ';
  display: table;
}
.row:after {
  clear: both;
}
.row:after,
.row:before {
  content: ' ';
  display: table;
}
.row:after {
  clear: both;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
  // min-width: 768px;
  width: 100%;
}
.subscription .row {
  padding-top: 30px;
}
.container:after,
.container:before {
  content: ' ';
  display: table;
}
.container:after {
  clear: both;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.container:after,
.container:before {
  content: ' ';
  display: table;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
a,
body {
  color: #333;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (max-width: 1080px) {
  .container {
    width: 750px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside {
    width: 218.75px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside .name {
    max-width: 100px;
  }
}
@media (max-width: 1080px) {
  .note-list li.have-img {
    min-height: 112px;
  }
}
@media (max-width: 1080px) {
  .note-list .have-img .wrap-img {
    margin-top: -58px;
    bottom: 40px;
    width: 125px;
    height: 100px;
  }
}
@media (max-width: 1080px) {
  .note-list .have-img > div {
    padding-right: 135px;
  }
}
@media (max-width: 1080px) {
  .notes-placeholder .img {
    width: 125px;
    height: 100px;
  }
}
@media (max-width: 1080px) {
  .notes-placeholder .content {
    padding-right: 135px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside {
    width: 218.75px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}

@media (max-width: 1080px) {
  .container {
    width: 750px;
  }
}
// @media (min-width: 992px) {
//   .container {
//     width: 960px;
//   }
// }
// @media (min-width: 1081px) {
//   .container {
//     width: 960px;
//   }
// }

// @media (min-width: 992px) {
//   .container {
//     width: 970px;
//   }
// }

// @media (min-width: 768px) {
//   .container {
//     width: 750px;
//   }
// }
@media (max-width: 770px) {
  .subscription .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
  }
  .subscription .aside {
    position: unset !important;
    margin-top: 0;
    width: 100%;
  }
  .subscription .main {
    margin-left: 0;
    width: 100vw;
  }
  .note-list {
    width: 100vw;
  }
  .trigger-menu {
    width: 100vw;
  }
  .main-top {
    width: 100vw;
  }
  .js-subscription-list {
    width: calc(100vw - 30px);
  }
  .load-more {
    width: 100vw;
    margin: 0;
  }
  .container {
    width: 100vw;
  }
}
</style>
