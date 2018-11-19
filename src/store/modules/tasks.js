import { db } from "../../db";
export default {
  state: {
    tasks: []
  },
  getters: {
    tasks: state => state.tasks
  },
  mutations: {
    FETCH_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.unshift(task);
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    COMPLETE_TASK(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed;
    }
  },
  actions: {
    async FETCH_TASKS({ commit }, projectId) {
      let tasks = await db.tasks
        .where("projectId")
        .equals(projectId)
        .toArray();

      await Promise.all(
        tasks.map(async task => {
          let priority = await db.priority.get(task.priorityId);
          task.priority = priority.level;
        })
      );
      commit("FETCH_TASKS", tasks);
    },
    async FETCH_ALL_TASKS({ commit }) {
      let tasks = await db.tasks
        .orderBy("created_on")
        .reverse()
        .toArray();

      await Promise.all(
        tasks.map(async task => {
          let priority = await db.priority.get(task.priorityId);
          task.priority = priority.level;
        })
      );
      commit("FETCH_TASKS", tasks);
    },
    async ADD_TASK({ commit, rootState }, task) {
      let id;
      try {
        id = await db.tasks.add(task);
      } catch (err) {
        console.log("Oops, failed to add task");
        console.log(err);
      }
      task.priority = rootState.priority.priorities[task.priorityId - 1].level;
      commit("ADD_TASK", task);
      console.log(`Task Added ${id}`);
    },

    async DELETE_TASK({ commit, state }, index) {
      let task = state.tasks[index];
      try {
        await db.tasks.delete(task.id);
      } catch (err) {
        console.log("Oops, failed to delete task");
        console.log(err);
      }
      commit("DELETE_TASK", index);
    },
    async COMPLETE_TASK({ commit, state }, index) {
      commit("COMPLETE_TASK", index);
      let task = state.tasks[index];
      try {
        await db.tasks.put(task);
      } catch (err) {
        console.log("Oops, failed to update task");
        console.log(err);
      }
      console.log("Task completed");
    }
  }
};
