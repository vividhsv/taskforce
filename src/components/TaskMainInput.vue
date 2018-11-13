<template>
  <div class="task-main-input">
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Add Task Default Project..."
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
  data() {
    return {
      newTask: "",
      selectedPriority: 4,
      selectedProject: 1
    };
  },
  methods: {
    addTask() {
      let task = {
        created_on: new Date().toISOString(),
        text: this.newTask,
        completed: false,
        priorityId: this.selectedPriority,
        projectID: this.selectedProject
      };
      this.$store.dispatch("ADD_TASK", task);
      this.newTask = "";
      this.$store.dispatch("closeAddTaskModal");
    }
  }
};
</script>
<style></style>
