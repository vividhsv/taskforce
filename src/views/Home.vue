<template>
  <div class="app-layout">
    <the-sidebar-header></the-sidebar-header>
    <task-sidebar></task-sidebar>
    <router-view></router-view>
  </div>
</template>
<script>
import TaskSidebar from "../components/TaskSidebar";
import TheSidebarHeader from "../components/TheSidebarHeader";

export default {
  name: "app-home",
  components: {
    TaskSidebar,
    TheSidebarHeader
  },
  created() {
    this.$store.dispatch("FETCH_PROJECTS");
    this.$store.dispatch("FETCH_PRIORITIES");
  }
};
</script>

<style lang="sass"></style>
