<template>
  <div id="ziliao">
    <!-- item -->
    <div class="box">
      <div class="s-Ritem">
        <div class="RitemL">打包下载文章</div>
        <div class="RitemR">
          <div class="text">
            <button class="Rbutton">下载所有文章</button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isHello" class="s-Ritem" style="border-bottom: none;">
      <div class="RitemL" @click="del()">
        <div style="margin: -20px 0 0 0;">
          删除账号<font>∨</font>
        </div>
      </div>
      <div class="RitemR"></div>
    </div>
    <transition name="fade">
      <div class="textnone" v-show="isHello">
        <p style="margin-left: -28px;">永久删除帐号</p>
        <div class="text">
          <ul>
            <li>如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，<a href="#">你可以在简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</li>
            <li>如果你对简书上的某些内容、功能或社区规则不满意，你可以在<a href="#">帮助与反馈页</a>向我们提出。</li>
            <li>帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。</li>
            <li>删除帐号是不可逆的操作，删除后将无法恢复。</li>
          </ul>
          <button class="Rbutton" @click="show()">保留我的账号</button>
          <button class="Rbutton-r">删除账号</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'setting',
  data() {
    return {
      isHello: false,
      isSlide: true,
    };
  },
  methods: {
    del() {
      this.isHello = !this.isHello
    },
    show() {
      this.isHello = false
    }
  }
};
</script>
<style lang="scss" scoped>
#ziliao {
  padding: 5px;
  width: 100%;
}

.textnone {
  padding: 0 0 0 20px;
  min-height: 220px;

  p {
    padding: 10px 10px;
  }

  .text {
    li {
      padding: 4px 0;

      a {
        text-decoration: none;
        color: #3194d0;
      }
    }
  }
}

* {
  outline: none;
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

    font {
      margin-left: 5px;
      width: 20px;
      height: 20px;
      font-size: 20px;
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
      padding: 5px 8px;
      width: 82px;
      text-align: center;
      color: lightgreen;
      background-color: white;
      width: auto;
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

    textarea {
      width: 100%;
      min-width: 474px;
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
      padding: 8px;
    }
  }
}

.Rbutton {
  border: 1px lightgreen solid;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 8px;
  width: 82px;
  text-align: center;
  color: lightgreen;
  background-color: white;
  width: auto;
  padding: 0 20px 20px -20px;
}

.Rbutton-r {
  border: 1px red solid;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px 8px;
  width: 82px;
  text-align: center;
  color: red;
  background-color: white;
  width: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>