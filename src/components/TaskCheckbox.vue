<template>
    <div class="checkbox">
        <span class="icon" :class="{ check:!status,  uncheck:status }">
            <i class="far fa-square"></i>
            <i class="fas fa-square"></i>
        </span>
    </div>
</template>
<script>
export default {
  name: "task-checkbox",
  props: ["status"]
};
</script>
<style lang="sass">
.checkbox
  display: table-cell
  vertical-align: middle
  width: 6%

.check:hover .far.fa-square,
.check .fas.fa-square 
  display: none

.check:hover .fas.fa-square
  display: inline

.uncheck:hover .fas.fa-square,
.uncheck .far.fa-square 
  display: none

.uncheck:hover .far.fa-square 
  display: inline
</style>
