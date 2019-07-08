<template>
  <div>
    <tou/>
  <div id="setting">
    <div class="s-Left">
      <div class="l-item">
        <router-link to="/setting/docu">
          <img src="../../assets/docu.svg" width="19px" height="19px" alt="1" />
          基础设置
        </router-link>
      </div>
      <div class="l-item">
        <router-link to="/setting/ziliao">
          <img src="../../assets/ziliao.svg" width="19px" height="19px" alt="1" />
          个人资料
        </router-link>
      </div>
      <div class="l-item">
        <router-link to="/setting/black">
          <img src="../../assets/black.svg" width="19px" height="19px" alt="1" />
          黑名单
        </router-link>
      </div>
      <div class="l-item">
        <router-link to="/setting/zanshang">
          <img src="../../assets/zanshang.svg" width="19px" height="19px" alt="1" />
          赞赏设置
        </router-link>
      </div>
      <div class="l-item">
        <router-link to="/setting/settings">
          <img src="../../assets/settings.svg" width="19px" height="19px" alt="1" />
          账号管理
        </router-link>
      </div>
    </div>
    <div  v-on:click="syk()" >
      <router-view></router-view>
    </div>
    <!-- 左侧手机端导航栏 -->
    <div class="you" v-on:click="show = !show" style="display: none;"> ——> </div>
    <transition name="fade">
      <div class="l-nav" @click="lNavL()" v-if="show">
        <div class="nav-item">
          <router-link to="/setting/docu">
            <img src="../../assets/docu.svg" width="19px" height="19px" alt="1" />
            基础设置
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/setting/ziliao">
            <img src="../../assets/ziliao.svg" width="19px" height="19px" alt="1" />
            个人资料
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/setting/black">
            <img src="../../assets/black.svg" width="19px" height="19px" alt="1" />
            黑名单
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/setting/zanshang">
            <img src="../../assets/zanshang.svg" width="19px" height="19px" alt="1" />
            赞赏设置
          </router-link>
        </div>
        <div class="nav-item">
          <router-link to="/setting/settings">
            <img src="../../assets/settings.svg" width="19px" height="19px" alt="1" />
            账号管理
          </router-link>
        </div>
      </div>
    </transition>
  </div>
  </div>
</template>
<script>
import Tou from "../index/tou";
window.onload = function hello() {
  var bodyW = document.body.clientWidth;
  var begin;
  if (bodyW < 800) {
    document.getElementsByClassName("s-Left")[0].style.display = 'none';
  } else {
    // document.getElementsByClassName("s-Left")[0].style.display = 'block';
  };
  if (bodyW < 800) {
    document.getElementsByClassName("s-Left")[0].style.display = 'none';
  } else {
    // document.getElementsByClassName("s-Left")[0].style.display = 'block';
  };
  if (bodyW < 800) {
    document.getElementsByClassName("you")[0].style.display = 'block';
  } else {
    // document.getElementsByClassName("you")[0].style.display = 'none';
  };
  begin = setInterval(function() {
    hello();
    clearInterval(begin);
  }, 1000);
};

export default {
  name: 'setting',
  data() {
    return {
      isSlided: true,
      show: false,
    }
  },
  components: {Tou},
  methods: {
    lNavL() {
      this.show = !this.show
    },
    syk(){
      this.show = false
    }
  },
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

#setting {
  max-width: 960px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .l-item a {
    width: 250px;
    height: 36px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    font-size: 14px;

    img {
      margin-right: 15px;
      padding: 8px;
      border-radius: 5px;
      background-color: #a0a0a0;
    }
  }

  .s-Left {
    // position: fixed;
  }

  .s-Right {
    // position: relative;
    // left: 280px;
    width: 100%;
    max-width: 680px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
}

.active {
  background-color: #f0f0f0;
  border-radius: 5px;

}

a {
  height: 56px;
  width: 280px;
  color: #333333;
  text-decoration: none;
}

.you {
  text-align: center;
  line-height: 50px;
  background-color: #bababa;
  opacity: 0.4;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  top: 47%;
  left: -25px;
  color: black;
}

.l-nav {
  position: fixed;
  left: 0;
  top: 20%;
  width: 150px;
  height: auto;
  background-color: white;
  border: 1px solid #bababa;
  opacity: 0.9;
  border-radius: 5px;

  .nav-item {
    width: 100%;
    height: 80px;
    font-size: 20px;
    line-height: 80px;
    margin: 0 auto;

    a {
      width: 120px;
      height: auto;
      padding: 0 15px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>