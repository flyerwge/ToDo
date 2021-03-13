<template>
  <div class="container">
    <div>已完成的{{ isComplete }}/全部{{ all }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navFooter",
  setup() {
    let isComplete = ref(1);
    let all = ref(3);
    //清除已完成
    let clear = () => {
      console.log("已清除");
    };
    return {
      isComplete,
      all,
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