<template>
  <div class="app-layout">
    <the-sidebar-header></the-sidebar-header>
    <task-sidebar></task-sidebar>
    <task-main-header></task-main-header>
    <task-main></task-main>
    <task-main-input></task-main-input>
  </div>
</template>
<script>
import TaskSidebar from "../components/TaskSidebar";
import TheSidebarHeader from "../components/TheSidebarHeader";
import TaskMainHeader from "../components/TaskMainHeader";
import TaskMain from "../components/TaskMain";
import TaskMainInput from "../components/TaskMainInput";

export default {
  name: "app-home",
  components: {
    TaskSidebar,
    TheSidebarHeader,
    TaskMainHeader,
    TaskMain,
    TaskMainInput
  }
};
</script>

<style lang="sass"></style>
