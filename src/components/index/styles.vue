<template>
  <div class="style-mode">
    <a class="style-mode-btn">
      <i class="iconfont ic-navigation-mode">Aa</i>
    </a>
    <div class="popover-modal" style="left: 922px;">
      <div class="meta">
        <i class="iconfont ic-navigation-night"></i>
        <span>夜间模式</span>
      </div>
      <div class="switch day-night-group">
        <a class="switch-btn">开</a>
        <a class="switch-btn active">关</a>
      </div>
      <hr>
      <div class="switch font-family-group">
        <a class="switch-btn font-song">宋体</a>
        <a class="switch-btn font-hei active">黑体</a>
      </div>
      <div class="switch">
        <a class="switch-btn active">简</a>
        <a class="switch-btn">繁</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
  margin-left: -80px;
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
  content: "";
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
</style>

