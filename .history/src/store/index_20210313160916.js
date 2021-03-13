import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态
  state: {
    list: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "打豆豆",
        complete: true,
      }
    ]
  },
  //同步修改state
  //方法集合，方法中需要传入两个参数，state和需要修改的值
  mutations: {
    //添加任务列表
    addToDo(state, payload) {
      state.list.push(payload);
    },

    //删除任务 splice(下标, 个数)
    delToDo(state, payload) {
      state.list.splice(payload, 1);    //删除第payload项
    },

    //清除已完成
    clear(state, payload) {
      state.list = payload;
    }
  },
  //异步提交mutation
  //方法中需要两个参数，第一个参数是store，第二个参数是修改的值
  actions: {
  },
  //模块化
  modules: {
  }
})
