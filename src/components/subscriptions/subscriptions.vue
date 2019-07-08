<template>
  <div class="col-xs-16 col-xs-offset-8 main">
    <Loading v-if="!show"></Loading>
    <div v-if="show">
      <div class="main-top">
        <a href="/u/5c13b327009c" target="_blank" class="avatar">
          <img :src="current.source.avatar_source">
        </a>
        <a href="/u/5c13b327009c" target="_blank" class="btn btn-hollow">
          个人主页
          <i class="iconfont ic-link"></i>
        </a>
        <a
          href="/notifications#/chats/new?mail_to=1637794"
          target="_blank"
          class="btn btn-hollow"
        >发简信</a>
        <div class="title">
          <a href="/u/5c13b327009c" target="_blank" class="name">{{current.source.nickname}}</a>
          <!---->
          <!---->
        </div>
        <div class="info">写了145237字，获得了1792个喜欢</div>
      </div>
      <ul class="trigger-menu">
        <li @click="change(0,id)" :class="{active: active[0]}">
          <a>
            <i class="iconfont ic-articles"></i>最新发布
          </a>
        </li>
        <li @click="change(1,id)" :class="{active: active[1]}">
          <a>
            <i class="iconfont ic-latestcomments"></i>最新评论
          </a>
        </li>
        <li @click="change(2,id)" :class="{active: active[2]}">
          <a>
            <i class="iconfont ic-hot"></i>热门
          </a>
        </li>
      </ul>
      <ul v-show="!contentshow" class="note-list">
        <li
          :key="index"
          v-for="(item,index) in current.source.notes"
          :class="{'have-img':item.cover_img}"
        >
          <a
            href="/p/f77dddc0da7f?utm_source=desktop&amp;utm_medium=timeline"
            target="_blank"
            class="wrap-img"
            v-if="item.cover_img"
          >
            <img :src="item.cover_img">
          </a>
          <div class="content">
            <!-- <div class="author">
                    <a href="/u/5c13b327009c" target="_blank" class="avatar">
                      <img
                        src="//upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                      >
                    </a>
                    <div class="info">
                      <a href="/u/5c13b327009c" target="_blank" class="nickname">极客教程</a>
                      <span>发表了文章 · 前天 01:15</span>
                    </div>
            </div>-->
            <a
              href="/p/f77dddc0da7f?utm_source=desktop&amp;utm_medium=timeline"
              target="_blank"
              class="title"
            >{{item.title}}</a>
            <p class="abstract">{{item.public_abbr}}</p>
            <div class="meta">
              <a href="/p/f77dddc0da7f#comments" target="_blank">
                <i class="iconfont icon-pinglun-copy"></i>
                {{item.comments_count}}
              </a>
              <span>
                <i class="iconfont icon-aixin"></i>
                {{item.likes_count}}
              </span>
              <!---->
            </div>
          </div>
        </li>
        <!---->
        <!-- <a class="load-more">阅读更多</a> -->
      </ul>
      <div class="notes-placeholder" v-show="contentshow">
        <div class="img"></div>
        <div class="content">
          <div class="title"></div>
          <div class="sub-title"></div>
          <div class="text"></div>
          <div class="text animation-delay"></div>
          <div class="meta">
            <div class="read"></div>
            <i class="iconfont icon-pinglun-copy"></i>
            <div class="small"></div>
            <i class="iconfont icon-aixin"></i>
            <div class="small"></div>
          </div>
        </div>
      </div>
      <a class="load-more" v-show="!contentshow">阅读更多</a>
      <!---->
    </div>
  </div>
