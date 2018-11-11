<template>
  <div class="app-layout">
    <the-sidebar-header></the-sidebar-header>
    <task-sidebar></task-sidebar>
    <task-main-header></task-main-header>
    <task-main></task-main>
  </div>
</template>
<script>
import TaskSidebar from "../components/TaskSidebar";
import TheSidebarHeader from "../components/TheSidebarHeader";
import TaskMainHeader from "../components/TaskMainHeader";
import TaskMain from "../components/TaskMain";

export default {
  name: "app-home",
  components: {
    TaskSidebar,
    TheSidebarHeader,
    TaskMainHeader,
    TaskMain
  }
};
</script>

<style lang="sass"></style>
