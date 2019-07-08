<template>
  <div class="all">
    <nav>
      <a :href="home" class="loog">
        <img src="https://i.loli.net/2019/06/03/5cf4cb157a3e099106.png" />
      </a>
      <div class="button">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#menu"
          aria-expanded="false"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <ul class="searhbar">
        <router-link tag="li" to="/" exact class="beijing">
          <i class="iconfont icon-zhinanzhen" style="font-size:20px;"></i>
          <span>发现</span>
        </router-link>
        <router-link class="beijing" tag="li" to="/subscriptions">
          <i
            class="iconfont icon-yewutubiao_tushuguanlixitong"
            style="font-size:20px;"
          ></i>
          <span>关注</span>
        </router-link>
        <!-- <li class="beijing"></li> -->
        <router-link
          class="beijing"
          tag="li"
          to="/notifications"
          @mouseenter.native="enter"
          @mouseleave.native="leave"
        >
          <a href="/notifications">
            <i class="iconfont icon-lingdang" style="font-size:25px;"></i>
            <span>消息</span>
          </a>

          <div class="xiaoxi" v-show="seen">
            <ul class="dropdown-menu">
              <li>
                <a href="/notifications/comments">
                  <i
                    class="iconfont icon-pinglun iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>评论</span>
                </a>
              </li>
              <li>
                <a href="/notifications/chats">
                  <i
                    class="iconfont icon-xinfeng iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>简信</span>
                </a>
              </li>
              <li>
                <a href="/notifications/requests">
                  <i
                    class="iconfont icon-shangchuan iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>投稿请求</span>
                </a>
              </li>
              <li>
                <a href="/notifications/likes">
                  <i
                    class="iconfont icon-aixin iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>喜欢和赞</span>
                </a>
              </li>
              <li>
                <a href="/notifications/follows">
                  <i
                    class="iconfont icon-aixin iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>关注</span>
                </a>
              </li>
              <li>
                <a href="/notifications/money">
                  <i
                    class="iconfont icon-50 iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>赞赏和付费</span>
                </a>
              </li>
              <li>
                <a href="/notifications/others">
                  <i
                    class="iconfont icon-gengduo iconfontt"
                    style="color:#EA6F5A;"
                  ></i>
                  <span>其它提醒</span>
                </a>
              </li>
            </ul>
          </div>
        </router-link>
        <li class>
          <input
            class="sousuo"
            type="text"
            placeholder="搜索"
            @focus="xian"
            @blur="mei"
          />
          <span class="fangda" ref="kuang">
            <i class="iconfont icon-search"></i>
          </span>
          <div
            class="xuanxiang"
            @mouseenter="show1"
            @mouseleave="mei1"
            id="tip"
            v-show="play"
          >
            <div class="search-trending">
              <div class="search-trending-header clearfix">
                <span>热门搜索</span>
                <a @click="order">
                  <i
                    :class="{ rotate: rotate }"
                    class="iconfont icon-Change"
                    style="transform: rotate(0deg);"
                  ></i>
                  换一批
                </a>
              </div>
              <ul class="search-trending-tag-wrap">
                <li :key="index" v-for="(item, index) in hot">
                  <a href target="_blank">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <div class="nav-r">
        <b v-clickoutside="closeab" class="changgefont">
          <p class="aa" style="margin-right:20px;" @click="aa">Aa</p>
          <div class="moshi">
            <div class="style-mode">
              <transition name="fade">
                <div class="popover-modal" v-show="ab">
                  <div class="meta">
                    <i class="iconfont icon-moon"></i>
                    <span>夜间模式</span>
                  </div>
                  <div class="switch day-night-group">
                    <a
                      @click="black"
                      class="switch-btn"
                      :class="{ active: background === '开' }"
                      >开</a
                    >
                    <a
                      @click="white"
                      class="switch-btn"
                      :class="{ active: background === '关' }"
                      >关</a
                    >
                  </div>
                  <hr />
                  <div class="switch font-family-group">
                    <a class="switch-btn font-song">宋体</a>
                    <a class="switch-btn font-hei active">黑体</a>
                  </div>
                  <div class="switch">
                    <a class="switch-btn active">简</a>
                    <a class="switch-btn">繁</a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </b>
        <img
          @click="vip = true"
          class="ziti"
          src="https://i.loli.net/2019/06/03/5cf4d03c0a46996975.png"
        />
        <div v-show="vip">
          <div class="_2MIQ6sBppQZAKea91We0qf_0"></div>
          <div class="_1RppgOJ_CQiXgzd3ke-sbJ_0">
            <h4>
              简书钻相关功能，目前仅能在
              <span>简书App</span> 查看
            </h4>
            <div>
              <img
                src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              />
            </div>
            <p>扫码下载 简书App</p>
            <div @click="vip = false" class="_2WUz9DZJO5DIC_O5sD1kac_0">
              我知道了
            </div>
          </div>
        </div>
        <div
          class="touxiangbeg beijing"
          style="padding: 0 20px;"
          @mouseenter="ente"
          @mouseleave="leav"
        >
          <img
            class="touxiang"
            src="//upload.jianshu.io/users/upload_avatars/18237643/73fb66d7-d5a9-4b61-a492-33b6426db455?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
            alt="120"
          />
          <i class="iconfont icon-xiala"></i>
          <div class="gerenzhongxin">
            <ul class="dropdown-menu" v-show="see">
              <router-link tag="li" to="/Home" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-wo iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/Home"> -->
                  <span>我的主页</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link tag="li" to="/collection" class="xiao">
                <!-- TODO bookmarks_path -->
                <a href>
                  <i
                    class="iconfont icon-shuqian iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/collection"> -->
                  <span>收藏的文章</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link to="/Home" tag="li" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-aixin1 iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/About"> -->
                  <span>喜欢的文章</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link to="/yigou" tag="li" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-50 iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/yigou"> -->
                  <span>已购内容</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link to="/wodeqianbao" tag="li" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-qianbao iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/wodeqianbao"> -->
                  <span>我的钱包</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link to="/setting" tag="li" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-icon_set_up iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/setting"> -->
                  <span>设置</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <router-link to="/help" tag="li" class="xiao">
                <a href>
                  <i
                    class="iconfont icon-duihuakuang3 iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <!-- <router-link to="/help"> -->
                  <span>帮助与反馈</span>
                  <!-- </router-link> -->
                </a>
              </router-link>
              <li class="xiao">
                <a rel="nofollow" data-method="delete" href="/">
                  href="/">
                  <i
                    class="iconfont icon-tuichu iconfontt"
                    style="color:#EA6F5A"
                  ></i>
                  <span>退出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button class="xie">
          <router-link to="/edit">
            <i class="iconfont icon-icon-pencil"></i>
            <span>写文章</span>
          </router-link>
        </button>
      </div>
    </nav>
    <div class="nav-inner"></div>
  </div>
