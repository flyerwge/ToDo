<template>
  <div class="container">
    <div>已完成的{{ isComplete }}/全部{{ list.length }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      //过滤已完成的
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });

    //清除已完成
    let clear = () => {
      //过滤未完成的
      let arr = props.list.filter((item) => {
        return (item.complete = false);
      });
      console.log("已清除");
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>


<style scoped lang = "scss">
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>