<template>
  <div class="row">
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image1" alt="180">
        <h4 class="name">{{name1}}</h4>
        <p class="description">{{overview1}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content2}}</a>
        <a class="new" target="_blank" href="#">{{contentb1}}</a>
        <a class="new" target="_blank" href="#">{{contentb2}}</a>
      </div>
    </div>
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image2" alt="180">
        <h4 class="name">{{name2}}</h4>
        <p class="description">{{overview2}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content3}}</a>
        <a class="new" target="_blank" href="#">{{contentc1}}</a>
        <a class="new" target="_blank" href="#">{{contentc2}}</a>
      </div>
    </div>
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image" alt="180">
        <h4 class="name">{{name}}</h4>
        <p class="description">{{overview}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content}}</a>
        <a class="new" target="_blank" href="#">{{contenta1}}</a>
        <a class="new" target="_blank" href="#">{{contenta2}}</a>
      </div>
    </div>
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image3" alt="180">
        <h4 class="name">{{name3}}</h4>
        <p class="description">{{overview3}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content4}}</a>
        <a class="new" target="_blank" href="#">{{contentd1}}</a>
        <a class="new" target="_blank" href="#">{{contentd2}}</a>
      </div>
    </div>
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image4" alt="180">
        <h4 class="name">
          {{name4}}
          <i class="iconfont icon-woman1-copy"></i>
        </h4>
        <p class="description">{{overview4}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content5}}</a>
        <a class="new" target="_blank" href="#">{{contente1}}</a>
        <a class="new" target="_blank" href="#">{{contente2}}</a>
      </div>
    </div>
    <div class="wrap">
      <a target="_blank" href="#">
        <img class="avatar" :src="image5" alt="180">
        <h4 class="name">{{name5}}</h4>
        <p class="description">{{overview5}}</p>
      </a>
      <div class="btn btn-success follow">
        <span>+ 关注</span>
      </div>
      <hr>
      <div class="meta">最近更新</div>
      <div class="recent-update">
        <a class="new" target="_blank" href="#">{{content6}}</a>
        <a class="new" target="_blank" href="#">{{contentf1}}</a>
        <a class="new" target="_blank" href="#">{{contentf2}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "content",
  data() {
    return {
      image: "",
      name: "",
      overview: "",
      content: "",
      contenta1: "",
      contenta2: "",
      image1: "",
      name1: "",
      overview1: "",
      content2: "",
      contentb1: "",
      contentb2: "",
      image2: "",
      name2: "",
      overview2: "",
      content3: "",
      contentc1: "",
      contentc2: "",
      image3: "",
      name3: "",
      overview3: "",
      content4: "",
      contentd1: "",
      contentd2: "",
      image4: "",
      name4: "",
      overview4: "",
      content5: "",
      contente1: "",
      contente2: "",
      image5: "",
      name5: "",
      overview5: "",
      content6: "",
      contentf1: "",
      contentf2: ""
    };
  },
  mounted() {
    let publicPath =
      process.env.NODE_ENV === "production" ? "/Short-book/" : "/";
    axios.get(`${publicPath}static/moock/01.json`).then(response => {
      console.log(response);
      this.image = response.data.data[2].profile_image;
      this.name = response.data.data[2].screen_name;
      this.overview = response.data.data[2].created_at;
      this.content = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/02.json`).then(response => {
      console.log(response);
      this.contenta1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/03.json`).then(response => {
      console.log(response);
      this.contenta2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/04.json`).then(response => {
      console.log(response);
      this.image1 = response.data.data[2].profile_image;
      this.name1 = response.data.data[2].screen_name;
      this.overview1 = response.data.data[2].created_at;
      this.content2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/05.json`).then(response => {
      console.log(response);
      this.contentb1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/06.json`).then(response => {
      console.log(response);
      this.contentb2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/07.json`).then(response => {
      console.log(response);
      this.image2 = response.data.data[2].profile_image;
      this.name2 = response.data.data[2].screen_name;
      this.overview2 = response.data.data[2].created_at;
      this.content3 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/08.json`).then(response => {
      console.log(response);
      this.contentc1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/09.json`).then(response => {
      console.log(response);
      this.contentc2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/10.json`).then(response => {
      console.log(response);
      this.image3 = response.data.data[2].profile_image;
      this.name3 = response.data.data[2].screen_name;
      this.overview3 = response.data.data[2].created_at;
      this.content4 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/11.json`).then(response => {
      console.log(response);
      this.contentd1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/12.json`).then(response => {
      console.log(response);
      this.contentd2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/13.json`).then(response => {
      console.log(response);
      this.image4 = response.data.data[2].profile_image;
      this.name4 = response.data.data[2].screen_name;
      this.overview4 = response.data.data[2].created_at;
      this.content5 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/14.json`).then(response => {
      console.log(response);
      this.contente1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/15.json`).then(response => {
      console.log(response);
      this.contente2 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/16.json`).then(response => {
      console.log(response);
      this.image5 = response.data.data[2].image0;
      this.name5 = response.data.data[2].screen_name;
      this.overview5 = response.data.data[2].created_at;
      this.content6 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/17.json`).then(response => {
      console.log(response);
      this.contentf1 = response.data.data[2].text;
    });
    axios.get(`${publicPath}static/moock/18.json`).then(response => {
      console.log(response);
      this.contentf2 = response.data.data[2].text;
    });
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  .wrap {
    width: 26%;
    height: 320px;
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    /*min-width: 229.98px;*/

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      margin: -40px 0 10px;
      display: inline-block;
      border: 1px solid #ddd;
      background-color: #fff;
      /*cursor: pointer;*/
      vertical-align: middle;
    }

    .name {
      font-size: 21px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: 1.1;
      color: #333333;
    }

    .description {
      margin: 0 auto;
      max-width: 180px;
      min-height: 50px;
      font-size: 13px;
      line-height: 20px;
      color: #333333;
    }

    .btn {
      width: 100px;
      padding: 8px 0;
      margin-left: 31%;
    }

    .follow {
      border-color: #42c02e;
      font-size: 16px;
      font-weight: 400;
    }

    .btn-success {
      border-radius: 40px;
      color: #fff;
      background-color: #42c02e;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
      color: #eaeaea;
    }

    .meta {
      float: left;
      margin-top: -29px;
      padding-right: 10px;
      font-size: 12px;
      color: #969696;
      background-color: #f8f8f8;
    }

    .new {
      font-size: 13px;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      color: #333333;
    }

    .new:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 1080px) {
  .wrap {
    min-width: 229.98px;
  }
}
</style>