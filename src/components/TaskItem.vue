<template>
    <div class="notification task">
        <task-checkbox :status="task.completed" @click.native="updateTask()"></task-checkbox>
        <div class="task-container">
            <span :class="{ strike: task.completed }" class="task-text">{{ task.text }}</span>
            <small><span class="moment" :class="{ strike : task.completed }">Default | {{ task.priority
                }} | {{ task.created_on | moment("from") }}</span></small>
        </div>
        <div class="task-meta-container">
            <span class="icon delete-btn" @click="deleteTask()">
                <i class="fa fa-trash"></i>
            </span>
        </div>
    </div>
</template>
<script>
import TaskCheckbox from "./TaskCheckbox.vue";
export default {
  name: "task-item",
  props: ["task", "index"],
  components: { TaskCheckbox },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.index);
    },
    updateTask() {
      this.$store.dispatch("updateTask", this.index);
    }
  }
};
</script>
<style lang="sass">

</style>
