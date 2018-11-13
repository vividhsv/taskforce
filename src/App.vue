<template>
  <div id="app"><router-view /></div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
$menu-item-color: #ffffff;
$menu-item-hover-color: #ffffff;
$menu-item-hover-background-color: #4a5664;
$menu-item-active-color: #ffffff;
$menu-item-active-background-color: #5294e2;
$menu-label-color: #ffffff;

@import "../node_modules/bulma/bulma.sass";

*,
*:before,
*:after {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.app-layout {
  display: grid;
  height: 100vh;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr auto;
}

.sidebar-header {
  background-color: #303641;
  padding: 18px;
  grid-column: 1;
  grid-row: 1/2;
  -webkit-app-region: drag;
}

.sidebar {
  background-color: #373d48;
  grid-column: 1;
  grid-row: 2/4;
  padding: 18px;
}

.main-header {
  background-color: #fff;
  padding: 18px;
  grid-column: 2;
  grid-row: 1/2;
  border-bottom: 1px solid #f2f2f2;
  -webkit-app-region: drag;
}

.main {
  background-color: #fff;
  grid-column: 2;
  grid-row: 2/3;
}

.task-main-input {
  background-color: #fff;
  padding: 10px;
  grid-column: 2;
  grid-row: 3/4;
}
</style>
