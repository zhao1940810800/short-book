<template>
  <div id="ziliao">
    <!-- item -->
    <div class="box">
      <div class="s-Ritem">
        <div class="RitemL">赞赏功能</div>
        <div class="RitemR">
          <input class="checkbox" type="radio" />
          开启
          <input class="checkbox" type="radio" />
          关闭
          <br />
          <div class="text">开启后赞赏按钮将出现在你的文章底部</div>
        </div>
      </div>
      <div class="s-Ritem" style="border-bottom:none;">
        <div class="RitemL">赞赏描述</div>
        <div class="RitemR">
          <textarea name=""></textarea>
        </div>
      </div>
      <div class="s-Ritem" style="border-bottom:none;">
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
#ziliao {
  padding: 5px;
  width: 100%;
}

.s-Ritem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 72px;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 0;

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

    textarea {
      width: 90%;
      height: 100px;
      margin-bottom: 10px;
      padding: 8px 10px;
      font-size: 15px;
      border: 1px solid #c8c8c8;
      border-radius: 4px;
      background-color: hsla(0, 0%, 71%, .1);
      display: block;
      resize: none;
      outline-style: none;
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