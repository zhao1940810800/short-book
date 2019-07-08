<!-- Lambert -->
<template>
    <div id="right">
        <div class="board">
            <img src="https://i.loli.net/2019/06/03/5cf4ea6986b1163757.png" alt="1">
            <img src="https://i.loli.net/2019/06/03/5cf4ea4a02fcf78514.png" alt="2">
            <img src="https://i.loli.net/2019/06/03/5cf4e9f2a616a92593.png" alt="3">
            <img src="https://i.loli.net/2019/06/03/5cf4ea200703c45319.png" alt="4">
        </div>
        <div class="downloadApp" @mouseenter="toggle()" @mouseleave="toggle()">
            <div class="ewmbig" v-show="isShow">
                <img src="https://i.loli.net/2019/06/03/5cf4ea7d7bf6f37811.png" height="160px" width="160px" alt="ewm">
                <div>&nbsp;</div>
            </div>
            <div class="ewm">
                <img src="https://i.loli.net/2019/06/03/5cf4ea7d7bf6f37811.png" height="60px" width="60px" alt="ewm">
            </div>
            <div class="App">
                <p>下载简书手机App ></p>
                <p>随时随地发现和创作内容</p>
            </div>
        </div>
        <div class="adv">
            <img src="https://i.loli.net/2019/06/03/5cf4e9c24af7889981.png" width="280px" height="159px" alt="广告">
        </div>
        <div class="author">
            <div class="change">
                <div class="changeL">推荐作者</div>
                <div class="changeR" v-on:click="change(),notchange()"><img id="xuanzhuan" src="https://i.loli.net/2019/06/04/5cf5cc0a9d8fd77322.png" alt="xunhuan">换一批</div>
            </div>
            <!-- 用户循环 -->
            <div class="authorBoxT" v-show="ntShow" id="chan">
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">我也不知道写点什么</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">我也不知道写点什么</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">我也不知道写点什么</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/03/5cf4eb75bbc2c24644.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">我也不知道写点什么</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
            </div>
            <div class="authorBoxB" v-show="itShow">
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/04/5cf5cb95703ff80061.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">穿着prada挤地铁</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/04/5cf5cb95703ff80061.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">穿着prada挤地铁</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/04/5cf5cb95703ff80061.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">穿着prada挤地铁</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
                <div class="authorItem">
                    <div class="aItop">
                        <div class="aIhead">
                            <img src="https://i.loli.net/2019/06/04/5cf5cb95703ff80061.png" width="48px" height="48px" alt="head">
                        </div>
                        <div class="aItitle">穿着prada挤地铁</div>
                        <div class="aIstart">+关注</div>
                    </div>
                    <div class="aImark">写了359.字·4.4k喜欢</div>
                </div>
            </div>
            <div class="searchbox">
                <!--  <div class="searchAll">
                    查看全部 >
                </div> -->
            </div>
            <div class="adv">
                <!-- <img src="https://i.loli.net/2019/06/03/5cf4e9c24af7889981.png" width="280px" height="159px" alt="广告"> -->
            </div>
        </div>
    </div>
</template>
<script>
var du = 0;
export default {
    name: 'right',
    data: function() {
        return {
            isShow: false,
            itShow: false,
            ntShow: true,
        };
    },
    methods: {
        toggle: function() {
            this.isShow = !this.isShow;
        },
        change: function() {
            this.itShow = !this.itShow;
            du = du + 360;
            // console.log(du);
            // console.log('rotate('+du+'deg)');
            document.getElementById('xuanzhuan').style.transform = `rotate(${du}deg)`;
            document.getElementById('xuanzhuan').style.transition = "width 2s, height 2s, transform 1s";
            var chan = document.getElementById('chan');
            chan.isShow = !chan.isShow;
        },
        notchange: function() {
            this.ntShow = !this.ntShow;
        }

    }

}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

#right {
    float: right;
    width: 280px;
}

.board img {
    display: block;
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
}

.downloadApp {
    width: 245px;
    height: 81px;
    padding: 10px 20px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    position: relative;
}

.ewmbig {
    /* display: none; */
    position: absolute;
    z-index: 10;
    top: -212px;
    left: 36px;
    width: 180px;
    height: 180px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
}

.ewmbig img {
    margin: 0 auto;
    padding: 10px;
    display: block;
}

.ewmbig div {
    width: 19px;
    height: 19px;
    display: block;
    position: relative;
    left: 80px;
    top: -9px;
    z-index: 6;
    transform: rotate(45deg);
    background-color: white;
}

.ewm {
    position: relative;
    top: 0px;
    float: left;
    width: 60px;
    height: 60px;
    margin: 10px 10px 0 20px;
}

.ewm img {}

.App {
    position: relative;
}

.App p:first-child {
    font-size: 14px;
    margin-top: 20px;
}

.App p:last-child {
    margin-top: 4px;
    font-size: 12px;
    color: #999;
}

.adv {
    width: 280px;
    height: 160px;
    margin-top: 50px;
}

.change {
    margin: 20px 0;
    height: auto;
}

.changeL {
    display: inline-block;
    width: 70%;
    text-align: left;
    font-size: 14px;
    color: #969696;
    margin-top: 6px;
}

.changeR {
    display: inline-block;
    width: 30%;
    text-align: right;
    font-size: 14px;
    color: #969696;
}

.changeR img {
    position: relative;
    top: 4px;
}

.author {
    height: auto;
}

.authorBoxT {
    position: relative;
}

.authorBoxB {
    position: relative;
}

.authorItem {
    margin: 20px 0;
}

.aItop {
    width: 280px;
    height: 44px;
    display: flex;
    justify-content: space-between;
}

.aIhead {
    height: 48px;
    width: 48px;
}

.aIhead img {
    border-radius: 48px;
}

.aItitle {
    height: 44px;
    width: 170px;
    font-size: 14px;
    margin-top: 5px;
}

.aIstart {
    font-size: 13px;
    color: #42c02e;
    text-align: right;
    margin-top: 5px;
}

.aImark {
    text-align: center;
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
}

.searchbox {
    width: 280px;
    height: auto;
}

.searchAll {
    padding: 7px 7px 7px 12px;
    margin: 20px auto;
    left: 0;
    width: 198px;
    font-size: 13px;
    color: #787878;
    text-align: center;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
}

#xuanzhuan {
    border-radius: 18px;
}
</style>