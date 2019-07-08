<template>
   <div class="main-top">
  <a class="avatar" href="###">
    <img src="//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="240">
</a>
  <div class="title">
    <a class="name" href="###">吴晓布</a>
  </div>
  <div class="info">
    <ul>
      <li>
       <div class="meta-block">
          <p>120</p>
          <div>关注></div>
        </div>
      </li>
      <li>
         <div class="meta-block">
          <p>269591</p>
          <div>粉丝></div>
        </div>
      </li>
      <li>
         <div class="meta-block">
          <p>245</p>
          <div>文章></div>
        </div>
      </li>
      <li>
        <div class="meta-block">
          <p>669591</p>
          <div>字数</div>
        </div>
      </li>
      <li>
        <div class="meta-block">
          <p>21324</p>
          <div>收获喜欢</div>
        </div>
      </li>
        <li>
          <div class="meta-block">
            <p>11.1w</p>
            <div>简书钻</div>
          </div>
        </li>
    </ul>
  </div>
</div>
</template>

<script>


</script>

<style scoped>
.main-top .avatar {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: -2px;
}
.main-top {
    margin-bottom: 20px;
}
.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.main-top .title {
    padding: 5px 0 0 100px;
}
.main-top .title .name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
    text-decoration:none;
    color: black;

}
.main-top .info {
    margin-top: 5px;
    padding-left: 100px;
    font-size: 14px;
}
.main-top .info ul {
    font-size: 0;
    margin-left:-40px; 
}
.main-top .info ul li {
    display: inline-block;
}
.meta-block div{
  margin-top:10px; 
}
.main-top .info ul .meta-block {
    font-size: 12px;
    margin: 0 7px 6px 0;
    padding: 0 7px 0 0;
    border-right: 1px solid #f0f0f0;
}
.main-top .info ul a,.main-top .info ul div {
    color: #969696;
}
.main-top .info ul .meta-block .ic-arrow {
    margin-left: -3px;
}
.main-top .info ul p {
    margin-bottom: -3px;
    font-size: 15px;
    color: #333;
}
</style>