</template>
<script>
import Loading from "./loading.vue";
import axios from "axios";
export default {
  data() {
    return {
      detail: {
        id: 1616908,
        source_id: 1637794,
        source_type: "User",
        source: {
          id: 1637794,
          slug: "5c13b327009c",
          nickname: "极客教程",
          avatar_source:
            "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg",
          gender: 0,
          badge: null,
          total_wordage: 145237,
          total_likes_count: 1792,
          followed: true,
          notes: [
            {
              id: 36517854,
              slug: "f77dddc0da7f",
              title:
                "Nest.js学习之路(14)- TypeORM库(1)存取 in nest.js(连接设置)",
              public_abbr:
                "nest.js团队选用TypeORM作为与数据库互动的库，TypeORM也是以Typescript开源的项目 nest.js里使用Ty...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-46742153807ee0dc.png",
              shared_at: "2019-06-17T01:15:11+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 4,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36506366,
              slug: "80fab3a615a6",
              title: "Nest.js学习之路(13)- Interceptor in nest.js",
              public_abbr:
                "除了middleware可以对原本request/response加工之外，nest.js提供interceptor可以对于程式要进入...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-4483dd82b247ad79.png",
              shared_at: "2019-06-17T01:14:57+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 8,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36344960,
              slug: "f175e5d0ce98",
              title: "Nest.js学习之路(12)-Guard in nest.js(Authorization)",
              public_abbr:
                "除了authentication，通常会需要以role来管理页面权限。 昨天提到Guard中的canActivate会传入Execut...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-07fef021753c68e0.png",
              shared_at: "2019-06-17T01:14:41+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 4,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36343058,
              slug: "736f6024ebc1",
              title: "Nest.js学习之路(11)-Guard(Authentication) in nest.js(上)",
              public_abbr:
                "验证(authentication)部分在nest.js也是跟Angular借Guard这一套来使用，authentication逻辑...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-4b9516bd7de9fe16.png",
              shared_at: "2019-06-17T01:14:24+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 4,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36341216,
              slug: "a13ad84e639f",
              title: "Nest.js学习之路(10)-Exception in nest.js(下)",
              public_abbr:
                "如果要完全自订exception，就需要自己撰写class实作ExceptionFilter接口 新增httpexception.fi...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-c12b0c52f15f20b1.png",
              shared_at: "2019-06-17T01:13:48+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 3,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36340172,
              slug: "e76462ba50b2",
              title: "Nest.js学习之路(9)-Exceptions in nest.js(上)",
              public_abbr:
                "nest.js处理例外使用HttpException这个base class 例如:app.controller.ts 使用postm...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-b46486f58ea640bb.png",
              shared_at: "2019-06-10T17:28:29+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 14,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36308324,
              slug: "082e22dc7ca5",
              title: "Nest.js学习之路(8)-Middleware in nest.js(上)",
              public_abbr:
                "Middleware是在request/response周期开始/结束修改request/response物件，这是express f...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-60752c62d2fae972.png",
              shared_at: "2019-06-10T17:27:59+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 12,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36299253,
              slug: "2ab8c49ed2e1",
              title: "Nest.js学习之路(7)-验证DTO属性-Pipe",
              public_abbr:
                "前面在AppController下建立Platform 从Client传递使用者资料至nest并没有任何验证，client即便输入不符...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-ec34dd40b37657aa.png",
              shared_at: "2019-06-03T15:05:03+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 21,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36294413,
              slug: "7a8a8ada5196",
              title: "Nest.js学习之路(6)-Providers & Dependency Injection(上)",
              public_abbr:
                "Controller负责处理Request及产生Response，数据库存取或是业务逻辑(business logic)通常写在Ser...",
              cover_img:
                "https://upload-images.jianshu.io/upload_images/1637794-d91bc94023617ee7.png",
              shared_at: "2019-06-01T00:23:38+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 37,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36290746,
              slug: "42749a17de8f",
              title:
                "Nest.js学习之路(5)-Controller读取Param、Query String及Body",
              public_abbr:
                "在nest.js读取URL Param、Query String及Body资料很直观。 先把Server跑起來 然后准备fake da...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/1637794-30b7ef9691b77038.png",
              shared_at: "2019-05-27T22:48:04+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 63,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36185404,
              slug: "beb5144f118c",
              title: "Nest.js学习之路(4)-Controller in nest.js(上)",
              public_abbr:
                "跟.NET ASP MVC与Java Spring framework一样，controller负责处理来自Client的Reques...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/1637794-881f6b51056e418f.png",
              shared_at: "2019-05-26T23:43:48+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 56,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36184633,
              slug: "103c801fa4e1",
              title: "Nest.js学习之路(3)-Module in nest.js",
              public_abbr:
                "Nest.js应用程序的组成 Modules Controllers ProvidersServicesPipesGuardsInte...",
              cover_img: "",
              shared_at: "2019-05-25T18:40:49+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 45,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36183110,
              slug: "bfec00d943ec",
              title: "Nest.js学习之路(2)-使用nest.js CLI开始",
              public_abbr:
                "1. 使用CLI建立项目 1.1 安装nestjs@cli 1.2 新建项目 现在我们新建了名为 geekjc的 nest项目，进入到...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/1637794-076af74eb7d235c0.png",
              shared_at: "2019-05-14T11:41:37+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 45,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36179741,
              slug: "dee9fce060d2",
              title: "Nest.js学习之路(1)-开发环境准备",
              public_abbr:
                "1. 前言 本Nest.js学习之路，为完整的Nest.js开发入门教程系列，学完，保证能入门，上手开发。 当然前提是你需要事先学好n...",
              cover_img: "",
              shared_at: "2019-05-14T11:28:50+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 27,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 39621793,
              slug: "88ac3cb8fa04",
              title: "学习node应用中node-schedule定时任务",
              public_abbr:
                "1. 前言 在实际开发项目中，会遇到很多定时任务的工作。比如：定时导出某些数据、定时发送消息或邮件给用户、定时备份什么类型的文件等等 ...",
              cover_img: "",
              shared_at: "2019-05-13T18:20:29+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 67,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 46010312,
              slug: "a626aaeebe4a",
              title: "捣鼓云服务器ECS",
              public_abbr:
                "1. 前言 前几天花了6000多买了一个阿里云的云服务器，如下图 作为一个前端开发者，开始买这样一个服务器，也是一脸懵逼的，很多都是不...",
              cover_img: "",
              shared_at: "2019-04-30T17:07:47+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 10,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 42516502,
              slug: "91cf0071c1f6",
              title: "细数国内外的前端大牛",
              public_abbr:
                "1. 前言 本文将枚举一些前端界内比较熟知的前端技术大牛，分为个人简介、技术博客、擅长领域几个方向，希望能对初步进入前端的人一些指引和...",
              cover_img: "",
              shared_at: "2019-03-06T15:57:38+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 1182,
              comments_count: 3,
              likes_count: 33,
              rewards_count: 0
            },
            {
              id: 40980394,
              slug: "71c212807f55",
              title: "从开通google广告开始做一个年度总结",
              public_abbr:
                "1. 回顾2018 1.1 前言(google广告开通) 本来不想写年终总结的，但是大年30晚，我开发的学习平台极客教程开通googl...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/1637794-68b8658ad9e6b74a.png",
              shared_at: "2019-02-10T12:19:29+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 200,
              comments_count: 3,
              likes_count: 3,
              rewards_count: 0
            },
            {
              id: 39603468,
              slug: "2abb2469bcbb",
              title: "详解学习Reflect Metadata",
              public_abbr:
                "1. 前言 在 ES6 的规范当中，就已经存在 Reflect API 了。简单来说这个 API 的作用就是可以实现对变量操作的函数化...",
              cover_img: "",
              shared_at: "2019-01-14T08:58:38+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 853,
              comments_count: 0,
              likes_count: 4,
              rewards_count: 0
            },
            {
              id: 13253425,
              slug: "d6c34eb87bca",
              title: "react优化性能的几点",
              public_abbr:
                "1. 基本原理 1.1 render()函数 一般来说，要尽可能少地在 render 函数中做操作。如果非要做一些复杂操作或者计算，也...",
              cover_img: "",
              shared_at: "2019-01-03T12:47:23+08:00",
              commentable: true,
              author: {
                id: 1637794,
                slug: "5c13b327009c",
                nickname: "极客教程",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/1637794/cc356a6e4c98.jpg"
              },
              views_count: 261,
              comments_count: 0,
              likes_count: 9,
              rewards_count: 0
            }
          ],
          page: 1,
          total_pages: 7
        }
      },
      otherdatail: {
        id: 11711518,
        source_id: 11122066,
        source_type: "User",
        source: {
          id: 11122066,
          slug: "859a79037752",
          nickname: "林清猫耳",
          avatar_source:
            "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg",
          gender: 1,
          badge: null,
          total_wordage: 162997,
          total_likes_count: 115,
          followed: true,
          notes: [
            {
              id: 42607953,
              slug: "a95c7fa1cba7",
              title: "隐藏selenium+webdriver方案",
              public_abbr:
                "本文参考自掘金作者青南：原文链接 如何判断webdriver和普通Chrome 启动Chrome窗口 在Chrome的开发者工具中打开...",
              cover_img: "",
              shared_at: "2019-03-07T21:43:02+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 119,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 41879013,
              slug: "261068d91603",
              title: "使用Charles抓包手机",
              public_abbr:
                "安装 首先去官网安装Charles 破解 注册码: 使用 手机和电脑连同一个WiFi 修改手机上的WiFi代理设置， 把服务器的主机名...",
              cover_img: "",
              shared_at: "2019-02-23T23:11:54+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 36,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 41468484,
              slug: "5dab649d9fac",
              title: "Scrapy 中设置随机 User-Agent",
              public_abbr:
                "安装scrapy-fake-useragent包 scrapy-fake-useragent包官网：https://pypi.org/...",
              cover_img: "",
              shared_at: "2019-02-16T17:56:09+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 29,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 41467078,
              slug: "7e1b3cb1655f",
              title: "Scrapy输出中文保存中文",
              public_abbr:
                "scrapy在保存json文件时容易乱码 settings.py文件改动： pipeline.py文件改动：",
              cover_img: "",
              shared_at: "2019-02-16T17:24:35+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 17,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37581822,
              slug: "6c64f7fd27ca",
              title: "爬虫工程师是干什么的?",
              public_abbr:
                "本文转载自CSDN博客：https://blog.csdn.net/fei2636/article/details/78999318?...",
              cover_img: "",
              shared_at: "2018-11-30T19:54:02+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 294,
              comments_count: 0,
              likes_count: 6,
              rewards_count: 0
            },
            {
              id: 37581794,
              slug: "159852cc1a7f",
              title: "CentOS7 安装Python3.6.4",
              public_abbr:
                "本文转载自博客园ESHLkangi：https://www.cnblogs.com/ESHLkangi/p/8545979.html ...",
              cover_img: "",
              shared_at: "2018-11-30T19:53:35+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 19,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37514912,
              slug: "1e32d06e7b0c",
              title: "对爬虫工程师的理解",
              public_abbr:
                "本文转载自简书小温侯原文链接：https://www.jianshu.com/p/61fe5b9320ac 上个月初，我入职了一家公司...",
              cover_img: "",
              shared_at: "2018-11-29T15:55:00+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 120,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 37478421,
              slug: "9de8c47ad898",
              title: "关于 Really Simple SSL 插件的使用笔记",
              public_abbr:
                "首先，在插件 Really Simple SSL 的默认配置里，插件本身是自带301重导向到 https 设定的。其次也默认内部的 W...",
              cover_img: "",
              shared_at: "2018-11-28T22:09:07+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 409,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37429668,
              slug: "4c5d7c4a3933",
              title: "搭建Nginx静态网站",
              public_abbr:
                "软件环境：CentOS 7.4 参考文档：腾讯云开发者实验室：https://cloud.tencent.com/developer/...",
              cover_img: "",
              shared_at: "2018-11-28T02:11:26+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 39,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37429665,
              slug: "cc3bed53958d",
              title: "设置HTTP重定向为HTTPS",
              public_abbr:
                "方法一 使用 WordPress Really Simple SSL 插件 方法二 启动重定向：sudo a2enmod rewrit...",
              cover_img: "",
              shared_at: "2018-11-28T02:10:56+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 221,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37429663,
              slug: "2f3fe52b6b12",
              title: "如何安装https证书 (ubuntu+apache2)",
              public_abbr:
                "今天折腾了一整晚给自己的网站挂锁，最终找到一篇和我情况相同的解决方案。 搬运自知乎 FengYQ：https://zhuanlan.z...",
              cover_img: "",
              shared_at: "2018-11-28T02:10:23+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 219,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37332246,
              slug: "12ff22542bb5",
              title: "实现WordPress支持多个域名绑定/访问",
              public_abbr:
                "搬运一个小技巧，通过简单修改wp-config.php文件来实现WordPress博客支持绑定多个域名及访问。原文链接：https:/...",
              cover_img: "",
              shared_at: "2018-11-26T12:24:08+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 245,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37246638,
              slug: "153ded4332a1",
              title: "fake-useragent伪装爬虫请求头",
              public_abbr:
                "在很多爬虫中请求头是必不可少的，而使用 fake-useragent 这个库则可以让我们非常方便得伪装请求头。 安装 直接使用pip安...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/11122066-53066031e38e85b2.png",
              shared_at: "2018-11-24T15:17:46+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 88,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 37102266,
              slug: "e64fab247a10",
              title: "利用Python进行录音和音频分析",
              public_abbr:
                "pyaudio简介 Python有个很强大的处理音频的库pyqudio， 使用pyaudio库可以进行录音，播放，生成wav文件等等。...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/11122066-42a6b3c01845e5c7.png",
              shared_at: "2018-11-21T18:38:39+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 2337,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36949073,
              slug: "0953239e46b3",
              title: "经济学人文章爬虫",
              public_abbr:
                "因为偶然的机会知道了经济学人这个网站，下面是引自百度百科的相关介绍： 《经济学人》是一份由伦敦经济学人报纸有限公司出版的杂志，创办于1...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/11122066-6f8bc5e9b887a000.png",
              shared_at: "2018-11-19T14:56:41+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 102,
              comments_count: 3,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36942432,
              slug: "3b87c38423ad",
              title: "Economist图片库",
              public_abbr: "",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/11122066-5044947b3476bea2.png",
              shared_at: "2018-11-18T23:17:59+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 29,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36909943,
              slug: "362828c9dc7e",
              title: "去掉WordPress功能中的文章，评论，org链接",
              public_abbr:
                "找到要修改的文件 打开网站的根目录，找到 wp-includes 文件夹，在此目录下找到 widgets 文件夹，这个目录下有个 cl...",
              cover_img: "",
              shared_at: "2018-11-17T22:37:15+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 61,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36894612,
              slug: "ec5e70962d20",
              title: "Google搜索引擎小技巧",
              public_abbr:
                "本文参考：https://www.williamlong.info/archives/728.html 搜索特定的词组 当你搜索一个特...",
              cover_img: "",
              shared_at: "2018-11-17T16:21:07+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 68,
              comments_count: 0,
              likes_count: 1,
              rewards_count: 0
            },
            {
              id: 36874789,
              slug: "aa93a0341c82",
              title: "CentOS7.4安装ipython",
              public_abbr:
                "使用pip3安装ipython及其依赖包：pip3 install ipython在 .bashrc文件中添加环境变量设置：alias...",
              cover_img: "",
              shared_at: "2018-11-17T00:55:02+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 51,
              comments_count: 0,
              likes_count: 0,
              rewards_count: 0
            },
            {
              id: 36290468,
              slug: "0963320dec90",
              title: "9行代码实现YouTube视频批量下载",
              public_abbr:
                "先上源码： 从YouTube批量下载视频只有两步： 拿到播放列表里每个视频的url 使用youtube-dl下载视频 其中第一步拿到每...",
              cover_img:
                "http://upload-images.jianshu.io/upload_images/11122066-7c77935ec727695a.png",
              shared_at: "2018-11-05T11:50:49+08:00",
              commentable: true,
              author: {
                id: 11122066,
                slug: "859a79037752",
                nickname: "林清猫耳",
                avatar:
                  "http://upload.jianshu.io/users/upload_avatars/11122066/428151dd-870b-49eb-8528-51f9403217db.jpg"
              },
              views_count: 1777,
              comments_count: 12,
              likes_count: 5,
              rewards_count: 0
            }
          ],
          page: 1,
          total_pages: 5
        }
      },
      show: true,
      current: "",
      active: {
        0: true,
        1: false,
        2: false
      },
      contentshow: true
      //监听 id
      // id: this.$route.params.id,
    };
  },
  components: {
    Loading
  },
  methods: {
    change(i, id) {
      let publicPath =
        process.env.NODE_ENV === "production" ? "/Short-book/" : "/";
      //骨架屏
      this.contentshow = true;
      console.log("i id", i, id);
      for (const key in this.active) {
        this.active[key] = false;
        // if (object.hasOwnProperty(key)) {
        //   const element = object[key];
        // }
      }
      this.active[i] = true;
      console.log(this.active);
      switch (i) {
        case 0:
          axios({
            method: "get",
            url: `${publicPath}static/moock/${id}NewComit.json`
            // responseType: "stream"
          }).then(res => {
            console.log("this", this);
            console.log(res, this.current);
            this.current.source.notes = res.data.notes;
            setTimeout(() => {
              this.contentshow = false;
            }, 300);
          });
          break;
        case 1:
          axios({
            method: "get",
            url: `${publicPath}static/moock/${id}NewPing.json`
            // responseType: "stream"
          }).then(res => {
            console.log("this", this);
            this.current.source.notes = res.data.notes;
            console.log(res, this.current);
            setTimeout(() => {
              this.contentshow = false;
            }, 300);
          });
          break;
        case 2:
          axios({
            method: "get",
            url: `${publicPath}static/moock/${id}hot.json`
            // responseType: "stream"
          }).then(res => {
            console.log("this", this);
            this.current.source.notes = res.data.notes;
            console.log(res, this.current);
            setTimeout(() => {
              this.contentshow = false;
            }, 300);
          });
          break;

        default:
          break;
      }
    },
    getdetail() {
      // if (this.$route.params.id == "1616908") {
      //   console.log("detail", this.detail);
      //   return this.detail;
      // } else {
      //   console.log("otherdatail");
      //   return this.otherdatail;
      // }
      this.contentshow = false;
      setTimeout(() => {
        if (this.id == "1616908") {
          console.log("detail", this.detail);
          this.current = this.detail;
        } else {
          console.log("otherdatail");
          this.current = this.otherdatail;
        }
      }, 300);
    }
  },
  mounted() {
    console.log(1, this.$route.params.id);
    setTimeout(() => {
      this.show = true;
    }, 300);
    document.body.style.overflowY = "scroll";
    // axios({
    //   method: "get",
    //   url: "/static/moock/1616908NewComit.json"
    //   // responseType: "stream"
    // }).then(function(res) {
    //   console.log(res);
    // });
  },
  updated() {
    // console.log(2, this.$route.params.id);
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
  beforeUpdate() {
    // console.log(3, this.$route.params.id);
  },
  created() {
    // console.log(4, this.$route.params.id);
  },
  computed: {
    // current() {
    //   console.log(this.$route.params.id);
    //   return this.getdetail();
    // }
    id() {
      return this.$route.params.id;
    }
  },
  watch: {
    id: {
      handler(newval, oldval) {
        console.log(newval, oldval);
        this.show = false;
        this.getdetail();
      },
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
// .subscription .aside li .router-link-active .wrap {
// }
.note-list .title:hover {
  text-decoration: underline;
}
a {
  text-decoration: none;
}
.open > .dropdown-menu {
  display: block;
}
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.small,
small {
  font-size: 85%;
}
.notes-placeholder .meta .small {
  height: 16px;
  width: 30px;
}
.notes-placeholder .meta i {
  margin: 0 5px;
  vertical-align: middle;
}
.notes-placeholder .meta div {
  display: inline-block;
  vertical-align: middle;
  background-color: #eaeaea;
}
.notes-placeholder .meta .read {
  height: 16px;
  width: 50px;
}
.notes-placeholder .meta {
  margin: 0;
  color: #eaeaea;
  font-size: 12px;
}
.notes-placeholder .text {
  width: 100%;
  height: 16px;
  margin: 0 0 10px;
  background-color: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
.notes-placeholder .animation-delay {
  -webkit-animation: loading 1s ease-in-out -0.5s infinite;
  animation: loading 1s ease-in-out -0.5s infinite;
}
@keyframes loading {
  0% {
    width: 60%;
  }

  50% {
    width: 100%;
  }

  to {
    width: 60%;
  }
}
.notes-placeholder .text {
  width: 100%;
  height: 16px;
  margin: 0 0 10px;
  background-color: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
.notes-placeholder .sub-title {
  display: none;
  width: 70%;
  height: 16px;
  margin: 0 0 15px !important;
  background-color: #eaeaea;
}
.notes-placeholder .title {
  float: none !important;
  width: 50%;
  height: 20px;
  margin: 0 0 15px !important;
  background-color: #eaeaea;
}
.notes-placeholder .title:before {
  content: "" !important;
}
.notes-placeholder .img {
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 125px;
  height: 100px;
  border-radius: 4px;
  background-color: #eaeaea;
}
.notes-placeholder {
  position: relative;
  padding: 15px 2px 0 0;
  margin-bottom: 50px;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .meta a,
.note-list .meta a:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}
.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}
// 保护用户隐私
.note-list .title:visited {
  color: #969696;
}
.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.note-list .have-img > div {
  padding-right: 140px;
}
.note-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.note-list .have-img .wrap-img {
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  width: 125px;
  height: 100px;
}
.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
.note-list li.have-img {
  min-height: 140px;
}
.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.trigger-menu li:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 100%;
  opacity: 0;
  border-bottom: 2px solid #646464;
  -webkit-transform: translate(-50%) scaleX(0);
  transform: translate(-50%) scaleX(0);
  transition: 0.2s ease-in-out;
}
.trigger-menu li:hover:after {
  opacity: 1;
  -webkit-transform: translate(-50%) scaleX(1);
  transform: translate(-50%) scaleX(1);
  transition: 0.2s ease-in-out;
}
.trigger-menu li:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 100%;
  opacity: 0;
  border-bottom: 2px solid #646464;
  -webkit-transform: translate(-50%) scaleX(0);
  transform: translate(-50%) scaleX(0);
  transition: 0.2s ease-in-out;
}
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #969696;
  line-height: 25px;
}
.trigger-menu .active a,
.trigger-menu a:hover {
  color: #646464;
}
.trigger-menu li.active {
  border-bottom: 2px solid #646464;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  margin-bottom: -1px;
}
.subscription .main .main-top .info {
  margin-top: 10px;
  padding-left: 100px;
  font-size: 14px;
  color: #969696;
}
.subscription .main .main-top .title .name {
  font-size: 21px;
  font-weight: 700;
  vertical-align: middle;
  display: inline;
}
.subscription .main .main-top .title {
  padding: 10px 0 0 100px;
}
.btn-hollow {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
}
.subscription .main .main-top .btn {
  float: right;
  margin: 23px 0 23px 20px;
  font-size: 14px;
}
.subscription .main .main-top .btn-hollow {
  padding: 8px 16px;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-delete,
.btn-gray,
.btn-hollow {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  border-radius: 40px;
  background: none;
}
.btn-hollow {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
}
.subscription .main .main-top .btn {
  float: right;
  margin: 23px 0 23px 20px;
  font-size: 14px;
}
.subscription .main .main-top .btn-hollow {
  padding: 8px 16px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.subscription .main .main-top .avatar,
.subscription .main .main-top .avatar-collection {
  float: left;
  width: 80px;
  height: 80px;
}
.subscription .main .main-top .avatar {
  margin-left: -2px;
}
.load-more {
  width: 100%;
  height: 40px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  display: block;
}
.notes-placeholder {
  position: relative;
  padding: 15px 2px 0 0;
  margin-bottom: 50px;
}
.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.trigger-menu {
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}
.subscription .main .main-top {
  margin-bottom: 30px;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.subscription .main {
  padding-left: 0;
}
.subscription .aside .name {
  font-size: 14px;
  vertical-align: middle;
  display: inline-block;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
img {
  vertical-align: middle;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.subscription .aside .avatar,
.subscription .aside .avatar-collection {
  width: 40px;
  height: 40px;
  margin-right: 4px;
  display: inline-block;
}
.subscription .aside .wrap {
  padding: 10px 13px;
  display: block;
}
.subscription .aside li:first-child .wrap {
  border-radius: 0 0 0 4px !important;
}
.subscription .aside li.active .wrap {
  background-color: #f0f0f0;
  border-radius: 4px 0 0 4px;
}
ul {
  padding-left: 0;
}
.subscription .aside ul {
  margin-top: 7px;
  list-style: none;
  border-top: 1px solid #f0f0f0;
}
.subscription .aside .add-people span {
  margin-left: 4px;
}
.subscription .aside .add-people {
  float: right;
  margin: 4px 10px 0 0;
  font-size: 13px;
  color: #333;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857;
  color: #333;
  white-space: nowrap;
}
.subscription .aside .dropdown-menu a {
  padding: 10px 20px;
}
li {
  line-height: 20px;
}
.arrow-top:after {
  top: -9px;
  border-bottom: 9px solid #fff;
}
.arrow-top:after,
.arrow-top:before {
  position: absolute;
  top: -10px;
  left: 45%;
  content: "";
  display: inline-block;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid transparent;
}
.subscription .aside .arrow-top:after,
.subscription .aside .arrow-top:before {
  left: 45%;
}
.dropdown-menu {
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
}
.dropdown-menu {
  margin-top: 0;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  -webkit-filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}
.subscription .aside ul {
  margin-top: 7px;
  list-style: none;
  border-top: 1px solid #f0f0f0;
}
.subscription .aside .ic-filter {
  margin-left: 5px;
  color: #c8c8c8;
}
.subscription .aside .dropdown-menu {
  top: 23px;
  left: 20px;
  min-width: 130px;
  text-align: center;
}
a {
  cursor: pointer;
}
.subscription .aside .change-type {
  margin-left: 15px;
  font-size: 15px;
}
.subscription .main {
  padding-left: 0;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.col-xs-16 {
  width: 66.66667%;
}
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-13,
.col-lg-14,
.col-lg-15,
.col-lg-16,
.col-lg-17,
.col-lg-18,
.col-lg-19,
.col-lg-20,
.col-lg-21,
.col-lg-22,
.col-lg-23,
.col-lg-24,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-13,
.col-md-14,
.col-md-15,
.col-md-16,
.col-md-17,
.col-md-18,
.col-md-19,
.col-md-20,
.col-md-21,
.col-md-22,
.col-md-23,
.col-md-24,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-13,
.col-sm-14,
.col-sm-15,
.col-sm-16,
.col-sm-17,
.col-sm-18,
.col-sm-19,
.col-sm-20,
.col-sm-21,
.col-sm-22,
.col-sm-23,
.col-sm-24,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-13,
.col-xs-14,
.col-xs-15,
.col-xs-16,
.col-xs-17,
.col-xs-18,
.col-xs-19,
.col-xs-20,
.col-xs-21,
.col-xs-22,
.col-xs-23,
.col-xs-24 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-13,
.col-xs-14,
.col-xs-15,
.col-xs-16,
.col-xs-17,
.col-xs-18,
.col-xs-19,
.col-xs-20,
.col-xs-21,
.col-xs-22,
.col-xs-23,
.col-xs-24 {
  float: left;
}
.subscription .aside {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 86px 0 0;
  padding: 0 0 30px;
  width: 280px;
  overflow: auto;
  border-right: 1px solid #f0f0f0;
}
.row:after,
.row:before {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}
.row:after,
.row:before {
  content: " ";
  display: table;
}
.row:after {
  clear: both;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
.subscription .row {
  padding-top: 30px;
}
.container:after,
.container:before {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.container:after,
.container:before {
  content: " ";
  display: table;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
a,
body {
  color: #333;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (max-width: 1080px) {
  .container {
    width: 750px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside {
    width: 218.75px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside .name {
    max-width: 100px;
  }
}
@media (max-width: 1080px) {
  .note-list li.have-img {
    min-height: 112px;
  }
}
@media (max-width: 1080px) {
  .note-list .have-img .wrap-img {
    margin-top: -58px;
    bottom: 40px;
    width: 125px;
    height: 100px;
  }
}
@media (max-width: 1080px) {
  .note-list .have-img > div {
    padding-right: 135px;
  }
}
@media (max-width: 1080px) {
  .notes-placeholder .img {
    width: 125px;
    height: 100px;
  }
}
@media (max-width: 1080px) {
  .notes-placeholder .content {
    padding-right: 135px;
  }
}
@media (max-width: 1080px) {
  .subscription .aside {
    width: 218.75px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}

@media (max-width: 1080px) {
  .container {
    width: 750px;
  }
}
// @media (min-width: 992px) {
//   .container {
//     width: 960px;
//   }
// }
// @media (min-width: 1081px) {
//   .container {
//     width: 960px;
//   }
// }

// @media (min-width: 992px) {
//   .container {
//     width: 970px;
//   }
// }

// @media (min-width: 768px) {
//   .container {
//     width: 750px;
//   }
// }
@media (max-width: 770px) {
  .subscription .row {
    display: flex;
    flex-wrap: wrap;
  }
  .subscription .aside {
    position: unset !important;
    margin-top: 0;
    width: 100vw;
  }
  .subscription .main {
    margin-left: 0;
    width: 100%;
  }
  .note-list {
    // width: 100vw;
  }
  .trigger-menu {
    width: calc(100vw - 30px);
  }
  .main-top {
    width: calc(100vw - 30px);
  }
  a.btn.btn-hollow {
    display: none;
  }
}
</style>
