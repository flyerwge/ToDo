<template>
  <!-- 编写HTML内容 -->
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list"></nav-main>
    <nav-footer :list="list"></nav-footer>
  </div>
</template>

<script>
// 编写js内容

import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

import { defineComponent, ref, computed } from "vue";
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
    let value = ref("");
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    let add = (val) => {
      value.value = val;
      let flag = true; //判断任务是否重复
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        } else {
          // 调用mutation方法
          store.commit("addToDo", {
            title: value.value,
            complete: false,
          });
        }
      });
    };
    return {
      add,
      value,
      list,
    };
  },
});
</script>

<style scoped lang = "scss">
</style>
