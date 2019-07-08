<template>
  <div class="v-tooltip-wrap v-tooltip-jianshu v-tooltip-wrap-bottom">
    <div id="v-tooltip-id-qvk" class="v-tooltip">
      <div class="tips-card-loading" v-show="!loading">
        <div class="avatar"></div>
        <div class="name"></div>
        <div class="content">
          <div class="text"></div>
          <div class="text-delay"></div>
        </div>
        <div class="meta meta-1">
          <div class="count"></div>
          <div class="type"></div>
        </div>
        <div class="meta meta-2">
          <div class="count"></div>
          <div class="type"></div>
        </div>
        <div class="meta meta-3">
          <div class="count"></div>
          <div class="type"></div>
        </div>
        <div class="button message"></div>
        <div class="button follow"></div>
      </div>
      <div class="tips-card" v-show="loading">
        <div class="card-content">
          <div class="summary">
            <a
              target="_blank"
              href="/u/b2c7e3667ad8"
              class="avatar"
              style='background-image: url("//upload.jianshu.io/users/upload_avatars/10417678/8a469eea-caa2-4b5f-8a67-aefd4f1f8a1b?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp");'
            ></a>
            <div class="name">
              <a target="_blank" href="/u/b2c7e3667ad8" class="nickname"
                >Yu_ecee</a
              >
              <!---->
              <!---->
            </div>
            <div class="intro block">暂无个人简介</div>
            <div class="list"></div>
          </div>
        </div>
        <div class="card-footer">
          <div class="profile">
            <div>
              <span class="count">0</span>
              <span class="type">文章</span>
            </div>
            <div>
              <span class="count">1</span>
              <span class="type">关注</span>
            </div>
            <div>
              <span class="count">0</span>
              <span class="type">粉丝</span>
            </div>
          </div>
          <div class="social">
            <a
              target="_blank"
              href="/notifications#/chats/new?mail_to=10417678"
              class="message"
              >发简信</a
            >
            <button data-v-6292e408="" class="off  user-follow-button">
              <i data-v-6292e408="" class="iconfont"></i
              ><span data-v-6292e408="">关注</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow arrow-type-bottom">
      <i><em></em></i>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers'