</template>
<script>
import { setTimeout } from 'timers'
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
export default {
  name: 'tou',
  data() {
    return {
      play: false,
      seen: false,
      see: false,
      ab: false,
      blur: false,
      show: false,
      hot: [
        '手帐',
        '书法',
        'PPT',
        '穿搭',
        '打碗碗花',
        '简书',
        '姥姥的澎湖湾',
        '设计',
        '创业',
        '交友'
      ],
      background: '关',
      isnav: false,
      rotate: false,
      vip: false,
      home: process.env.NODE_ENV === 'production' ? '/Short-book/' : '/'
    }
  },
  directives: { clickoutside },
  mounted() {
    document.addEventListener('click', this.link)

    let meta = document.createElement('meta')
    meta.name = 'referrer'
    meta.content = 'no-referrer'
    document.querySelector('head').appendChild(meta)

    document
      .querySelector('.navbar-toggle.collapsed')
      .addEventListener('click', () => {
        let temp = document.querySelector('.searhbar').style.display
        if (temp === '') {
          document.querySelector('.searhbar').style.display = 'block'
        } else if (temp === 'block') {
          document.querySelector('.searhbar').style.display = 'none'
        } else if (temp === 'none') {
          document.querySelector('.searhbar').style.display = 'block'
        }
        // temp === "block" ? (temp = "none") : (temp = "block");
        // console.log(temp, temp === "block");
        // document.querySelector(".searhbar").style.display = "block";
      })
  },
  destroyed() {
    document.removeEventListener('click', this.link)
  },
  methods: {
    closeab() {
      this.ab = false
    },
    link(e) {
      // e = event;
      // console.log(e);
      // console.log(e.target.classList.contains("sousuo"));
      if (e.target.classList.contains('sousuo') === false) {
        // console.log(222);
        if (document.querySelector('#tip').contains(e.target) === true) {
          console.log('存在')
          return
        }
        document.querySelector('#tip').style.display = 'none'
      } else {
        document.querySelector('#tip').style.display = ''
      }
      // e.target.classList.contains("search-trending-header") === false
    },
    black() {
      document.body.className = 'reader-night-mode'
      document.querySelector('.all').className = 'all reader-night-mode'
      document.querySelector('nav').className = 'reader-night-mode'
      this.background = '开'
      this.ab = false
    },
    white() {
      document.body.className = ''
      document.querySelector('.all').className = 'all'
      document.querySelector('nav').className = ''
      this.background = '关'
      this.ab = false
    },
    order() {
      let a = this.hot
      let len = a.length
      let shuffled = Array(len)
      this.rotate = true
      for (let i = len; i--; ) {
        let rand = ~~(Math.random() * i)
        shuffled[i] = a[rand]
        a[rand] = a[i]
      }

      // return shuffled;
      this.hot = shuffled
      setTimeout(() => {
        this.rotate = false
      }, 500)
    },
    xian: function() {
      this.play = true
      this.$refs.kuang.style.backgroundColor = '#969696'
      this.$refs.kuang.style.color = '#ffffff'
      this.blur = true
      this.show = true
    },
    mei: function() {
      // if (this.show === true) {
      //     console.log("111")
      //
      // }
      // this.play = false;
      this.$refs.kuang.style.backgroundColor = ''
      this.$refs.kuang.style.color = ''
      this.blur = false
      console.log(this.play)
    },
    mei1() {
      if (this.blur === true) {
        this.play = true
        console.log('blur')
        // return
      } else {
        this.play = false
      }
      // this.play === true ?
    },
    show1() {
      // if (this.blour === true) {
      //     this.play = true
      // }
    },
    enter() {
      console.log(this.seen, '11111')
      this.seen = true
    },
    leave() {
      this.seen = false
      this.current = null
    },
    ente() {
      this.see = true
    },
    leav() {
      this.see = false
      this.current = null
    },
    aa() {
      this.ab = !this.ab
    }
  }
}
</script>

