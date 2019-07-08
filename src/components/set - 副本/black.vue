<template>
    <div id="ziliao">
        {{msg}}
        <div class="title">
            你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'ziliao',
    data() {
        return ({
            msg: '',
            title: '你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你'
        })
    }
}
</script>
<style lang="scss" scoped>
#ziliao {
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    .title {
        font-size: 12px;
        color: rgb(150, 150, 150);
    }
}
</style>