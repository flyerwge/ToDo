<template>
  <!-- 编写HTML内容 -->
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// 编写js内容

import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home", //组件名称
  //接收父组件的数据
  props: {},
  //定义子组件的地方
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup() {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    let value = null;
    let add = (val) => {
      value.value = val;
      console.log(val);
    };
    return {
      add,
      value,
    };
  },
});
</script>

<style scoped lang = "scss">
</style>
