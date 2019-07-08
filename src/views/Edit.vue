<template>
  <div class="edit">
    <div id="root" style="width: 100%;height: 100%;max-width: 100vw;max-height: 100vh">
      <div class="ant-row _1gp6t">
        <div class="ant-col-4 _2v5v5">
          <div class="_3zibT">
            <a href="/">回首页</a>
          </div>
          <div class="_1iZMb">
            <div class="_33Zlg" @click="write = !write">
              <i class="iconfont fa icon-add1"></i>
              <span>新建文集</span>
            </div>
            <div class="_2G97m">
              <form action="#" class="M8J6Q _1mU5v" :class="{ _2a1Rp: write }">
                <input
                  v-model="titleName"
                  type="text"
                  placeholder="请输入文集名..."
                  name="name"
                  class="_1CtV4"
                >
                <!-- {{titleName}} -->
                <button @click="uptoaticle" type="button" class="dwU8Q _3zXcJ _3QfkW">
                  <span>提 交</span>
                </button>
                <button @click="write = false" type="button" class="vIzwB _3zXcJ">
                  <span>取 消</span>
                </button>
              </form>
            </div>
          </div>
          <ul class="_3MbJ4 _3t059">
            <collection-article
              :title="item.name"
              :key="index"
              @click.native="edit(index)"
              :class="{ _31PCv: item.edit }"
              v-for="(item, index) in articleLisrt"
              :article="item"
              v-bind:articleLisrt.sync="articleLisrt"
              :index="index"
            ></collection-article>
            <!-- <li
              class="_3DM7w"
              :title="item.name"
              v-for="(item,index) in articleLisrt"
              :key="index"
              @click="edit(index)"
              :class="{_31PCv:item.edit}"
            >
              <div class="_3P4JX _2VLy-" v-if="item.edit">
                <i @click="articleClick($event,index)" class="iconfont fa icon-settings"></i>
                <span>
                  <ul :class="{NvfK4:item.menu}" class="_2V8zt _3FcHm _2w9pn">
                    <li class="_2po2r cRfUr" title>
                      <span class>
                        <i class="fa fa-pencil-square-o _22XWG"></i>修改文集
                      </span>
                    </li>
                    <li @click="delarticle($event,index)" class="_2po2r cRfUr" title>
                      <span class>
                        <i class="iconfont fa o _22XWG"></i>删除文集
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
              <span>{{item.name}}</span>
            </li>-->
            <!-- <li class="_3DM7w _31PCv" title="日记本">
              <div class="_3P4JX _2VLy-">
                <i class="iconfont fa icon-settings"></i>
                <span>
                  <ul class="_2V8zt _3FcHm _2w9pn">
                    <li class="_2po2r cRfUr" title>
                      <span class>
                        <i class="fa fa-pencil-square-o _22XWG"></i>修改文集
                      </span>
                    </li>
                    <li class="_2po2r cRfUr" title>
                      <span class>
                        <i class="iconfont fa o _22XWG"></i>删除文集
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
              <span>日记本</span>
            </li>-->
          </ul>
          <div role="button" class="ant-col-4 h-5Am">
            <span class="ant-dropdown-trigger">
              <i class="iconfont icon-more1 fa"></i>
              <span>设置</span>
            </span>
            <span class="Yv5Zx">
              遇到问题
              <i class="iconfont fa icon-icon-circle-question fa-question-circle-o"></i>
            </span>
          </div>
        </div>
        <div class="ant-col-20" style="height: 100%;">
          <div
            :index="index"
            class="articlewrapper"
            :key="index"
            v-for="(item, index) in articleLisrt"
            v-show="index == collection"
          >
            <!-- 
            v-for="(item1,i) in item.article"
              :key="i"
              :value="item1"
            -->
            <editarticle
              v-bind:article.sync="item.article"
              v-bind:articleLisrt.sync="articleLisrt"
              v-bind:haevent.sync="Haevent"
              v-bind:operate.sync="operate"
              v-bind:articlecount.sync="articlecount"
            ></editarticle>

            <!-- <div class="ant-col-16 _1Yy97">
              <VmEditor v-for="(i,index) in item.article" :key="index" width="100%" height="100%" @upload="showHtml"></VmEditor>
            </div>-->
            <!-- <E
              v-bind:articleLisrt.sync="articleLisrt"
              :articlecount="articlecount"
              v-bind:article.sync="item.article"
            ></E>-->

            <!-- <editor v-model="content"></editor> -->
            <!-- <tinymce :height="300" v-model="content" id='tinymce'></tinymce> -->
            <!-- <div>
