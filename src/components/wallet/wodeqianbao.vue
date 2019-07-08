<template>
  <div>
    <Tou/>
  <div id="app">
    <div class="container wallet">
      <div class="row">
        <div class="row-top">
          <div class="user">
            <a href="#" class="avather"><img src="../../../src/assets/b6c4b3db-9fb8-40a9-9eb0-931f170b3343.jpg"
                                             alt=""></a>
            <div class="info">
              <a href="#" class="name">ABC_7073</a>
            </div>
            <div class="mobile-bind">
              去绑定手机(<a href="#">去绑定</a>)
            </div>
          </div>
          <div class="middle">
            <div class="account-money">
              账户余额
            </div>
            <span class="money-main">
                            0
                        </span>
            <span class="money-sub">
                            .00
                        </span>
            <div class="action">
              <div class="btn btn-hollow disable">
                体现
              </div>
              <div class="warn">
                *当前余额不足
              </div>
            </div>
          </div>
          <div class="meta">
            <p>每次提现最小额度为￥100.00</p>
            <p>提现会在 3-5 个工作日内到账</p>
            <p>结算后的收益，提现不再收取手续费</p>
            <a href="#" target="_blank" class="help">收入结算与提现常见问题</a>
          </div>
        </div>

        <ul class="body">
          <li class="title">
            <p class="time">时间</p>
            <p class="type">类型</p>
            <p class="details">详情</p>
            <p class="amount">金额</p>
            <p class="remark">状态</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Tou from "../../../src/components/index/tou.vue";
  export default {
    name: "wodeqianbao",
    components: {Tou}
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .container {
    .row {
      display: flex;
      flex-direction: column;
      justify-items: center;

      .row-top {
        margin-top: 10px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        justify-items: center;

        .user {
          padding: 10px 55px;

          .avather {
            position: absolute;
            width: 80px;
            height: 80px;
            margin-right: 15px;
            display: inline-block;
            vertical-align: middle;
          }

          .avather img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
          }

          .info {
            display: inline-block;
            vertical-align: middle;
            padding: 15px 0 0 95px;

            .name {
              font-size: 21px;
              font-weight: 700;
              color: #333333;
              text-decoration: none;
            }
          }

          .mobile-bind {
            background: none;
            font-size: 12px;
            padding: 15px 0 0 95px;

            a {
              color: #3194d0;
              text-decoration: none;
            }
          }
        }

        .middle {
          padding: 10px 55px;
          border-left: 1px solid #e4e4e4;
          border-right: 1px solid #e4e4e4;

          .account-money {
            margin-right: 20px;
            font-size: 16px;
            color: #969696;
            display: inline-block;
          }

          .money-main {
            font-size: 28px;
          }

          .money-sub {
            font-size: 18px;
          }

          .action {
            margin-top: 20px;
            display: flex;
            align-items: center;

            .btn {
              padding: 6px 0;
              width: 80px;
              margin-right: 15px;
              font-size: 15px;
              text-align: center;
              display: inline-block;
            }

            .btn-hollow {
              border: 1px solid rgba(59, 194, 29, .7);
              color: #42c02e !important;
              line-height: normal;
              border-radius: 40px;
              background: none;
            }

            .warn {
              font-size: 13px;
              color: #969696;
            }
          }
        }

        .meta {
          padding: 10px 34px;

          p {
            font-size: 13px;
            color: #969696;
            margin-bottom: 5px;
          }

          .help {
            font-size: 13px;
            color: #3194d0;
            display: block;
            text-decoration: none;
          }
        }
      }
    }

    .body {
      border: 1px solid #dcdcdc;
      border-radius: 6px 6px 0 0;
      margin-bottom: 0px;
      list-style: none;
      .title {
        border-bottom: none;
        padding: 25px 20px;
        font-size: 14px;
        color: #333333;
        display: flex;
        .time {
          vertical-align: middle;
          border-right: 1px dashed #c8c8c8;
          width: 135px;
        }
        .type {
          vertical-align: middle;
          border-right: 1px dashed #c8c8c8;
          width: 90px;
          padding-left: 15px;
        }
        .details {
          vertical-align: middle;
          border-right: 1px dashed #c8c8c8;
          width: 386px;
          padding-left: 15px;
        }
        .amount {
          vertical-align: middle;
          border-right: 1px dashed #c8c8c8;
          width: 110px;
          padding-left: 15px;
        }
        .remark {
          padding-left: 15px;
        }
      }
    }
  }


</style>