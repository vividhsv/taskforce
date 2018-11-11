import Vue from "vue";
import Vuex from "vuex";
import { db } from "./db";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    priority: [
      {
        id: 1,
        level: "Critical"
      },
      {
        id: 2,
        level: "Major"
      },
      {
        id: 3,
        level: "Minor"
      },
      {
        id: 4,
        level: "Trivial"
      }
    ],
    addTaskModalActive: false
  },
  getters: {
    tasks: state => state.tasks,
    addTaskModalActive: state => state.addTaskModalActive
  },
  mutations: {
    fetchTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.unshift(task);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    updateTask(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed;
    },
    openAddTaskModal(state) {
      state.addTaskModalActive = true;
    },
    closeAddTaskModal(state) {
      state.addTaskModalActive = false;
    }
  },
  actions: {
    fetchTasks({ commit }) {
      db.tasks
        .orderBy("created_on")
        .reverse()
        .limit(20)
        .toArray(tasks => {
          return Promise.all(
            tasks.map(task =>
              db.priority.get(task.priorityId).then(result => {
                task.priority = result.level;
                return task;
              })
            )
          );
        })
        .then(result => {
          commit("fetchTasks", result);
        });
    },
    addTask({ commit }, task) {
      db.tasks
        .add(task)
        .then(id => {
          commit("addTask", task);
          console.log("Task Added " + id);
        })
        .catch(err => {
          console.log("Oops, failed to add task");
          console.log(err);
        });
    },

    deleteTask({ commit, state }, index) {
      let task = state.tasks[index];
      db.tasks
        .delete(task.id)
        .then(() => {
          commit("deleteTask", index);
          console.log("Task deleted " + task.id);
        })
        .catch(err => {
          console.log("Oops, failed to delete task");
          console.log(err);
        });
    },
    updateTask({ commit, state }, index) {
      commit("updateTask", index);
      let task = state.tasks[index];
      db.tasks
        .put(task)
        .then(id => {
          console.log("Task updated " + id);
        })
        .catch(err => {
          console.log("Oops, failed to update task");
          console.log(err);
        });
    },
    openAddTaskModal({ commit }) {
      commit("openAddTaskModal");
    },
    closeAddTaskModal({ commit }) {
      commit("closeAddTaskModal");
    }
  }
});
