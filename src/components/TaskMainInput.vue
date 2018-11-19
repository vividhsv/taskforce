<template>
  <div class="task-main-input">
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Add Task to Default Project..."
          @keyup.enter="addTask"
          v-model="newTask"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "task-main-input",
  props: ["projectId"],
  data() {
    return {
      newTask: "",
      selectedPriority: 4
    };
  },
  methods: {
    addTask() {
      let task = {
        created_on: new Date().toISOString(),
        text: this.newTask,
        completed: false,
        priorityId: this.selectedPriority,
        projectId: parseInt(this.projectId)
      };
      this.$store.dispatch("ADD_TASK", task);
      this.newTask = "";
      this.$store.dispatch("closeAddTaskModal");
    }
  }
};
</script>
<style></style>
