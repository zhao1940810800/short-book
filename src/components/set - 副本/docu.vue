<template>
  <div id="setting">
    <!-- item -->
    <div class="box">
      <div class="s-Ritem" style="border-bottom:none;">
        <div class="RitemL"><img src="../../assets/head.jpg" alt="1" /></div>
        <div class="RitemR Rbutton">更改头像</div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">昵称</div>
        <div class="RitemR"><input class="Rinput" type="text" name="" value="01929019203" /></div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">电子邮件</div>
        <div class="RitemR">
          <div class="RitemR Rbutton">点击绑定</div>
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">手机</div>
        <div class="RitemR">
          <div class="RitemR Rbutton">绑定手机</div>
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">常用编辑器</div>
        <div class="RitemR">
          <input class="checkbox" type="radio" />
          富文本
          <input class="checkbox" type="radio" />
          Markdown
          <br />
          <div class="text">切换后对文本生效</div>
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">语言设置</div>
        <div class="RitemR">
          <input class="checkbos" type="radio" />
          中文简体
          <input class="checkbos" type="radio" />
          中文繁体
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">接受谁的简信</div>
        <div class="RitemR">
          <input class="checkbos" type="radio" />
          所有人
          <input class="checkbos" type="radio" />
          我关注的人、我发过简信的人
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">提醒邮件通知</div>
        <div class="RitemR">
          <input class="checkbos" type="radio" />
          所有动态
          <input class="checkbos" type="radio" />
          每天未读汇总
          <input class="checkbos" type="radio" />
          不接受
        </div>
      </div>
      <div class="s-Ritem">
        <div class="RitemL">
          <div class="button">保存</div>
        </div>
        <div class="RitemR"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'setting',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#setting {
  padding: 5px;
  width: 100%;
}

.s-Ritem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 72px;
  border-bottom: 1px solid #f0f0f0;

  .RitemL {
    width: 150px;
    font-size: 16px;
    color: #969696;

    img {
      border-radius: 50px;
    }

    .button {
      color: white;
      font-size: 15px;
      background-color: #42c02e;
      width: 80px;
      padding: 6px 10px;
      border-radius: 20px;
      text-align: center;
    }
  }

  .RitemR {
    width: 100%;

    .Rbutton {
      border: 1px lightgreen solid;
      border-radius: 15px;
      font-size: 14px;
      padding: 5px;
      width: 82px;
      text-align: center;
      color: lightgreen;
    }

    .Rinput {
      padding: 8px 10px;
      border-radius: 4px;
      border: 1px #cccccc solid;
      font-size: 14px;
      background-color: #f8f8f8;
    }

    .checkbox {
      margin-top: 30px;
      width: 20px;
    }

    .checkbos {
      width: 20px;
    }

    .text {
      font-size: 14px;
      color: #cccccc;
      padding: 8px 0 0 8px;
    }
  }
}
</style>