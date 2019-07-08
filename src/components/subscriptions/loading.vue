<template>
  <div>
    <div class="subscription-placeholder">
      <div class="avatar"></div>
      <div class="main-top">
        <div class="btn"></div>
        <div class="btn short"></div>
        <div class="title"></div>
        <div class="info"></div>
      </div>
      <ul class="trigger-menu">
        <li>
          <i class="iconfont ic-articles"></i>
          <div class="title"></div>
        </li>
        <li>
          <i class="iconfont ic-latestcomments"></i>
          <div class="title"></div>
        </li>
        <li>
          <i class="iconfont ic-hot"></i>
          <div class="title"></div>
        </li>
      </ul>
    </div>
    <div class="notes-placeholder">
      <div class="img"></div>
      <div class="content">
        <div class="title"></div>
        <div class="sub-title"></div>
        <div class="text"></div>
        <div class="text animation-delay"></div>
        <div class="meta">
          <div class="read"></div>
          <i class="iconfont ic-list-comments"></i>
          <div class="small"></div>
          <i class="iconfont ic-list-like"></i>
          <div class="small"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.small,
small {
  font-size: 85%;
}
.notes-placeholder .meta .small {
  height: 16px;
  width: 30px;
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
.notes-placeholder .animation-delay {
  -webkit-animation: loading 1s ease-in-out -0.5s infinite;
  animation: loading 1s ease-in-out -0.5s infinite;
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
.notes-placeholder .title:before {
  content: "" !important;
}
.notes-placeholder .title {
  float: none !important;
  width: 50%;
  height: 20px;
  margin: 0 0 15px !important;
  background-color: #eaeaea;
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
.subscription-placeholder .trigger-menu i {
  margin: 0 5px 0 19px;
  font-size: 17px;
  color: #eaeaea;
}
*,
:after,
:before {
  box-sizing: border-box;
}
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
.subscription-placeholder .trigger-menu div {
  margin: 2px 0 10px;
  height: 15px;
  width: 60px;
  background-color: #eaeaea;
}
li {
  line-height: 20px;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  margin-bottom: -1px;
}
.subscription-placeholder .trigger-menu li {
  width: 123px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
ul {
  padding-left: 0;
}
.trigger-menu {
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}
.subscription-placeholder .trigger-menu {
  pointer-events: none;
  margin-bottom: 20px;
  padding-bottom: 1px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}
.subscription-placeholder .main-top .info {
  margin: 15px 0 0 100px !important;
  height: 14px;
  width: 130px;
  background-color: #eaeaea;
}
.subscription .main .main-top .info {
  margin-top: 10px;
  padding-left: 100px;
  font-size: 14px;
  color: #969696;
}
.subscription-placeholder .main-top .short {
  width: 76px;
}
.subscription .main .main-top .title {
  padding: 10px 0 0 100px;
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
.subscription-placeholder .main-top .btn {
  cursor: default !important;
  float: right;
  margin: 8px 0 23px 20px !important;
  background-color: #eaeaea;
  border-radius: 19px;
  height: 38px;
  width: 104px;
}
.subscription .main .main-top .btn {
  float: right;
  margin: 23px 0 23px 20px;
  font-size: 14px;
}
.subscription-placeholder .main-top {
  padding-top: 16px;
  margin-bottom: 36px !important;
}
.subscription .main .main-top {
  margin-bottom: 30px;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.subscription-placeholder .avatar {
  cursor: default !important;
  float: left;
  width: 80px;
  height: 80px;
  margin-right: 4px;
  margin-left: -2px;
  border-radius: 40px;
  background-color: #eaeaea;
}
.notes-placeholder {
  position: relative;
  padding: 15px 2px 0 0;
  margin-bottom: 50px;
}
*,
:after,
:before {
  box-sizing: border-box;
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
</style>
