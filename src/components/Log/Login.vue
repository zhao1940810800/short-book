<template>
  <div class="login">
    <div class="logo">
      <a href="/">
        <img
          src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
          alt="Logo"
        />
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <router-link id="js-sign-up-btn" to="/login">登录</router-link>
          <!-- <a class="active" href="/sign_in">登录</a> -->
          <b>·</b>
          <router-link class="active" to="/signup">注册</router-link>
          <!-- <a id="js-sign-up-btn" class href="/sign_up">注册</a> -->
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form
          id="new_session"
          action="/sessions"
          accept-charset="UTF-8"
          method="post"
        >
          <input name="utf8" type="hidden" value="✓" />
          <input
            type="hidden"
            name="authenticity_token"
            value="OAw0OSHOJqvjHvPfF6BS8ozr9jqrutVitO3qfVvCKSduBkuvTP7ifbw/ETlsty8qOx1vdmaOBtFyCpGBDkOVzQ=="
          />

          <!-- 正常登录登录名输入框 -->
          <div class="input-prepend restyle js-normal">
            <input
              placeholder="手机号或邮箱"
              type="text"
              name="session[email_or_mobile_number]"
              id="session_email_or_mobile_number"
            />
            <i class="iconfont icon-user"></i>
          </div>

          <!-- 海外登录登录名输入框 -->

          <div class="input-prepend">
            <input
              placeholder="密码"
              type="password"
              name="session[password]"
              id="session_password"
            />
            <i class="iconfont icon-password"></i>
          </div>
          <input
            value="false"
            type="hidden"
            name="session[oversea]"
            id="session_oversea"
          />
          <div>
            <input
              id="sign-in-form-captcha-challenge"
              name="captcha[validation][challenge]"
              autocomplete="off"
              type="hidden"
            />
            <input
              id="sign-in-form-captcha-gt"
              name="captcha[validation][gt]"
              autocomplete="off"
              type="hidden"
            />
            <input
              id="sign-in-form-captcha-validate"
              name="captcha[validation][validate]"
              autocomplete="off"
              type="hidden"
            />
            <input
              id="sign-in-form-captcha-seccode"
              name="captcha[validation][seccode]"
              autocomplete="off"
              type="hidden"
            />
          </div>
          <div class="remember-btn">
            <input
              type="checkbox"
              value="true"
              checked="checked"
              name="session[remember_me]"
              id="session_remember_me"
            />
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class data-toggle="dropdown" href>登录遇到问题?</a>
            <ul class="dropdown-menu">
              <li>
                <a href="/users/password/mobile_reset">用手机号重置密码</a>
              </li>
              <li>
                <a href="/users/password/email_reset">用邮箱重置密码</a>
              </li>
              <li>
                <a target="_blank" href="/p/9058d0b8711d"
                  >无法用海外手机号登录</a
                >
              </li>
              <li>
                <a target="_blank" href="/p/498a9fa7da08"
                  >无法用 Google 帐号登录</a
                >
              </li>
            </ul>
          </div>
          <button
            class="sign-in-button"
            id="sign-in-form-submit-btn"
            type="button"
          >
            <span id="sign-in-loading"></span>
            登录
          </button>
        </form>
        <!-- 更多登录方式 -->
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li id="weibo-link-wrap" class>
              <a class="weibo" id="weibo-link">
                <i class="iconfont icon-weibo"></i>
              </a>
            </li>
            <li>
              <a
                id="weixin"
                class="weixin"
                target="_blank"
                href="/users/auth/wechat"
              >
                <i class="iconfont icon-wechat"></i>
              </a>
            </li>
            <li>
              <a
                id="qq"
                class="qq"
                target="_blank"
                href="/users/auth/qq_connect"
              >
                <i class="iconfont icon-qq_connect"></i>
              </a>
            </li>
            <li class="js-more-method" id="more">
              <a href="javascript:void(0);">
                <i class="iconfont icon-more"></i>
              </a>
            </li>
            <li class="js-hide-method hide">
              <a class="douban" target="_blank" href="/users/auth/douban">
                <i class="iconfont icon-douban"></i>
              </a>
            </li>
          </ul>

          <div class="weibo-geetest-captcha"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../node_modules/normalize.css/normalize.css";
