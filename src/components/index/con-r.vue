<template>
  <div class="con-r">
    <div class="title">
      <p>个人介绍</p>
      <p><i class="iconfont icon-bianji"></i>编辑</p>
    </div>
    <ul class="list user-dynamic">
      <li>123</li>
    </ul>
    <!-- 专题和文集 -->
    <div>
      <div>
        <div class="title">
          <div>
            <i class="iconfont icon-UI_icon_zhuantitu"></i
            >我关注的专题/文集/连载
          </div>
        </div>
        <!---->
        <ul class="list">
          <li><i class="iconfont icon-aixin"></i>我喜欢的文章</li>
        </ul>
      </div>
      <div>
        <div class="title">
          <p>管理的专题</p>
          <p class="xinjian">+新建专题</p>
        </div>
        <ul class="list">
          <li>专题1</li>
          <li>专题2</li>
          <li>专题3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../node_modules/normalize.css/normalize.css";

export default {};
</script>

<style scoped>
.title {
  float: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.xinjian {
  color: aquamarine;
}
.user-dynamic {
  padding-bottom: 6px;
}
.list {
  margin-bottom: 16px;
  padding-bottom: 16px;
  list-style: none;
  border-bottom: 1px solid #f0f0f0;
  clear: both;
}
</style>
