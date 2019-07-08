<template>
  <!--<div class="container faqs">-->
  <div class="main col-xs-16">
    <div class="category-title">
      热门问题
    </div>
    <div class="questions">
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
      <a href="" target="_blank" class="question-title">
        2019.5.12 关于发布文章后内容消失的问题的公告
      </a>
    </div>
    <!--如何玩转简书-->
    <div id="app">
      <div class="category-title">
        如何玩转简书
      </div>
      <div class="questions">
      <div :key="key" v-for="(item,key) in items" v-show="key<num">
        <a href="###" target="_blank" class="question-title">
          {{item}}
        </a>
      </div>
        <span class="question-title more" @click="showMore">{{txt}}</span>
      </div>
    </div>
    <!--简书账号问题-->
    <div id="app">
      <div class="category-title">
        如何玩转简书
      </div>
      <div class="questions">
        <div :key="key" v-for="(item,key) in items" v-show="key<num">
          <a href="###" target="_blank" class="question-title">
            {{item}}
          </a>
        </div>
        <span class="question-title more" @click="showMore">{{txt}}</span>
      </div>
    </div>
    <!--身份认证-->
    <div id="app">
      <div class="category-title">
        如何玩转简书
      </div>
      <div class="questions">
        <div :key="key" v-for="(item,key) in items" v-show="key<num">
          <a href="###" target="_blank" class="question-title">
            {{item}}
          </a>
        </div>
        <span class="question-title more" @click="showMore">{{txt}}</span>
      </div>
    </div>
    <!--简书帮助中心-->
    <div id="app">
      <div class="category-title">
        如何玩转简书
      </div>
      <div class="questions">
        <div :key="key" v-for="(item,key) in items" v-show="key<num">
          <a href="###" target="_blank" class="question-title">
            {{item}}
          </a>
        </div>
        <span class="question-title more" @click="showMore">{{txt}}</span>
      </div>
    </div>
    <!--有关简书文章的一切-->
    <div id="app">
      <div class="category-title">
        如何玩转简书
      </div>
      <div class="questions">
        <div :key="key" v-for="(item,key) in items" v-show="key<num">
          <a href="###" target="_blank" class="question-title">
            {{item}}
          </a>
        </div>
        <span class="question-title more" @click="showMore">{{txt}}</span>
      </div>
    </div>

  </div>

  <!--</div>-->
</template>

<script>
  export default {
      data() {
        return {
          items: [
            '2019.5.12 关于发布文章后内容消失的问题的公告',
            '2019.5.12 关于发布文章后内容消失的问题的公告',
            '2019.5.12 关于发布文章后内容消失的问题的公告',
            '2019.5.12 关于发布文章后内容消失的问题的公告',
            '2019.5.12 关于发布文章后内容消失的问题的公告',
            '2019.5.12 关于发布文章后内容消失的问题的公告'
          ],
          isShow: true,
          txt: '显示全部',
          num: 3
        }
      },
      methods: {
        showMore() {
          console.log('1', this.isShow);
          this.isShow = !this.isShow;
          console.log('2', this.isShow);
          this.num = this.isShow ? 3 : this.items.length;
          this.txt = this.isShow ? '显示全部' : '收起'
        }
      }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .col-xs-16 {
    /*width:100%;*/
    float: left;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .main .category-title {
    margin-bottom: 15px;
    padding-left: 10px;
    font-size: 20px;
    line-height: 1;
    border-left: 4px solid #ea6f5a;
  }

  .main .questions {
    margin-bottom: 30px;
    padding: 10px 28px;
    border-radius: 6px;
    border: 1px solid #d5d5d5;
  }

  .questions .question-title {
    display: block;
    padding: 12px 0;
    font-size: 15px;
    color: #3194d0;
    border-bottom: 1px solid #d5d5d5;
  }

  .questions .question-title:hover {
    text-decoration: underline;
  }

  .main .questions .question-title.more {
    text-align: center;
    color: #999;
  }

  .main .questions .question-title:last-child {

  }

</style>