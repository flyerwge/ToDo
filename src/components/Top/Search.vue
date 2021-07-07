<template>
  <div class="header">
    <input class="search" type="text" placeholder="搜索暂不可用" />
    <div class="message"></div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
/* 头部 */
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 48.5rem;
  height: 6rem;
}

.search {
  width: 19.5rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  border: none;
  color: var(--Gray-4);
  border-radius: 2.5rem;
  background-color: var(--BG);
}

.message {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 2rem 0 1.5rem;
  border-radius: 2.5rem;
  background-color: var(--BG);
}
</style>