<style lang="scss" scoped>
._1RppgOJ_CQiXgzd3ke-sbJ_0 ._2WUz9DZJO5DIC_O5sD1kac_0 {
  background-color: #e9634c;
  color: #fff;
  margin: 25px auto 0;
  width: 190px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
._1RppgOJ_CQiXgzd3ke-sbJ_0 p {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
img {
  vertical-align: middle;
}
._1RppgOJ_CQiXgzd3ke-sbJ_0 img {
  width: 190px;
  height: 190px;
  margin: 12px 0 8px 0;
}
._1RppgOJ_CQiXgzd3ke-sbJ_0 h4 span {
  color: #e9634c;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.h4,
h4 {
  font-size: 18px;
}
._1RppgOJ_CQiXgzd3ke-sbJ_0 h4 {
  margin: 0;
  line-height: 25px;
}
._1RppgOJ_CQiXgzd3ke-sbJ_0 {
  position: fixed;
  left: -webkit-calc(50% - 190px);
  left: calc(50% - 190px);
  top: -webkit-calc(50% - 300px);
  top: calc(50% - 300px);
  width: 380px;
  height: 425px;
  background-color: #fff;
  padding: 40px 72px 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1000;
  text-align: center;
}
._2MIQ6sBppQZAKea91We0qf_0 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  z-index: 1000;
}

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
  // transform: rotate(360deg);
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
}
.ziti {
  cursor: pointer;
}
.changgefont {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  -webkit-transform: translate3d(0, -5%, 0);
  transform: translate3d(0, -5%, 0);
  transition: 0.3s;
}
.style-mode .icon-moon {
  position: relative;
  top: 2px;
  margin-right: 5px;
  font-size: 17px;
}
.style-mode hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 20px -20px;
  border-color: #f0f0f0;
}
.beijing a {
  color: #2c3e50;
}
.router-link-active {
  color: #ea6f5a;
  // background: none;
}
.router-link-active a {
  color: #ea6f5a;
  // background: none;
}
.beijing {
  cursor: pointer;
}
.reader-night-mode {
  background-color: #3f3f3f;
  color: #c8c8c8;
}
.nav-inner {
  height: 60px;
}

* {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  /*border-bottom: 1px #f0f0f0 solid;*/
  position: fixed;
  width: 100%;
  background-color: #fff;
  top: 0;
  z-index: 999;
}