<tinymce class="ant-col-16 _1Yy97" :height="300" v-model="content" id='tinymce'></tinymce>
            </div>-->

            <!-- <editwrapper
              v-bind:articleLisrt="articleLisrt"
              :articlecount="articlecount"
              :article="item.article"
            ></editwrapper>-->

            <div v-for="(i,index) in item.article" :key="index">
              <editwrapper
                v-if="index == articlecount"
                v-bind:articleLisrt="articleLisrt"
                :articlecount="articlecount"
                :article="i"
              ></editwrapper>
            </div>

            <!-- <div class="ant-col-16 _1Yy97">
              <div class="_2mnPN">
                <div class="_3br9T">
                  <div class="_3DuaW" autofocus tabindex="-1">
                    <p class="_3-3KB">已保存</p>
                    <div class="_1WI52" tabindex="-1">
                      <input type="text" class="_24i7u" value="2019-06-09">
                      <ul class="_3LYoB clearfix">
                        <li class="tGbI7 cztJE">
                          <a data-action="publicize">
                            <i class="iconfont fa icon-sharearrow fa-mail-forward"></i>
                            发布文章
                          </a>
                        </li>
                        <li
                          class="_2zLpt"
                          data-index="0"
                          @mouseenter="bold = !bold"
                          @mouseleave="bold = !bold"
                        >
                          <a class="iconfont fa icon-B fa-bold jLrZL"></a>
                          <ul class="_3-PBb" :class="{ mF5rD: bold }">
                            <li>
                              <a class="iconfont fa icon-B fa-bold" data-action="bold"></a>
                            </li>
                            <li>
                              <a class="iconfont fa icon-xieti fa-italic" data-action="italic"></a>
                            </li>
                            <li>
                              <a
                                class="iconfont fa icon-shanchuxian fa fa-strikethrough"
                                data-action="strikethrough"
                              ></a>
                            </li>
                            <li>
                              <a
                                class="iconfont fa icon-yinyong fa-quote-left"
                                data-action="insertBlockquote"
                              ></a>
                            </li>
                          </ul>
                        </li>
                        <li class="_2zLpt" data-index="1">
                          <a class="iconfont icon-tu fa fa-picture-o" data-action="openImageModal"></a>
                        </li>
                        <li
                          class="_2zLpt"
                          data-index="2"
                          @mouseenter="title = !title"
                          @mouseleave="title = !title"
                        >
                          <a class="fa fa-undefined jLrZL">H1</a>
                          <ul class="_3-PBb" :class="{ mF5rD: title }">
                            <li>
                              <a class="fa fa-undefined" data-action="insertTitle" data-level="1">H1</a>
                            </li>
                            <li>
                              <a class="fa fa-undefined" data-action="insertTitle" data-level="2">H2</a>
                            </li>
                            <li>
                              <a class="fa fa-undefined" data-action="insertTitle" data-level="3">H3</a>
                            </li>
                            <li>
                              <a class="fa fa-undefined" data-action="insertTitle" data-level="4">H4</a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="_2zLpt"
                          data-index="3"
                          @mouseenter="cutoff = !cutoff"
                          @mouseleave="cutoff = !cutoff"
                        >
                          <a class="fa fa-undefined jLrZL">—</a>
                          <ul class="_3-PBb" :class="{ mF5rD: cutoff }">
                            <li>
                              <a class="fa fa-undefined" data-action="insertHRule">—</a>
                            </li>
                            <li>
                              <a
                                class="iconfont fa icon-lianjie fa-link"
                                data-action="openLinkModal"
                              ></a>
                            </li>
                            <li>
                              <a
                                class="iconfont fa icon-shipin fa-youtube-play"
                                data-action="openVideoModal"
                              ></a>
                            </li>
                          </ul>
                        </li>
                        <li class="_2zLpt" data-index="4">
                          <a class="fa fa-undefined _20p0q" data-action="openFormulaModal">Σ</a>
                        </li>
                        <li
                          class="_2zLpt"
                          data-index="5"
                          @mouseenter="cancel = !cancel"
                          @mouseleave="cancel = !cancel"
                        >
                          <a class="iconfont fa icon-chehui fa-undo jLrZL"></a>
                          <ul class="_3-PBb" :class="{ mF5rD: cancel }">
                            <li>
                              <a class="iconfont fa icon-chehui fa-undo" data-action="undo"></a>
                            </li>
                            <li>
                              <a class="iconfont fa icon-zhongzuo fa-repeat" data-action="redo"></a>
                            </li>
                          </ul>
                        </li>
                        <li class="_2zLpt" data-index="6">
                          <a class="iconfont fa icon-time fa-clock-o" data-action="to-history"></a>
                        </li>
                        <li class="_2zLpt" data-index="7">
                          <a
                            class="iconfont fa icon-audio fa-volume-up"
                            data-action="openAudioModal"
                          ></a>
                        </li>
                        <li class="_2zLpt _3-PBb" data-index="8">
                          <a class="fa fa-volume-off eeRmU" data-action="openAudioModal"></a>
                        </li>
                        <li class="_2zLpt tGbI7" data-index="9">
                          <a class="iconfont fa icon-save fa-expand" data-action="to-fullscreen"></a>
                        </li>
                        <li class="_2zLpt tGbI7" data-index="10">
                          <a class="iconfont fa icon-quanping fa-floppy-o" data-action="auto-save"></a>
                        </li>
                      </ul>
                      <div class="_15389">
                        <div class="_2HkLJ" id="editor">
                          <div contenteditable="true" class="kalamu-area">
                            <p>
                              <br>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>-->
          </div>
          <!-- <div class="ant-col-8 rQQG7">
            <div class="_3revO _2mnPN">
              <div class="_3br9T">
                <div>
                  <div class="_1GsW5">
                    <i class="iconfont fa icon-add fa-plus-circle"></i>
                    <span>新建文章</span>
                  </div>
                  <ul class="_2TxA-">
                    <li class="_25Ilv _33nt7" title="2019-06-09">
                      <i class="_13kgp"></i>
                      <div class="_3P4JX poOXI">
                        <i @click="Haclick" class="iconfont fa icon-settings fa-gear"></i>
                        <span>
                          <ul class="_2V8zt _3FcHm _2w9pn" :class="{NvfK4:operate}">
                            <li class="_2po2r cRfUr" title>
                              <span class>
                                <i class="fa fa-share _22XWG"></i>直接发布
                              </span>
                            </li>
                            <li class="_2po2r cRfUr" title>
                              <span class="_20tIi">
                                <i class="iconfont ic-paid _22XWG"></i>发布为付费文章
                              </span>
                            </li>
                            <li class="_3nZXj _2_WAp _3df2u _2po2r cRfUr" title>
                              <span class>
                                <i class="fa fa-folder-open _22XWG"></i>移动文章
                                <div class="_3x4X_">
                                  <ul class="_2KzJx oGKRI _3DXDE _2w9pn"></ul>
                                </div>
                              </span>
                            </li>
                            <li class="_2po2r cRfUr" title>
                              <span class>
                                <i class="fa fa-clock-o _22XWG"></i>历史版本
                              </span>
                            </li>
                            <li class="_2po2r cRfUr" title>
                              <span class>
                                <i class="fa fa-trash-o _22XWG"></i>删除文章
                              </span>
                            </li>
                          </ul>
                        </span>
                      </div>
                      <span class="NariC">2019-06-09</span>
                      <span class="hLzJv"></span>
                      <span class="_29C-V">字数:0</span>
                    </li>
                  </ul>
                  <div class="_2cVn3">
                    <i class="iconfont fa icon-add1 fa-plus"></i>
                    <span>在下方新建文章</span>
                  </div>
                </div>
              </div>
            </div>
          </div>-->

          <!-- <div class="ant-col-16 _1Yy97">
            <div class="_2mnPN">
              <div class="_3br9T">
                <div class="_3DuaW" autofocus tabindex="-1">
                  <p class="_3-3KB">已保存</p>
                  <div class="_1WI52" tabindex="-1">
                    <input type="text" class="_24i7u" value="2019-06-09">
                    <ul class="_3LYoB clearfix">
                      <li class="tGbI7 cztJE">
                        <a data-action="publicize">
                          <i class="iconfont fa icon-sharearrow fa-mail-forward"></i> 发布文章
                        </a>
                      </li>
                      
                      <li
                        class="_2zLpt"
                        data-index="0"
                        @mouseenter="bold = !bold"
                        @mouseleave="bold = !bold"
                      >
                        <a class="iconfont fa icon-B fa-bold jLrZL"></a>
                        <ul class="_3-PBb" :class="{mF5rD: bold}">
                          <li>
                            <a class="iconfont fa icon-B fa-bold" data-action="bold"></a>
                          </li>
                          <li>
                            <a class="iconfont fa icon-xieti fa-italic" data-action="italic"></a>
                          </li>
                          <li>
                            <a
                              class="iconfont fa icon-shanchuxian fa fa-strikethrough"
                              data-action="strikethrough"
                            ></a>
                          </li>
                          <li>
                            <a
                              class="iconfont fa icon-yinyong fa-quote-left"
                              data-action="insertBlockquote"
                            ></a>
                          </li>
                        </ul>
                      </li>
                      <li class="_2zLpt" data-index="1">
                        <a class="iconfont icon-tu fa fa-picture-o" data-action="openImageModal"></a>
                      </li>
                      <li
                        class="_2zLpt"
                        data-index="2"
                        @mouseenter="title = !title"
                        @mouseleave="title = !title"
                      >
                        <a class="fa fa-undefined jLrZL">H1</a>
                        <ul class="_3-PBb" :class="{mF5rD: title}">
                          <li>
                            <a class="fa fa-undefined" data-action="insertTitle" data-level="1">H1</a>
                          </li>
                          <li>
                            <a class="fa fa-undefined" data-action="insertTitle" data-level="2">H2</a>
                          </li>
                          <li>
                            <a class="fa fa-undefined" data-action="insertTitle" data-level="3">H3</a>
                          </li>
                          <li>
                            <a class="fa fa-undefined" data-action="insertTitle" data-level="4">H4</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        class="_2zLpt"
                        data-index="3"
                        @mouseenter="cutoff = !cutoff"
                        @mouseleave="cutoff = !cutoff"
                      >
                        <a class="fa fa-undefined jLrZL">—</a>
                        <ul class="_3-PBb" :class="{mF5rD: cutoff}">
                          <li>
                            <a class="fa fa-undefined" data-action="insertHRule">—</a>
                          </li>
                          <li>
                            <a class="iconfont fa icon-lianjie fa-link" data-action="openLinkModal"></a>
                          </li>
                          <li>
                            <a
                              class="iconfont fa icon-shipin fa-youtube-play"
                              data-action="openVideoModal"
                            ></a>
                          </li>
                        </ul>
                      </li>
                      <li class="_2zLpt" data-index="4">
                        <a class="fa fa-undefined _20p0q" data-action="openFormulaModal">Σ</a>
                      </li>
                      <li
                        class="_2zLpt"
                        data-index="5"
                        @mouseenter="cancel = !cancel"
                        @mouseleave="cancel = !cancel"
                      >
                        <a class="iconfont fa icon-chehui fa-undo jLrZL"></a>
                        <ul class="_3-PBb" :class="{mF5rD: cancel}">
                          <li>
                            <a class="iconfont fa icon-chehui fa-undo" data-action="undo"></a>
                          </li>
                          <li>
                            <a class="iconfont fa icon-zhongzuo fa-repeat" data-action="redo"></a>
                          </li>
                        </ul>
                      </li>
                      <li class="_2zLpt" data-index="6">
                        <a class="iconfont fa icon-time fa-clock-o" data-action="to-history"></a>
                      </li>
                      <li class="_2zLpt" data-index="7">
                        <a class="iconfont fa icon-audio fa-volume-up" data-action="openAudioModal"></a>
                      </li>
                      <li class="_2zLpt _3-PBb" data-index="8">
                        <a class="fa fa-volume-off eeRmU" data-action="openAudioModal"></a>
                      </li>
                      <li class="_2zLpt tGbI7" data-index="9">
                        <a class="iconfont fa icon-save fa-expand" data-action="to-fullscreen"></a>
                      </li>
                      <li class="_2zLpt tGbI7" data-index="10">
                        <a class="iconfont fa icon-quanping fa-floppy-o" data-action="auto-save"></a>
                      </li>
                    </ul>
                    <div class="_15389">
                      <div class="_2HkLJ" id="editor">
                        <div contenteditable="true" class="kalamu-area">
                          <p>
                            <br>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "normalize.css";
