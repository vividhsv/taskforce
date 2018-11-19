import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/projects/1",
      children: [
        {
          path: "/projects/:id",
          name: "projects",
          component: Projects,
          props: true
        }
      ]
    }
  ]
});
