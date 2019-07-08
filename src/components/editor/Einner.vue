<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
    <!-- <button v-on:click="getContent">查看内容</button> -->
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editor",
  props: ["value"],
  data() {
    return {
      editorContent: this.$props.value.content
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    console.log(this.$props.value);
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
      this.$props.value.content = html;
      //   Object.assign({}, vm.userProfile, {
      //     age: 27,
      //     favoriteColor: "Vue Green"
      //   });
      this.$emit("update:value", this.$props.value);
    };
    editor.create();
    conso
    // editor.$textElem[0].innerHTML = this.$props.value.content;
  }
};
</script>

<style lang="scss" scoped>
.w-e-text-container {
  height: calc(100vh - 95px) !important;
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
.ant-col-16 {
  &._1Yy97 {
    padding-top: 20px;
  }
}
</style>