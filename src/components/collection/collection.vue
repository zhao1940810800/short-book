<template>
  <div>
    <tou/>
    <div id="collection">
      <div class="collectionPost">
        <div><img src="https://i.loli.net/2019/06/05/5cf7322d4de2337481.png" max-width="890px" alt=""/></div>
        <div class="Post" v-for="(item, index) in list" v-bind:key="item.id">
          <div class="PostL">
            <h1>{{ item.h1 }}</h1>
            <div class="PostText">{{ item.PostText }}</div>
            <div class="PostBotton">
              {{ item.PostBotton }}
              <span>{{ item.spanOimg }}{{ item.spanO }}</span>
              <span>{{ item.spanTimg }}{{ item.spanT }}</span>
              <span class="del" @click="del(index)">删除</span>
            </div>
          </div>
          <div class="PostR"><img :src="`${item.PostRimg}`" height="131px" width="164px" alt=""/></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Tou from "../index/tou";

  export default {
    name: 'collection',
    components: {Tou},
    data() {
      return {
        msg: 'hello',
        list: [
          {
            h1: '1111聊聊VueJs 组件化编程',
            PostText: '这篇文章是同事Awe，vue插件小王子写的，现在转过来、原文只有md，不知道网上链接。前端开发的现状 随着互联网设备的带宽和硬件的发展，web...',
            PostBotton: '乖小鬼',
            spanOimg: 'top',
            spanO: '1',
            spanTimg: '❤6',
            spanT: '6',
            PostRimg: 'https://i.loli.net/2019/06/05/5cf75e989eefc72460.png'
          },
          {
            h1: '222聊聊VueJs 组件化编程',
            PostText: '这篇文章是同事Awe，vue插件小王子写的，现在转过来、原文只有md，不知道网上链接。前端开发的现状 随着互联网设备的带宽和硬件的发展，web...',
            PostBotton: '乖小鬼',
            spanOimg: 'top',
            spanO: '1',
            spanTimg: '❤6',
            spanT: '6',
            PostRimg: 'https://i.loli.net/2019/06/05/5cf75e9833e4b79873.png'
          },
          {
            h1: '333聊聊VueJs 组件化编程',
            PostText: '这篇文章是同事Awe，vue插件小王子写的，现在转过来、原文只有md，不知道网上链接。前端开发的现状 随着互联网设备的带宽和硬件的发展，web...',
            PostBotton: '乖小鬼',
            spanOimg: 'top',
            spanO: '1',
            spanTimg: '❤6',
            spanT: '6',
            PostRimg: 'https://i.loli.net/2019/06/05/5cf75e983182892087.png'
          },
          {
            h1: '444聊聊VueJs 组件化编程',
            PostText: '这篇文章是同事Awe，vue插件小王子写的，现在转过来、原文只有md，不知道网上链接。前端开发的现状 随着互联网设备的带宽和硬件的发展，web...',
            PostBotton: '乖小鬼',
            spanOimg: 'top',
            spanO: '1',
            spanTimg: '❤6',
            spanT: '6',
            PostRimg: 'https://i.loli.net/2019/06/05/5cf75e983182892087.png'
          }
        ]
      };
    },
    methods: {
      del(index) {
        console.log(index);
        let flag = confirm('确认删除？');
        flag === true ? this.list.splice(index, 1) : '';
      }
    }
  };
</script>
<style lang="scss" scoped>
  #collection {

    max-width: 690px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .collectionPost {
      width: 100%;
      img {
        margin-top: 30px;
        width: 100%;
      }

      .Post {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
        border-bottom: 2px #f7f7f7 solid;

        .PostL {
          flex: 4;
          padding: 0 8px;

          h1 {
            font-size: 26px;
            line-height: 30px;
          }

          .PostText {
            font-size: 18px;
            color: #999999;
            line-height: 30px;
          }

          .PostBotton {
            font-size: 16px;
            color: #cacaca;
            line-height: 35px;

            span {
              padding: 0 10px;
            }
            .del {
              cursor: pointer;
            }
          }
        }

        .PostR {
          margin: 25px 0 0 0;
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }
    }
  }

  @media (max-width: 800px) {
    #collection .collectionPost .Post .PostR {
      display: none;
    }
  }
</style>