import collectionArticle from "../components/collectionArticle.vue";
import editarticle from "../components/editor/editarticle.vue";
import editwrapper from "../components/editor/editwrapper.vue";
// import tinymce from "../components/Tinymce.vue"
// import Editor from '@tinymce/tinymce-vue';
// import E from "../components/E.vue";
// import VmEditor from "vm-editor";

export default {
  computed: {
    // articleLisrt() {
    //   return this.articleLisrt;
    // }
  },
  components: {
    collectionArticle,
    editarticle,
    editwrapper
  },
  data() {
    return {
      operate: false,
      Haevent: null,
      write: false,
      titleName: "",
      articleLisrt: [
        // {
        //   name: "日记本",
        //   edit: true,
        //   menu: false,
        //   article: [
        //     {
        //       edit: true,
        //       name: "2019-06-09",
        //       content: "",
        //       count: "0"
        //     }
        //   ]
        // }
      ],
      collection: "0",
      articlecount: "0",
      content: "1111111111111",
      previewHtml: ""
    };
  },
  methods: {
    showHtml: function(data) {
      this.previewHtml = data;
    },
    // delarticle(event, index) {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   this.articleLisrt.splice(index, 1);
    //   console.log(this.articleLisrt);
    //   if (this.articleLisrt.length !== 0) {
    //     let temp = index - 1;
    //     console.log(temp);
    //     console.log(this.articleLisrt[temp]);
    //     this.articleLisrt[temp].edit = true;
    //   }
    //   localStorage.setItem("articleLisrt", JSON.stringify(this.articleLisrt));
    // },

    // articleClick(event, index) {
    //   console.log(event, index);
    //   event.stopPropagation();
    //   event.preventDefault();
    //   let temp = this.articleLisrt;
    //   // for (let item of temp) {
    //   //   // console.log(item);
    //   //   item.menu = false;
    //   // }
    //   temp[index].menu = !temp[index].menu;
    // },
    edit(index) {
      // console.log(index);
      this.collection = index;
      let temp = this.articleLisrt;
      // console.log(temp);
      // if (temp.length === 0) return;
      for (let item of temp) {
        // console.log(item);
        item.edit = false;
        // item.menu = false;
      }
      temp[index].edit = true;
      temp[index].menu = false;
      localStorage.setItem("articleLisrt", JSON.stringify(this.articleLisrt));
    },

    // Haclick(enent) {
    //   //   console.log(event);
    //   this.Haevent = event;
    //   this.operate = !this.operate;
    // },

    otherClick(event) {
      // console.log(event)
      //   var cDom = document.querySelector("#filter-header");
      // console.log(this.Haevent.target);
      var cDom = this.Haevent && this.Haevent.target;
      if (cDom === null) {
        return;
      }
      //   console.log(cDom);
      var tDom = event.target;
      // console.log("tDom", tDom);
      //菜单
      let menu = document.querySelector(
        "._3P4JX.poOXI ul._2V8zt._3FcHm._2w9pn"
      );
      //menu.contains(tDom)
      //菜单包含 点进区域
      if (
        cDom == tDom ||
        (cDom && cDom.contains(tDom)) ||
        (menu && menu.contains(tDom))
      ) {
        // ...
      } else {
        // cDom.style.display = "none";
        this.operate = false;
      }
    },
    uptoaticle() {
      console.log("添加");
      let temp = this.articleLisrt;
      for (let item of temp) {
        console.log(item);
        item.edit = false;
        item.menu = false;
      }
      if (this.titleName === "") return;
      this.articleLisrt.unshift({
        name: this.titleName,
        edit: true,
        menu: false,
        article: [
          // {
          //   edit: false,
          //   name: this.titleName,
          //   content: "",
          //   count: "0"
          // }
        ]
      });
      this.write = false;
      this.titleName = "";
      localStorage.setItem("articleLisrt", JSON.stringify(this.articleLisrt));
    }
  },
  mounted() {
    // 点击其他区域时, 隐藏指定区域(cDom)
    //添加监听事件
    document.addEventListener("click", this.otherClick);
    let temp = localStorage.getItem("articleLisrt");
    // console.log(temp);
    if (temp === null) return;
    this.articleLisrt = temp && JSON.parse(temp);

    // console.log(this.articleLisrt)
    for (let item of this.articleLisrt) {
      if (item.edit === true) {
        // console.log(item)
        // console.log(this.articleLisrt.findIndex((i) => {
        //   return i === item
        // }))
        this.collection = this.articleLisrt.findIndex(i => {
          return i === item;
        });
      }
    }
    this.articlecount = localStorage.getItem("articlecount");
  },
  destroyed() {
    //移除监听事件
    document.removeEventListener("click", this.otherClick);
  }
};
</script>
<style lang="scss" scoped>
// #app{
//     height: 100%;
// }
.edit {
  height: 100vh;
}
body,
html {
  width: 100%;
  height: 100%;
}
.ant-row {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &::after {
    content: " ";
    display: table;
  }
  &::before {
    content: " ";
    display: table;
  }

  ._2v5v5 {
    position: relative;
    height: 100%;
    overflow-y: auto;
    background-color: #404040;
    color: #f2f2f2;
    z-index: 100;
    ._3zibT {
      padding: 30px 18px 5px;
      text-align: center;
      a {
        display: block;
        font-size: 15px;
        padding: 9px 0;
        color: #ec7259;
        border: 1px solid rgba(236, 114, 89, 0.8);
        border-radius: 20px;
        -webkit-transition: border-color 0.2s ease-in;
        -o-transition: border-color 0.2s ease-in;
        transition: border-color 0.2s ease-in;
      }
    }
    ._1iZMb {
      padding: 0 15px;
      margin-top: 20px;
      margin-bottom: 10px;
      ._33Zlg {
        cursor: pointer;
        color: #f2f2f2;
        -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        -o-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        .fa {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .fa + span {
          margin-left: 4px;
        }
      }
      ._2G97m {
        overflow: hidden;
        // ._1mU5v {
        //   height: 0;
        //   opacity: 0;
        //   margin-top: 0;
        // }
        .M8J6Q {
          overflow: hidden;
          margin: 10px 0 0;
          ._1CtV4 {
            width: 100%;
            height: 35px;
            color: #ccc;
            background-color: #595959;
            border: 1px solid #333;
            padding: 4px 6px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
    ._3t059 {
      position: relative;
      z-index: 0;
      background-color: #8c8c8c;

      ._3DM7w {
        // position: relative;
        // line-height: 40px;
        // list-style: none;
        // font-size: 15px;
        // color: #f2f2f2;
        // background-color: #404040;
        // padding: 0 15px;
        // cursor: pointer;
        // -webkit-user-select: none;
        // -moz-user-select: none;
        // -ms-user-select: none;
        // user-select: none;
        ._2VLy- {
          float: right;
        }
        ._3P4JX {
          font-size: 16px;
          width: 40px;
          text-align: center;
          position: relative;
          min-height: 30px;
          max-height: 50px;
          .fa {
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          ._2w9pn {
            font-size: 14px;
            -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            list-style: none;
            background-color: #fff;
            color: #595959;
            border-radius: 6px;
            ._2po2r {
              padding: 10px 20px;
              line-height: 20px;
              white-space: nowrap;
              text-align: left;
              position: relative;
              border-bottom: 1px solid #d9d9d9;
              ._22XWG {
                margin-right: 5px;
              }
            }
            ._2po2r:first-child {
              border-radius: 4px 4px 0 0;
            }
            .cRfUr {
              // border-bottom: 1px solid #d9d9d9;
              border-bottom: unset;
            }
          }
          ._3FcHm {
            top: 100%;
          }
          // ._2V8zt {
          //   display: none;
          //   position: absolute;
          //   z-index: 99;
          //   right: 0;
          // }
        }
        span {
          display: block;
          margin-right: 20px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    ._3MbJ4 {
      margin-bottom: 50px;
    }
  }
}

.ant-col-4 {
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 16.66666667%;
}
.ant-col-20 {
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 83.33333333%;
}
.ant-col-8 {
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 33.33333333%;
}

._3DM7w {
  position: relative;
  line-height: 40px;
  list-style: none;
  font-size: 15px;
  color: #f2f2f2;
  background-color: #404040;
  padding: 0 15px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body ol,
body ul {
  padding-left: 0;
}
._31PCv {
  background-color: #666;
  border-left: 3px solid #ec7259;
  padding-left: 12px;
}
.vIzwB {
  color: #999;
}
.vIzwB,
.vIzwB:focus,
.vIzwB:hover {
  background-color: #404040;
  border-color: transparent;
}
._3zXcJ + ._3zXcJ {
  margin-left: 8px;
}
._3zXcJ {
  position: relative;
  display: inline-block;
  text-align: center;
  height: 30px;
  line-height: 20px;
  padding: 4px 12px;
  border: 1px solid transparent;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #595959;
  background-color: #fff;
  border-color: transparent;
}
.dwU8Q {
  margin-left: 4px;
  background-color: #404040;
}
.dwU8Q,
.dwU8Q:focus,
.dwU8Q:hover {
  color: #42c02e;
  border-color: #42c02e;
}
input {
  outline: 0;
}
._1iZMb ._1mU5v,
._1iZMb ._2a1Rp {
  -webkit-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
._1gp6t {
  height: 100%;
  overflow: hidden;
}
[role="button"],
a,
area,
button,
input:not([type="range"]),
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
a {
  color: #1890ff;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}
.ant-col-1,
.ant-col-2,
.ant-col-3,
.ant-col-4,
.ant-col-5,
.ant-col-6,
.ant-col-7,
.ant-col-8,
.ant-col-9,
.ant-col-10,
.ant-col-11,
.ant-col-12,
.ant-col-13,
.ant-col-14,
.ant-col-15,
.ant-col-16,
.ant-col-17,
.ant-col-18,
.ant-col-19,
.ant-col-20,
.ant-col-21,
.ant-col-22,
.ant-col-23,
.ant-col-24 {
  float: left;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.ant-col-1,
.ant-col-2,
.ant-col-3,
.ant-col-4,
.ant-col-5,
.ant-col-6,
.ant-col-7,
.ant-col-8,
.ant-col-9,
.ant-col-10,
.ant-col-11,
.ant-col-12,
.ant-col-13,
.ant-col-14,
.ant-col-15,
.ant-col-16,
.ant-col-17,
.ant-col-18,
.ant-col-19,
.ant-col-20,
.ant-col-21,
.ant-col-22,
.ant-col-23,
.ant-col-24,
.ant-col-lg-1,
.ant-col-lg-2,
.ant-col-lg-3,
.ant-col-lg-4,
.ant-col-lg-5,
.ant-col-lg-6,
.ant-col-lg-7,
.ant-col-lg-8,
.ant-col-lg-9,
.ant-col-lg-10,
.ant-col-lg-11,
.ant-col-lg-12,
.ant-col-lg-13,
.ant-col-lg-14,
.ant-col-lg-15,
.ant-col-lg-16,
.ant-col-lg-17,
.ant-col-lg-18,
.ant-col-lg-19,
.ant-col-lg-20,
.ant-col-lg-21,
.ant-col-lg-22,
.ant-col-lg-23,
.ant-col-lg-24,
.ant-col-md-1,
.ant-col-md-2,
.ant-col-md-3,
.ant-col-md-4,
.ant-col-md-5,
.ant-col-md-6,
.ant-col-md-7,
.ant-col-md-8,
.ant-col-md-9,
.ant-col-md-10,
.ant-col-md-11,
.ant-col-md-12,
.ant-col-md-13,
.ant-col-md-14,
.ant-col-md-15,
.ant-col-md-16,
.ant-col-md-17,
.ant-col-md-18,
.ant-col-md-19,
.ant-col-md-20,
.ant-col-md-21,
.ant-col-md-22,
.ant-col-md-23,
.ant-col-md-24,
.ant-col-sm-1,
.ant-col-sm-2,
.ant-col-sm-3,
.ant-col-sm-4,
.ant-col-sm-5,
.ant-col-sm-6,
.ant-col-sm-7,
.ant-col-sm-8,
.ant-col-sm-9,
.ant-col-sm-10,
.ant-col-sm-11,
.ant-col-sm-12,
.ant-col-sm-13,
.ant-col-sm-14,
.ant-col-sm-15,
.ant-col-sm-16,
.ant-col-sm-17,
.ant-col-sm-18,
.ant-col-sm-19,
.ant-col-sm-20,
.ant-col-sm-21,
.ant-col-sm-22,
.ant-col-sm-23,
.ant-col-sm-24,
.ant-col-xs-1,
.ant-col-xs-2,
.ant-col-xs-3,
.ant-col-xs-4,
.ant-col-xs-5,
.ant-col-xs-6,
.ant-col-xs-7,
.ant-col-xs-8,
.ant-col-xs-9,
.ant-col-xs-10,
.ant-col-xs-11,
.ant-col-xs-12,
.ant-col-xs-13,
.ant-col-xs-14,
.ant-col-xs-15,
.ant-col-xs-16,
.ant-col-xs-17,
.ant-col-xs-18,
.ant-col-xs-19,
.ant-col-xs-20,
.ant-col-xs-21,
.ant-col-xs-22,
.ant-col-xs-23,
.ant-col-xs-24 {
  position: relative;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
}
.h-5Am {
  position: fixed;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  padding-left: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 150;
  background-color: #404040;
  .ant-dropdown-trigger {
    display: inline-block;
    color: #999;
    cursor: pointer;
    -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fa + span {
    margin-left: 4px;
  }
  .Yv5Zx {
    float: right;
    margin-right: 15px;
    color: #999;
    cursor: pointer;
  }
}
.rQQG7 {
  width: 30%;
  height: 100%;
  border-right: 1px solid #d9d9d9;
}
._3revO {
  overflow-y: scroll;
  height: 100%;
}
._2mnPN {
  position: relative;
}
._3br9T {
  position: relative;
  -webkit-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: 1;
}
._1GsW5 {
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  color: #595959;
  .fa {
    padding-right: 3px;
    font-size: 18px;
    vertical-align: bottom;
  }
}
._2TxA- {
  position: relative;
  margin-bottom: 0;
  background-color: #efe9d9;
  border-top: 1px solid #d9d9d9;
}
._3P4JX {
  font-size: 16px;
  width: 40px;
  text-align: center;
  position: relative;
  min-height: 30px;
  max-height: 50px;
  ul._3FcHm {
    top: 100%;
  }
  ul._2V8zt {
    display: none;
    position: absolute;
    z-index: 99;
    right: 0;
  }
  ._2w9pn {
    font-size: 14px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    list-style: none;
    background-color: #fff;
    color: #595959;
    border-radius: 6px;
  }
}
._25Ilv {
  position: relative;
  height: 90px;
  color: #595959;
  background-color: #fff;
  margin-bottom: 0;
  padding: 15px 10px 15px 60px;
  -webkit-box-shadow: 0 0 0 1px #d9d9d9;
  box-shadow: 0 0 0 1px #d9d9d9;
  border-left: 5px solid transparent;
  list-style: none;
  line-height: 60px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ._13kgp {
    position: absolute;
    top: 30px;
    left: 20px;
    width: 22px;
    height: 30px;
    background: url(../assets/sprite.9d24217.png) no-repeat 0 -25px;
    background-size: 250px;
  }
  .poOXI {
    float: right;
  }
}
._1tqbw,
._25Ilv:hover,
._33nt7 {
  background-color: #e6e6e6;
}
._33nt7 {
  border-left-color: #ec7259;
}
._2po2r {
  padding: 10px 20px;
  line-height: 20px;
  white-space: nowrap;
  text-align: left;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  ._22XWG {
    margin-right: 5px;
  }
}
.cRfUr {
  border-bottom: 1px solid #d9d9d9;
}
._2po2r:first-child {
  border-radius: 4px 4px 0 0;
}

._33nt7 .NariC {
  color: #333;
}
._25Ilv .NariC,
._25Ilv .poOXI li._3nZXj ul li {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._25Ilv .NariC {
  font-size: 18px;
}
._25Ilv .hLzJv,
._25Ilv .NariC {
  display: block;
  height: 30px;
  line-height: 30px;
  margin-right: 40px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._25Ilv ._29C-V {
  position: absolute;
  bottom: 2px;
  left: 5px;
  font-size: 9px;
  line-height: 16px;
  color: #595959;
}
._2cVn3 {
  line-height: 30px;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  color: #999;
  margin-bottom: 80px;
}
._1Yy97 {
  position: relative;
  width: 70%;
  height: 100%;
}
._2mnPN {
  position: relative;
}
._3br9T {
  position: relative;
  -webkit-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: 1;
}
._3DuaW {
  position: relative;
  height: 100vh;
  padding-top: 20px;
  ._3-3KB {
    position: absolute;
    right: 5px;
    top: 2px;
  }
}
._1WI52 {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
._24i7u {
  width: 100%;
  padding: 0 80px 10px 40px;
  margin-bottom: 0;
  border: none;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #595959;
  background-color: transparent;
  outline: none;
  border-radius: 0;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._3LYoB {
  margin: 0;
  list-style-type: none;
  background-color: #d9d9d9;
  border-bottom: 1px solid #ccc;
  font-size: 0;
  .cztJE {
    width: 110px;
    a {
      font-size: 13px;
    }
  }
  .tGbI7 {
    float: right;
  }
  li {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    a {
      color: #595959;
      padding: 11px 14px;
      display: inline-block;
      line-height: 17px;
      font-size: 16px;
    }
  }
  ._3-PBb {
    display: none;
  }
}
.clearfix {
  zoom: 1;
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
._3LYoB ._2zLpt,
._3LYoB ._2zLpt > a.jLrZL {
  position: relative;
}
._15389 {
  height: calc(100% - 85px);
  overflow-y: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
._1WI52 ._2HkLJ {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
._2HkLJ {
  color: #333;
}
.kalamu-area {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  bottom: 0;
  outline: 0;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 40px 80px;
  p {
    margin: 0 0 25px;
    word-break: break-word;
  }
}
._3LYoB ._2zLpt > a.jLrZL:after {
  display: block;
  width: 0;
  height: 0;
  border: 5px solid #999;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom: 0;
  content: "";
  position: absolute;
  top: 8px;
  right: 5px;
}
div:focus {
  outline: none;
}

// ----------------------------------

._3LYoB {
  margin: 0;
  list-style-type: none;
  background-color: #d9d9d9;
  border-bottom: 1px solid #ccc;
  font-size: 0;
}
body.reader-night-mode ._3LYoB {
  background-color: #2e2e2e;
  border-color: #2e2e2e;
}
._3LYoB ._1_QmL {
  font-size: 13px;
  margin: 10px 30px 0 0;
}
body.reader-night-mode ._3LYoB ._1_QmL {
  color: #b3b3b3;
}
._3LYoB .tGbI7 {
  float: right;
}
._3LYoB .tGbI7 a {
  font-size: 13px;
}
._3LYoB li {
  display: inline-block;
  cursor: pointer;
  text-align: center;
}
._3LYoB li a {
  color: #595959;
  padding: 11px 14px;
  display: inline-block;
  line-height: 17px;
  font-size: 16px;
}
body.reader-night-mode ._3LYoB li a {
  color: #b3b3b3;
}
._3LYoB li a:hover {
  color: #f2f2f2;
  background-color: #595959;
}
body.reader-night-mode ._3LYoB li a:hover {
  color: #fff;
  background-color: #595959;
}
._3LYoB .cztJE {
  width: 110px;
}
._3LYoB .cztJE a {
  font-size: 13px;
}
._3LYoB .cztJE a ._1id9W {
  width: 17px;
}
._3LYoB ._1OZnx {
  width: 150px;
}
._3LYoB ._3-PBb {
  display: none;
}
._3LYoB ._2zLpt,
._3LYoB ._2zLpt > a.jLrZL {
  position: relative;
}
._3LYoB ._2zLpt > a.jLrZL:after {
  display: block;
  width: 0;
  height: 0;
  border: 5px solid #999;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom: 0;
  content: "";
  position: absolute;
  top: 8px;
  right: 5px;
}
._3LYoB ._2zLpt > a.eeRmU {
  position: relative;
}
._3LYoB ._2zLpt > a.eeRmU:after {
  content: "\F058";
  position: absolute;
  top: 15px;
  right: 5px;
  font-size: 10px;
  color: #49be38;
}
._3LYoB ._2zLpt > a._20p0q {
  font-weight: 700;
}
._3LYoB ._2zLpt .mF5rD {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 3;
  pointer-events: auto;
  opacity: 0;
  background-color: #d9d9d9;
  -webkit-transition: opacity 0.2s ease-in-out, top 0.2s ease;
  -o-transition: opacity 0.2s ease-in-out, top 0.2s ease;
  transition: opacity 0.2s ease-in-out, top 0.2s ease;
}
body.reader-night-mode ._3LYoB ._2zLpt .mF5rD {
  color: #fff;
  background-color: #2e2e2e;
}
._3LYoB ._2zLpt .mF5rD li,
._3LYoB ._2zLpt .mF5rD li a {
  display: block;
}
._3LYoB ._2zLpt:hover .mF5rD {
  opacity: 1;
}
._3P4JX ul.NvfK4 {
  display: block;
}

._3P4JX ul._3FcHm:before {
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #fff;
  top: -9px;
}

._3P4JX ul._2V8zt:before {
  position: absolute;
  right: 12px;
  content: "";
  display: inline-block;
}
._2po2r:hover {
  background-color: #666;
  color: #fff;
}

._1mU5v {
  height: 0;
  opacity: 0;
  margin-top: 0;
}

._1iZMb ._2a1Rp {
  height: 85px;
  opacity: 1;
  margin-top: 10px;
}

._1CtV4 {
  width: 100%;
  height: 25px;
  color: #ccc;
  background-color: #595959;
  border: 1px solid #333;
  padding: 4px 6px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
}
._2V8zt {
  display: none;
  position: absolute;
  z-index: 99;
  right: 0;
}

.articlewrapper {
  width: 100%;
  height: 100%;
  border-right: 1px solid #d9d9d9;
}
</style>
