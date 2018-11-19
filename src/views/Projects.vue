<template>
  <div class="main-wrapper">
    <task-main-header :projectId="id"></task-main-header>
    <task-main :projectId="id"></task-main>
    <task-main-input :projectId="id"></task-main-input>
  </div>
</template>
<script>
import TaskMainHeader from "../components/TaskMainHeader";
import TaskMain from "../components/TaskMain";
import TaskMainInput from "../components/TaskMainInput";
export default {
  name: "app-projects",
  props: ["id"],
  components: {
    TaskMainHeader,
    TaskMain,
    TaskMainInput
  }
};
</script>
<style></style>
