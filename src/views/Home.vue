<template>
  <!-- 编写HTML内容 -->
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
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

    //添加任务
    let add = (val) => {
      value.value = val;
      let flag = true; //判断任务是否重复
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        }
      });

      // 调用mutation方法
      if (flag) {
        store.commit("addToDo", {
          title: value.value,
          complete: false,
        });
      }
    };

    //删除任务
    let del = (val) => {
      store.commit("delToDo", val);
    };

    //清除已完成的
    let clear = (val) => {
      store.commit("clear", val);
    };

    return {
      add,
      value,
      list,
      del,
      clear,
    };
  },
});
</script>

<style scoped lang = "scss">
</style>
