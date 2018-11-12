export default {
  state: {
    addTaskModalActive: false
  },
  getters: {
    addTaskModalActive: state => state.addTaskModalActive
  },
  mutations: {
    openAddTaskModal(state) {
      state.addTaskModalActive = true;
    },
    closeAddTaskModal(state) {
      state.addTaskModalActive = false;
    }
  },
  actions: {
    openAddTaskModal({ commit }) {
      commit("openAddTaskModal");
    },
    closeAddTaskModal({ commit }) {
      commit("closeAddTaskModal");
    }
  }
};
