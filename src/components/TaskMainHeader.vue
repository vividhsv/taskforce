<template>
  <div class="main-header">
    <nav class="level is-mobile">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <i class="fas fa-hashtag"></i> <strong> {{ project.name }} </strong>
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <a class="button is-small" @click="open">
            <i class="fas fa-plus"> </i>
          </a>
        </p>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "task-main-header",
  props: ["projectId"],
  methods: {
    open() {
      this.$store.dispatch("openAddTaskModal");
    }
  },
  computed: {
    project() {
      return (
        this.$store.getters.projects.find(
          e => e.id == parseInt(this.projectId)
        ) || {}
      );
    }
  }
};
</script>
<style lang="scss"></style>
