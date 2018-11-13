<template>
  <div class="main">
    <bulma-modal :active="isAddTaskModalActive">
      <div class="content">
        <h4 class="is-title">Create Task</h4>
        <div class="field">
          <label class="label is-small">New Task</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter task..."
              v-model="newTask"
            />
          </div>
        </div>

        <div class="field">
          <label class="label is-small">Project</label>
          <p class="control has-icons-left">
            <span class="select is-small">
              <select v-model.number="selectedProject">
                <option v-for="p in projects" :key="p.id" :value="p.id">
                  {{ p.name }}
                </option>
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
                <option v-for="p in priorities" :key="p.id" :value="p.id">
                  {{ p.level }}
                </option>
              </select>
            </span>
            <span class="icon is-small is-left">
              <i class="fa fa-exclamation"></i>
            </span>
          </p>
        </div>

        <button class="button is-small is-primary" @click="addTask">
          Add Task
        </button>
      </div>
    </bulma-modal>

    <section class="section tasks">
      <task-item
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
      ></task-item>
    </section>
  </div>
</template>
<script>
import BulmaModal from "./BulmaModal.vue";
import TaskItem from "./TaskItem.vue";
export default {
  name: "task-main",
  components: {
    BulmaModal,
    TaskItem
  },
  data() {
    return {
      newTask: "",
      selectedPriority: 4,
      selectedProject: 1
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    isAddTaskModalActive() {
      return this.$store.getters.addTaskModalActive;
    },
    priorities() {
      return this.$store.getters.priorities;
    },
    projects() {
      return this.$store.getters.projects;
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
      this.$store.dispatch("ADD_TASK", task);
      this.newTask = "";
      this.$store.dispatch("closeAddTaskModal");
    }
  },
  created() {
    this.$store.dispatch("FETCH_TASKS");
    this.$store.dispatch("FETCH_PRIORITIES");
    this.$store.dispatch("FETCH_PROJECTS");
  }
};
</script>
<style>
.task {
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  display: table;
  width: 100%;
  font-size: 0.9rem;
}

.task:not(:last-child) {
  margin-bottom: 0.5rem;
}

.task-container {
  display: table-cell;
  width: 100%;
}

.task-meta-container {
  display: table-cell;
  vertical-align: middle;
}

.task-text {
  display: block;
}

.delete-btn {
  border-width: 0px;
  color: #dbdbdb;
}

.delete-btn:hover {
  color: #363636;
}

.moment {
  display: inline-block;
  border-width: 0px;
  margin-right: 5px;
  color: hsl(0, 0%, 48%);
}

.task-item {
  display: inline-block;
  margin-bottom: 0px;
}

.strike {
  text-decoration: line-through;
  color: #dbdbdb;
}

.task-container small {
  font-size: 11px;
}
</style>