export default {};
</script>
<style lang="scss" scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
.hide {
  display: none !important;
}
.login {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;

  &::before {
    content: "";
    display: inline-block;
    height: 85%;
    vertical-align: middle;
  }
  &::after {
    content: "";
    display: inline-block;
    height: 85%;
    vertical-align: middle;
  }

  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
    img {
      width: 100px;
    }
  }

  .main {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    display: inline-block;

    font-size: 14px;
    text-align: center;
    font-size: 14px;
    .title {
      margin: 0 auto 50px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      a {
        padding: 10px;
        color: #969696;
      }
      .router-link-active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
      .active {
        // font-weight: 700;
        // color: #ea6f5a;
        // border-bottom: 2px solid #ea6f5a;
      }
      b {
        padding: 10px;
        font-weight: 700;
      }
    }
    .h4,
    h4 {
      font-size: 18px;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      background-color: transparent;
    }
    form {
      margin-bottom: 30px;
      margin: 0 0 20px;
      .restyle {
        margin-bottom: 0;
        input {
          border-bottom: none;
          border-radius: 4px 4px 0 0;
        }
      }
      .input-prepend {
        position: relative;
        width: 100%;
        input {
          width: 100%;
          height: 50px;
          margin-bottom: 0;
          padding: 4px 12px 4px 35px;
          border: 1px solid #c8c8c8;
          border-radius: 0 0 4px 4px;
          background-color: hsla(0, 0%, 71%, 0.1);
          vertical-align: middle;
        }
        i {
          position: absolute;
          top: 14px;
          left: 10px;
          font-size: 18px;
          color: #969696;
        }
      }
    }

    button,
    input,
    select,
    textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;

      color: inherit;
      font: inherit;
      margin: 0;
    }
    input[type="hidden" i] {
      display: none;
    }
    input[type="checkbox"],
    input[type="radio"] {
      margin: 4px 0 0;
      margin-top: 1px\9;
      line-height: normal;
    }
    input[type="checkbox"],
    input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    .remember-btn {
      float: left;
      margin: 15px 0;
      span {
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
      }
    }
    .forget-btn {
      float: right;
      position: relative;
      margin: 15px 0;
      font-size: 14px;
      a {
        color: #999;
      }
      .dropdown-menu {
        top: 20px;
        left: auto;
        right: 0;
        border-radius: 4px;

        margin-top: 0;
        border-color: transparent;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
        -webkit-filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));

        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        float: left;
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: #fff;
        border: 1px solid #ccc;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        background-clip: padding-box;
        li {
          line-height: 20px;
        }
        a {
          padding: 10px 20px;
          color: #333;

          display: block;
          padding: 3px 20px;
          clear: both;
          font-weight: 400;
          line-height: 1.42857;
          color: #333;
          white-space: nowrap;
        }
      }
    }

    .sign-in-button {
      background: #3194d0;

      margin-top: 20px;
      width: 100%;
      padding: 9px 18px;
      font-size: 18px;
      border: none;
      border-radius: 25px;
      color: #fff;
      // background: #42c02e;
      cursor: pointer;
      outline: none;
      display: block;
      clear: both;
    }
    #sign-in-loading {
      position: relative;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-top: -4px;
      margin-right: 2px;
      display: none;
    }

    .more-sign {
      margin-top: 50px;
      h6 {
        position: relative;
        margin: 0 0 10px;
        font-size: 12px;
        color: #b5b5b5;
        &::before {
          content: "";
          border-top: 1px solid #b5b5b5;
          display: block;
          position: absolute;
          width: 60px;
          top: 5px;
        }
        &::after {
          content: "";
          right: 30px;
          border-top: 1px solid #b5b5b5;
          display: block;
          position: absolute;
          width: 60px;
          top: 5px;
        }
      }
      ul {
        margin-bottom: 10px;
        list-style: none;
        padding-left: 0;
        li {
          margin: 0 5px;
          display: inline-block;
          line-height: 20px;
          a {
            width: 50px;
            height: 50px;
            line-height: 50px;
            display: block;
          }
          i {
            font-size: 28px;
          }
        }
      }
      .icon-weibo {
        color: #e05244;
      }
      .icon-wechat {
        color: #00bb29;
      }
      .icon-qq_connect {
        color: #498ad5;
      }
      .icon-douban {
        color: #00820f;
      }
      .icon-more {
        color: #999;
        vertical-align: sub;
      }
    }
  }
}
</style>