export default {
  name: 'tooltip',
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      falg: this.$props.show,
      loading: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
a {
  //   color: #337ab7;
  text-decoration: none;
}
.arrow em {
  display: block;
  position: absolute;
  left: -9px;
  border-width: 9px;
  border-color: transparent;
  margin: 0;
  padding: 0;
}
.arrow-type-bottom em {
  border-style: dashed dashed solid;
  border-bottom-color: #ffffff;
  top: -8px;
}
.arrow i {
  position: absolute;
  left: 50%;
  margin: 0;
  margin-left: -10px;
  border-width: 10px;
  border-color: transparent;
  padding: 0;
}
.arrow-type-bottom i {
  border-bottom-color: #d9d9d9;
  border-style: dashed dashed solid;
  top: -10px;
}
.arrow {
  position: absolute;
  width: 100%;
  height: 10px;
  left: 0;
  z-index: 20;
  pointer-events: none;
}
.arrow-type-bottom {
  top: 1px;
}
.user-follow-button span {
  margin-left: 2px;
}
button * {
  pointer-events: none;
}
.user-follow-button {
  text-align: center;
  border-radius: 40px;
  font-weight: 400;
  border: 1px solid transparent;
  line-height: normal;
}
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: auto !important;
  cursor: pointer;
}
.user-follow-button.off {
  color: #fff;
  background-color: #42c02e;
}
.tips-card .card-footer .social .user-follow-button {
  font-size: 15px;
  padding: 8px 0;
  width: 100px;
}
.tips-card .card-footer .social .message {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e;
  margin: 0 10px 0 16px;
  font-size: 15px;
  padding: 8px 0;
  width: 90px;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tips-card .card-footer .social {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  float: right;
  overflow: hidden;
  _zoom: 1;
}
.tips-card .card-footer .profile div span {
  display: block;
  width: 100%;
  text-align: center;
}
.tips-card .card-footer .profile div .type {
  font-size: 13px;
  color: #999999;
}
.tips-card .card-footer .profile div span {
  display: block;
  width: 100%;
  text-align: center;
}
.tips-card .card-footer .profile div .count {
  font-size: 18px;
  color: #333333;
}
.tips-card .card-footer .profile div {
  float: left;
  width: 60px;
  height: 44px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.tips-card .card-footer .profile {
  width: 198px;
  overflow: hidden;
  _zoom: 1;
  float: left;
}
.tips-card .card-footer {
  border-top: 1px solid #f0f0f0;
  padding: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  _zoom: 1;
}
.tips-card .card-content .summary .intro {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
}
.tips-card .card-content .summary .intro.block {
  color: #999999;
}
.tips-card .card-content .summary .name .nickname {
  color: #333333;
  font-size: 19px;
  font-weight: bold;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.note .post .comment-list .name {
  font-size: 15px;
  color: #333;
}
.tips-card .card-content .summary .name {
  height: 26px;
  margin-right: 3px;
  margin-bottom: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.note .post .comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}
.tips-card .card-content .summary .avatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 72px;
  height: 72px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #eaeaea;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.tips-card .card-content .summary {
  padding: 8px 0 20px 90px;
  min-height: 92px;
  position: relative;
}
.tips-card .card-content {
  padding: 20px 20px 0 20px;
}
.tips-card-loading,
.tips-card {
  width: 460px;
  position: relative;
  left: 0;
  top: 0;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  -webkit-box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #d9d9d9;
}
.tips-card {
  z-index: 10;
}
.v-tooltip-container .v-tooltip-wrap {
  position: absolute;
}
.v-tooltip-container .v-tooltip-wrap.v-tooltip-wrap-bottom {
  top: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  padding-top: 10px;
}
.tips-card-loading .button {
  position: absolute;
  bottom: 17px;
  width: 90px;
  height: 40px;
  border-radius: 40px;
}
.tips-card-loading .follow {
  right: 17px;
}
.tips-card-loading .button {
  position: absolute;
  bottom: 17px;
  width: 90px;
  height: 40px;
  border-radius: 40px;
}
.tips-card-loading .message {
  right: 120px;
}
.tips-card-loading .meta.meta-3 {
  left: 150px;
}
.tips-card-loading .meta.meta-2 {
  left: 90px;
}
.tips-card-loading .meta .count,
.tips-card-loading .meta .type {
  position: absolute;
}
.tips-card-loading .meta .type {
  left: 1px;
  bottom: 2px;
  height: 13px;
  width: 28px;
}
.tips-card-loading .meta .count,
.tips-card-loading .meta .type {
  position: absolute;
}
.tips-card-loading .meta .count {
  left: -5px;
  top: 6px;
  height: 18px;
  width: 40px;
}
.tips-card-loading .meta {
  width: 30px;
  height: 42px;
  position: absolute;
  bottom: 20px;
  background-color: transparent;
}
.note .post .comment-list .meta {
  font-size: 12px;
  color: #969696;
}
.tips-card-loading .meta.meta-1 {
  left: 30px;
}
.tips-card-loading .content .text,
.tips-card-loading .content .text-delay {
  height: 14px;
  position: absolute;
  left: 0;
  width: 100%;
}
.tips-card-loading .content .text-delay {
  bottom: 3px;
  -webkit-animation: loading-data-v-f3bf5228 1s ease-in-out -0.5s infinite;
  animation: loading-data-v-f3bf5228 1s ease-in-out -0.5s infinite;
}
@keyframes loading {
  0% {
    width: 60%;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 60%;
  }
}
.tips-card-loading div {
  background-color: #eaeaea;
}
.tips-card-loading .content .text,
.tips-card-loading .content .text-delay {
  height: 14px;
  position: absolute;
  left: 0;
  width: 100%;
}
.tips-card-loading .content .text {
  top: 2px;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
.note .post .comment-list .normal-comment-list .text {
  margin-bottom: 50px;
  text-align: center;
  font-size: 12px;
  color: #969696;
}
.tips-card-loading .content {
  position: absolute;
  left: 110px;
  top: 62px;
  width: 238px;
  height: 39.2px;
  background-color: transparent;
}
.tips-card-loading div {
  background-color: #eaeaea;
}
.tips-card-loading .name {
  width: 120px;
  height: 20px;
  position: absolute;
  left: 110px;
  top: 31px;
}
.note .post .comment-list .name {
  font-size: 15px;
  color: #333;
}
.tips-card-loading div {
  background-color: #eaeaea;
}
.tips-card-loading .avatar {
  width: 72px !important;
  height: 72px !important;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 20px;
}
.note .post .comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}
.tips-card-loading,
.tips-card {
  width: 460px;
  position: relative;
  left: 0;
  top: 0;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  -webkit-box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #d9d9d9;
}
.tips-card-loading {
  height: 200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
*,
:after,
:before {
  box-sizing: border-box;
}
</style>
