import { db } from "../../db";
export default {
  state: {
    priorities: []
  },
  getters: {
    priorities: state => state.priorities
  },
  mutations: {
    FETCH_PRIORITIES(state, priorities) {
      state.priorities = priorities;
    }
  },
  actions: {
    async FETCH_PRIORITIES({ commit }) {
      let priorities = await db.priority.toArray();
      commit("FETCH_PRIORITIES", priorities);
    }
  }
};
