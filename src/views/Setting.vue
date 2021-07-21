<template>
  <div class="setting">
    <div class="set-title">
      <h2>设置</h2>
    </div>

    <div class="box">
      <div class="list">
        <span class="name">主题皮肤</span>

        <div class="colors">
          <div class="color-list" @click="changeTheme('blue')">
            <div class="color-info blue">蓝<br />色</div>
            <svg-icon v-if="theme == 'blue'" icon-class="icon-check"></svg-icon>
          </div>

          <div class="color-list" @click="changeTheme('emerald')">
            <div class="color-info emerald">祖<br />母</div>
            <svg-icon
              v-if="theme == 'emerald'"
              icon-class="icon-check"
            ></svg-icon>
          </div>

          <div class="color-list" @click="changeTheme('rose')">
            <div class="color-info rose">玫<br />瑰</div>
            <svg-icon v-if="theme == 'rose'" icon-class="icon-check"></svg-icon>
          </div>

          <div class="color-list" @click="changeTheme('orange')">
            <div class="color-info orange">橘<br />色</div>
            <svg-icon
              v-if="theme == 'orange'"
              icon-class="icon-check"
            ></svg-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon.vue";
export default {
  name: "Setting",
  components: {
    SvgIcon,
  },
  data() {
    return {
      theme: this.$store.state.theme,
    };
  },

  methods: {
    changeTheme(theme) {
      this.theme = theme;
      this.$store.state.theme = theme;
    },
  },
};
</script>

<style scoped>
.setting {
  padding: 0 2rem;
}
.set-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}
h2 {
  display: inline;
  color: var(--Gray-8);
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}
.box {
  display: flex;
  align-items: center;
  height: 6rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  border-radius: 16px;
  background-color: var(--BG);
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
}
.name {
  color: var(--Gray-8);
  line-height: 2rem;
  font-weight: 500;
}
.colors {
  display: flex;
  align-items: center;
  height: 6rem;
}
.color-list {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.8rem;
  color: #fff;
  border-radius: 100%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2) inset;
  transition: 0.1s ease-in-out;
}
.color-list:nth-of-type(1) {
  background-image: linear-gradient(to bottom right, #3b82f6, #2563eb);
  box-shadow: 0 0 16px 0 rgba(30, 58, 138, 0.4) inset;
  box-shadow: 0 0 0 0 #bfdbfe;
}
.color-list:nth-of-type(2) {
  background-image: linear-gradient(to bottom right, #10b981, #059669);
  box-shadow: 0 0 16px 0 rgba(6, 78, 59, 0.4) inset;
  box-shadow: 0 0 0 0 #a7f3d0;
}
.color-list:nth-of-type(3) {
  background-image: linear-gradient(to bottom right, #f43f5e, #e11d48);
  box-shadow: 0 0 16px 0 rgba(136, 19, 55, 0.4) inset;
  box-shadow: 0 0 0 0 #fecdd3;
}
.color-list:nth-of-type(4) {
  background-image: linear-gradient(to bottom right, #f97316, #ea580c);
  box-shadow: 0 0 16px 0 rgba(124, 45, 18, 0.4) inset;
  box-shadow: 0 0 0 0 #fed7aa;
}
.color-list:hover {
  width: 3rem;
  height: 3rem;
}
.color-list:nth-of-type(1):hover {
  box-shadow: 0 0 24px 0 #bfdbfe;
}
.color-list:nth-of-type(2):hover {
  box-shadow: 0 0 24px 0 #a7f3d0;
}
.color-list:nth-of-type(3):hover {
  box-shadow: 0 0 24px 0 #fecdd3;
}
.color-list:nth-of-type(4):hover {
  box-shadow: 0 0 24px 0 #fed7aa;
}
svg {
  z-index: 10;
}
.color-info {
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.7rem;
}
.blue {
  color: #1d4ed8;
}
.emerald {
  color: #047857;
}
.rose {
  color: #be123c;
}
.orange {
  color: #c2410c;
}
</style>