<template>
  <div id="ziliao">
    {{msg}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'ziliao',
  data() {
    return ({
      msg: 'hello'
    })
  }
}
</script>
<style lang="scss" scoped>
#ziliao {
  padding: 5px;
  width: 100%;
}
</style>