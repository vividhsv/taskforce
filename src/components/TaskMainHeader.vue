<template>
  <div class="main-header">
    <nav class="level is-mobile">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5"><strong>Default</strong></p>
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
  methods: {
    open() {
      this.$store.dispatch("openAddTaskModal");
    }
  }
};
</script>
<style lang="scss"></style>
