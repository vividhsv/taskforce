<template>
  <div id="app" class="app-layout">
      <task-sidebar-header></task-sidebar-header>
      <task-sidebar></task-sidebar>
      <task-main-header></task-main-header>
      <task-main></task-main>
  </div>
</template>

<script>
import TaskSidebar from "./components/TaskSidebar";
import TaskSidebarHeader from "./components/TaskSidebarHeader";
import TaskMainHeader from "./components/TaskMainHeader";
import TaskMain from "./components/TaskMain";

export default {
  name: "app",
  components: {
    TaskSidebar,
    TaskSidebarHeader,
    TaskMainHeader,
    TaskMain
  }
};
</script>

<style lang="sass">

$menu-item-color: #ffffff
$menu-item-hover-color: #ffffff
$menu-item-hover-background-color: #4A5664
$menu-item-active-color: #ffffff
$menu-item-active-background-color: #5294E2
$menu-label-color: #ffffff

@import "../node_modules/bulma/bulma.sass"

*,
*:before,
*:after
  box-sizing: border-box

::-webkit-scrollbar 
      display: none

body 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"

.app-layout
  display: grid
  height: 100vh
  grid-template-columns: 240px 1fr
  grid-template-rows: 60px 1fr

.sidebar-header
  background-color: #303641
  padding: 18px
  grid-column: 1
  grid-row: 1/2
  -webkit-app-region: drag

.sidebar 
  background-color: #373D48
  grid-column: 1
  grid-row: 2/4
  padding: 18px

.main-header
  background-color: #fff
  padding: 18px
  grid-column: 2
  grid-row: 1/2
  border-bottom: 1px solid #f2f2f2
  -webkit-app-region: drag

.main
  background-color: #fff
  grid-column: 2
  grid-row: 2/4

</style>