.nav-r {
  display: flex;
  justify-content: space-between;
  //   width: 21%;
  width: auto;
  margin-right: 20px;
}

.loog > img {
  width: 100px;
}

nav > ul {
  display: flex;
  width: 50%;
}

nav > ul > li {
  list-style: none;
  line-height: 60px;
  font-size: 18px;
  padding: 0 20px;
  margin-left: 13px;
}

.sousuo {
  padding: 0 40px 0 20px;
  width: 220px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline: none;
  margin-top: -12px;
  transition: width 0.5s;
}

input:focus {
  width: 320px;
}

.fangda {
  border-radius: 30px;
  /* background-color: #787878; */
  width: 30px !important;
  height: 30px !important;
  line-height: normal !important;
  /* padding: 0 !important; */
  text-align: center;
  line-height: 30px !important;
  position: fixed;
  top: 15px;
  margin-left: -37px;
}

.xie {
  width: 100px;
  height: 40px;
  line-height: 24px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  outline: none;
  border: 1px #ea6f5a solid;
}
.xie a {
  color: #fff;
}

// .xie:before {
//   content: "";
//   position: absolute;
//   top: 18px;
//   right: -14px;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 6px solid #999;
// }

.ziti {
  height: 25px;
  margin-top: 16px;
}

.touxiangbeg {
  line-height: 60px;
  display: flex;
}

.touxiang {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-top: 8px;
  border: 1px rgb(92, 92, 92) solid;
}

.aa {
  color: #969696;
  font-size: 20px;
  margin-top: 15px;
}

.xuanxiang {
  width: 250px;

  top: 58px;
  /* visibility: visible; */
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  /* z-index: 999; */

  background: #fff;
}

.search-trending-tag-wrap {
  line-height: 1em;
}

.search-trending {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
}

.search-trending-header {
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  line-height: 12px;
}

.search-trending .search-trending-header span {
  /* float: left; */
  font-size: 14px;
  color: #969696;
}

.search-trending .search-trending-header a {
  /* float: right; */
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  margin: 0;
}

.search-trending .search-trending-tag-wrap li {
  margin-right: 10px;
  display: inline-block;
  line-height: 28px;
}

.search-trending .search-trending-tag-wrap li a {
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 0;
}

.beijing:hover {
  background-color: rgba(245, 245, 245);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  // z-index: 1000;
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

.dropdown-menu li {
  padding: 10px 0;
  font-size: 16px;
  list-style: none;
  // z-index: 999;
  //   width: 240px;
}

.dropdown-menu li:hover {
  background-color: rgba(245, 245, 245);
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

.xiaoxi {
  position: fixed;
  top: 58px;
  margin-left: -20px;
  // z-index: 1000;
}

.gerenzhongxin {
  position: fixed;
  top: 58px;
  margin-left: -20px;
  z-index: 1000;
}

a {
  text-decoration: none;
}

*,
:after,
:before {
  box-sizing: border-box;
}

.style-mode-btn {
  float: right;
  line-height: 20px;
  padding: 17px 10px;
  font-size: 24px;
  color: #969696;
}

.style-mode .popover-modal {
  position: absolute;
  top: 56px;
  z-index: 1;
  padding: 20px 20px 20px 24px;

  min-width: 235px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.1));
  -webkit-filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.1));
}

.style-mode .popover-modal:after,
.style-mode .popover-modal:before {
  position: absolute;
  top: -10px;
  left: 78%;
  content: '';
  display: inline-block;
  border: 9px solid transparent;
  border-top: none;
}

