import { db } from "../../db";
export default {
  state: {
    projects: []
  },
  getters: {
    projects: state => state.projects
  },
  mutations: {
    FETCH_PROJECTS(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    async FETCH_PROJECTS({ commit }) {
      let projects = await db.projects.toArray();
      commit("FETCH_PROJECTS", projects);
    }
  }
};
