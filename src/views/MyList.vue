<template>
  <div class="home">
    <!-- todolist -->
    <div class="mylist">
      <div class="mylist-title">
        <h2>ToDoList</h2>

        <div class="button-box">
          <button
            @click="backToday"
            class="back-today"
            v-show="todayTimestamp !== selectTimestamp"
          >
            <svg-icon icon-class="icon-repeat"></svg-icon>
            回到今天
          </button>
          <button class="add-todo" @click="openWindow('todo', 'create')">
            新建待办
          </button>
        </div>
      </div>

      <calendar-box ref="calendar"></calendar-box>
      <todo-content @edit-item="editItem"></todo-content>
    </div>

    <!-- list右侧 -->
    <div class="mylist-right">
      <!-- 概览 -->
      <div class="status-bar">
        <div class="status-bar-title">
          <h2>概览</h2>
        </div>
        <status-bar></status-bar>
      </div>

      <!-- 打卡 -->
      <div class="clock-in">
        <div class="clock-in-title">
          <!-- 标题 -->
          <div class="title-box" @click="checkTitle">
            <h2 class="title">
              {{ !allClockInMode ? "今日打卡" : "全部打卡" }}
            </h2>
            <h4 class="vice-title">
              {{ !allClockInMode ? "/全部打卡" : "/今日打卡" }}
            </h4>
          </div>

          <div
            class="add-clock-in"
            v-if="allClockInMode"
            @click="openWindow('clockIn', 'create')"
          >
            新建打卡
          </div>
        </div>
      </div>

      <clock-in ref="clockIn" @edit-item="editItem"></clock-in>
    </div>

    <!-- 新建待办窗口 -->
    <edit-todo ref="editTodo"></edit-todo>
    <!-- 弹窗 -->
    <popup ref="popUp"></popup>
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon.vue";
import CalendarBox from "../components/MyList/Calendar/CalendarBox.vue";
import TodoContent from "../components/MyList/TodoContent.vue";
import StatusBar from "../components/MyList/StatusBar.vue";
import ClockIn from "../components/MyList/ClockIn.vue";
import EditTodo from "../components/MyList/EditTodo.vue";
import Popup from "../components/MyList/Popup.vue";
export default {
  name: "MyList",

  components: {
    SvgIcon,
    CalendarBox,
    TodoContent,
    StatusBar,
    ClockIn,
    EditTodo,
    Popup,
  },
  data() {
    return {
      // 今天
      today: {
        year: this.dayjs().year(),
        month: this.dayjs().month(),
        day: this.dayjs().date(),
      },

      allClockInMode: false,
    };
  },

  computed: {
    // 今天 格式化
    todayTimestamp() {
      return this.dayjs(this.today).valueOf();
    },
    // 选中 格式化
    selectTimestamp() {
      return this.$store.state.selectTimestamp;
    },
  },

  methods: {
    // 日历回到今天
    backToday() {
      this.$refs.calendar.selectInit();
      this.$refs.calendar.calendarIsOpen = false;
    },

    // 打开新建todo窗口
    openWindow(type, action) {
      this.$refs.editTodo.openWindow(type, action);
      this.$refs.calendar.calendarIsOpen = false;
    },

    // 组件传值
    editItem(value) {
      this.$refs.editTodo.openWindow(value.type, "edit", value.list);
    },

    // 打卡标题切换
    checkTitle() {
      this.allClockInMode = !this.allClockInMode;
      this.$refs.clockIn.checkMode();
    },
  },
};
</script>

<style>
/* 定义标题样式 */
h2 {
  display: inline;
  color: var(--Gray-8);
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
}

.home {
  display: flex;
}

.mylist {
  margin: 0 2rem 0 2rem;
  width: 100%;
  min-width: 44.5rem;
  flex-grow: 1;
}

.mylist-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

.button-box {
  display: flex;
  justify-content: flex-end;
}

.back-today {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border: 1px solid var(--Gray-2);
  margin-left: 1rem;
  color: var(--Gray-6);
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 2rem;
  background-color: var(--BG);
  cursor: pointer;
}
.back-today > svg {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
.add-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 2rem;
  border: none;
  margin-left: 1rem;
  color: var(--BG);
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 2rem;
  background-color: var(--Theme-6);
  cursor: pointer;
}
.add-todo:hover {
  background-color: var(--Theme-7);
}
.add-todo:active {
  background-color: var(--Theme-8);
}

/* 右侧 */
.mylist-right {
  display: none;
  flex-direction: column;
  margin: 0 2rem 0 1.5rem;
}
/* 状态显示 */
.status-bar {
  display: flex;
  flex-direction: column;
  width: 22.5rem;
}
.status-bar-title {
  display: flex;
  align-items: center;
  height: 5rem;
}
/* 打卡 */
.clock-in-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}
.title-box {
  display: flex;
  align-items: baseline;
  cursor: pointer;
}
.title-box:hover .title,
.title-box:hover .vice-title {
  color: var(--Theme-6);
}
.vice-title {
  color: var(--Gray-8);
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
}
.add-clock-in {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border: none;
  color: var(--BG);
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 2rem;
  background-color: var(--Theme-6);
  cursor: pointer;
}
.add-clock-in:hover {
  background-color: var(--Theme-7);
}
.add-clock-in:active {
  background-color: var(--Theme-8);
}

@media screen and (min-width: 1280px) {
  .mylist {
    width: 100%;
    min-width: 36.5rem;
    margin: 0 0 0 2rem;
  }
  .mylist-right {
    display: flex;
  }
}
</style>