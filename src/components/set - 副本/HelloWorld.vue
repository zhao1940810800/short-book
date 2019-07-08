<template>
  <div class="hello">
    <div class="Gender">
      <div class="RitemL">性别</div>
      <div class="RitemR">
        <input class="checkbos" type="radio" />
        男
        <input class="checkbos" type="radio" />
        女
        <input class="checkbos" type="radio" />
        保密
      </div>
    </div>
    <div class="Gender" style="height:110px;">
      <div class="RitemL">个人简介</div>
      <div class="RitemR">
        <textarea class="brief-s-Ritem" placeholder="填写你的个人简介" /></div>
   </div>
   <div class="Gender" style="height:40px;">
     <div class="RitemL">个人网站</div>
        <div class="RitemR">
          <input type="text" class="website" placeholder="http://你的网址" />
          <p class="pull-right">填写后会在个人主页显示图标</p></div>
   </div>
   <div class="Gender">
        <div class="RitemL">微信二维码</div>
        <div class="RitemR">
          <button class="hide">更换图片</button>
          <p class="pull-right">上传后会在个人主页显示图标</p></div>
   </div>

    <div class="Gender-a">
        <div class="RitemL">社交账号</div>
        <div class="RitemR">
          <p class="pull-right-bind">你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p>
          <p class="pull-right-bind">如果帐号被占用，你可以在<a href="#">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p>
          <div class="RitemR-icon">
            <ul>
              <li><i class="iconfont icon-weibo"></i><a>绑定微博></a></li>
              <li><i class="iconfont icon-weixin"></i><a>绑定微信></a></li>
              <li><i class="iconfont icon-QQ"></i><a>绑定QQ></a></li>
              <li><i class="iconfont icon-douban"></i><a>绑定豆瓣></a></li>
              <li><i class="iconfont icon-guge"></i><a>绑定Google+></a></li>
            </ul>
          </div>
          </div>
   </div>
     <div class="Gender-a">
        <div class="RitemL">
          <input class="btn btn-success" type="submit" value="保存" />
        </div>
     </div>

     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hello{
  width: 100%;
  padding: 5px;
}
*{
  outline: none;
}
.hello{
  margin: 0 auto;
  width: 100%;
  height: auto;
  /* background-color: aquamarine; */
}
.Gender{
  width: 100%;
  height:auto;
  padding: 8px 0px;
  margin-top: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 30px;
}
.Gender .RitemL{
  width: 20%;
  height: auto;
  float: left;
  color: #969696;
  text-align: left;
}
.Gender .RitemR{
  width: 80%;
  height: auto;
  float: left;
  text-align:left;
  color: #969696;
}
.brief-s-Ritem{
  width: 96%;
  height: 100px;
  padding: 8px 0px;
  font-size: 15px;
  border:1px solid #c8c8c8;
  border-radius: 4px;
  background-color: hsla(0, 0%,71%, 0.1);
}
.website{
  width: 96%;
  padding: 8px 0px;
  font-size: 15px;
  border:1px solid #c8c8c8;
  border-radius: 4px;
  background-color: hsla(0, 0%,71%, 0.1);
}
.pull-right{
  margin: 0;
  font-size: 12px;
  padding: 8px 14px 0px 0px;
  float: right !important;
}
.pull-right-bind{
  width: 96%;
  font-size: 12px;
  margin-top: -1px;
}
.pull-right-bind a{
  text-decoration: none;
}
.hide{
  border: 1px solid rgba(59,194,29,7);
  color: #76D561;
  background-color: hsla(0, 0%,71%, 0.1);
  border-radius: 10px;
}
.RitemR-icon ul li{
  list-style: none;
  /* padding: 10px 8px 8px 20px; */
  border-bottom: 1px solid #f0f0f0;
}
.RitemR-icon ul li i{
  font-size: 24px;
  margin-left: -40px;
  line-height: 50px;
}
.RitemR-icon ul li:first-child{
  color: #EA6F5A;
}
.RitemR-icon ul li:nth-child(2){
  color: #42C02E;
}
.RitemR-icon ul li:nth-child(3){
  color: #3194D0;
}
.RitemR-icon ul li:nth-child(4){
  color: #42C02E;
}
.RitemR-icon ul li:nth-child(5){
  color: #EC6149;
}
.RitemR-icon ul li a{
  padding: 5px 30px;
  color: #969696;
}
.Gender-a{
  width: 100%;
  height:auto;
  padding: 8px 0px;
  margin-top: 20px;
  /* border-bottom: 1px solid #f0f0f0; */
  padding-bottom: 30px;
}
.Gender-a .RitemL{
  width: 20%;
  height: auto;
  float: left;
  color: #969696;
  text-align: left;
}
.Gender-a .RitemR{
  width: 80%;
  height: auto;
  float: left;
  text-align:left;
  color: #969696;
}


.RitemL .btn-success{
  position: relative;
  width: 100px;
  border: none;
  color: #fff;
  padding: 10px;
  margin: 30px 0 60px;
  border-radius: 20px;
  background-color: #3db922;
  border-color: #3db922;
}
</style>