.style-mode .meta {
  padding-left: 4px;
  margin-right: 16px;
  font-size: 14px;
  color: #969696;
  line-height: 40px;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .ic-navigation-night {
  position: relative;
  top: 2px;
  margin-right: 5px;
  font-size: 17px;
}

.style-mode .meta span {
  vertical-align: middle;
}

.style-mode .day-night-group {
  width: auto;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .switch {
  font-size: 0;
  letter-spacing: -4px;
  line-height: 1.42857;
}

.style-mode .switch-btn:first-child {
  padding: 10px 13px 10px 17px;
  border-radius: 20px 0 0 20px;
  border-right: none;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
}

.style-mode .switch-btn.active {
  color: #fff;
  background-color: #6dacf4;
  border-color: #6dacf4;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}

.style-mode .switch-btn:last-child {
  padding: 10px 17px 10px 13px;
  border-radius: 0 20px 20px 0;
  border-left: none;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .font-family-group {
  margin-bottom: 10px;
}

.style-mode .switch {
  font-size: 0;
  letter-spacing: -4px;
}

.style-mode .switch-btn:first-child {
  padding: 10px 13px 10px 17px;
  border-radius: 20px 0 0 20px;
  border-right: none;
}

.style-mode .font-song {
  font-family: Georgia, Times New Roman, Times, Songti SC, serif;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .switch-btn.active {
  color: #fff;
  background-color: #6dacf4;
  border-color: #6dacf4;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}

.style-mode .switch-btn:last-child {
  padding: 10px 17px 10px 13px;
  border-radius: 0 20px 20px 0;
  border-left: none;
}

.style-mode .font-hei {
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .switch {
  font-size: 0;
  letter-spacing: -4px;
}

.style-mode .switch-btn.active {
  color: #fff;
  background-color: #6dacf4;
  border-color: #6dacf4;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}

.style-mode .switch-btn:first-child {
  padding: 10px 13px 10px 17px;
  border-radius: 20px 0 0 20px;
  border-right: none;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
}

.style-mode .switch-btn:last-child {
  padding: 10px 17px 10px 13px;
  border-radius: 0 20px 20px 0;
  border-left: none;
}

.style-mode .switch-btn {
  width: 49%;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0 !important;
  color: #969696;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  display: inline-block;
}

.moshi {
  position: absolute;
  top: 5px;
}

.iconfontt {
  font-size: 25px;
  padding-right: 20px;
}

.xiao {
  width: 180px !important;
  padding: 0 !important;
  z-index: 999;
}

nav .loog {
  width: 20%;
}

nav > ul {
  width: 50%;
}

nav .nav-r {
  width: auto;
}

nav .navbar-toggle {
  outline: none;
  float: left;
  padding: 11px 10px;
  margin-top: 9px;
}

.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #2f2f2f;
}

.navbar-toggle .icon-bar {
  background-color: #888;
}

.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

.button {
  width: 50%;
  display: none;
}

@media (max-width: 1400px) {
  .icon-zhinanzhen {
    display: none;
  }
  .icon-yewutubiao_tushuguanlixitong {
    display: none;
  }
  .icon-lingdang {
    display: none;
  }
}
@media (max-width: 1300px) {
  input:focus {
    width: 150px;
  }
  .sousuo {
    width: 150px;
  }
}
@media (max-width: 1020px) {
  //   input:focus {
  //     width: 150px;
  //   }
  //   .sousuo {
  //     width: 150px;
  //   }
  // nav ul li{
  //     display: none;
  // }

  .icon-zhinanzhen {
    display: block;
  }
  .icon-yewutubiao_tushuguanlixitong {
    display: block;
  }
  .icon-lingdang {
    display: block;
  }
  //   nav ul li{
  //       display: none;
  //   }
  .beijing > span {
    display: none;
  }
  .beijing > a > span {
    display: none;
  }
  nav > ul > li {
    padding: 0 15px;
    margin-left: 0;
  }
  .xie {
    min-width: 70px;
  }
}

@media (max-width: 820px) {
  .container {
    flex-wrap: wrap;
  }
  .searhbar {
    // border: 1px solid;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100%;
    position: absolute;
    top: 59px;
    width: 100vw !important;
    li {
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      .iconfont {
        display: none;
      }
      .icon-search {
        display: block;
      }
      span {
        text-align: center;
        display: block !important;
      }
    }
  }
  .fangda {
    // position: unset !important;
    position: relative !important;
    bottom: 43px;
    // border: 1px solid;
    right: -90%;
    top: unset !important;
    margin-left: unset !important;
  }
  .sousuo {
    width: 100% !important;
  }
}

@media (max-width: 888px) {
  .searhbar {
    display: none;
  }
  .button {
    display: block;
  }
}
@media (max-width: 820px) {
  .xuanxiang {
    top: unset;
  }
  .icon-Change {
    display: inline-block !important;
  }
}
@media (max-width: 480px) {
  .ziti {
    display: none;
  }
  .touxiangbeg {
    display: none;
  }
  .style-mode .popover-modal {
    left: -48vw;
  }
  .xie {
    display: none;
  }
}
</style>
