<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>暂无任务</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ["del"],
  setup(props, ctx) {
    //删除任务
    let del = (item, index) => {
      ctx.emit("del", index);
    };

    return {
      del,
    };
  },
});
</script>

<style scoped lang = "scss">
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 500px;
  cursor: pointer;
  .del {
    position: absolute;
    right: 2px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #fff8dc;
    .del {
      display: block;
    }
  }
}
</style>