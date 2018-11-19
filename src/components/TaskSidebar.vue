<template>
  <div class="sidebar">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Activity</a></li>
      </ul>
      <p class="menu-label">Projects</p>
      <ul class="menu-list">
        <router-link
          v-for="p in projects"
          :key="p.id"
          :to="{ name: 'projects', params: { id: p.id } }"
        >
          {{ p.name }}
        </router-link>
      </ul>
    </aside>
  </div>
</template>
><script>
export default {
  name: "task-sidebar",
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style lang="sass"></style>
