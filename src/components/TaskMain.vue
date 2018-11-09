<template>
    <div class="main">
              <section class="section">
            <!-- Main container -->
            <nav class="level is-mobile">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            <strong>Default</strong>
                        </p>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <p class="level-item"><a class="button is-success is-small" @click="open">Add Task</a></p>
                </div>
            </nav>
        </section>

        <bulma-modal :active.sync="isAddTaskModalActive">
            <div class="content">
                <h4 class="is-title">Create Task</h4>
                <div class="field">
                    <label class="label is-small">New Task</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter task..." v-model="newTask">
                    </div>
                </div>

                <div class="field">
                    <label class="label is-small">Project</label>
                    <p class="control has-icons-left">
                <span class="select is-small">
                <select v-model.number="selectedProject">
                    <option value=1  selected>Default</option>
                </select>
                </span>
                        <span class="icon is-small is-left">
                <i class="fa fa-hashtag"></i>
                </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label is-small">Priority</label>
                    <p class="control has-icons-left">
                <span class="select is-small">
                <select v-model.number="selectedPriority">
                    <option value=1 >Critical</option>
                    <option value=2 >Major</option>
                    <option value=3 >Minor</option>
                    <option value=4  selected>Trivial</option>
                </select>
                </span>
                        <span class="icon is-small is-left">
                <i class="fa fa-exclamation"></i>
                </span>
                    </p>
                </div>

                <button class="button is-small is-primary" @click="addTask">Add Task</button>
            </div>
        </bulma-modal>

        <section class="section tasks">
            <div v-for="(task, index) in tasks" :key=index class="notification task">
                <task-checkbox :status="task.completed" @click.native="updateTask(task, index)"></task-checkbox>
                <div class="task-container">
                    <span :class="{ strike: task.completed }" class="task-text">{{ task.text }}</span>
                    <small><span class="moment" :class="{ strike : task.completed }">Default | {{ task.priority
                        }} | {{ task.created_on | moment("from") }}</span></small>
                </div>
                <div class="task-meta-container">
            <span class="icon delete-btn" @click="deleteTask(task, index)">
                <i class="fa fa-trash"></i>
            </span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import TaskCheckbox from "./TaskCheckbox.vue";
import BulmaModal from "./BulmaModal.vue";
export default {
  name: "task-main",
  components: {
    TaskCheckbox,
    BulmaModal
  },
  data() {
    return {
      newTask: "",
      selectedPriority: 4,
      selectedProject: 1,
      isAddTaskModalActive: false
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
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
      this.$store.dispatch("addTask", task);
      task.priority = this.$store.state.priority[
        this.selectedPriority - 1
      ].level;
      this.newTask = "";
      this.isAddTaskModalActive = false;
    },
    deleteTask(task, index) {
      this.$store.dispatch("deleteTask", index);
    },
    updateTask(task, index) {
      this.$store.dispatch("updateTask", index);
    },
    open() {
      this.isAddTaskModalActive = true;
    }
  },
  created() {
    this.$store.dispatch("fetchTasks");
  }
};
</script>
<style lang="sass">
.tasks
  padding-top: 0px

.task
  padding: 0.5rem 0.8rem 0.5rem 0.8rem
  display: table
  width: 100%
  font-size: 0.9rem

.task:not(:last-child)
  margin-bottom: 0.5rem

.task-container
  display: table-cell
  width: 100%

.task-meta-container
  display: table-cell
  vertical-align: middle

.task-text
  display: block

.delete-btn
  border-width: 0px
  color: #dbdbdb

.delete-btn:hover
  color: #363636

.moment
  display: inline-block
  border-width: 0px
  margin-right: 5px
  color: hsl(0, 0%, 48%)

.task-item
  display: inline-block
  margin-bottom: 0px

.strike
  text-decoration: line-through
  color: #dbdbdb

.task-container small
  font-size: 11px

.tf-tag:not(body)
  font-size: 0.7rem
</style>
