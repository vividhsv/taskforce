<template>
    <div class="modal" :class="{ 'is-active' : active }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <section class="modal-card-body">
                <button class="button icon is-pulled-right is-white" aria-label="close" @click="close">
                    <i class="fa fa-times"></i>
                </button>
                <slot>
                </slot>
            </section>
        </div>
    </div>
</template>
<script>
export default {
  name: "v-modal",
  props: ["active"],
  methods: {
    close() {
      this.$emit("update:active", false);
    }
  }
};
</script>
<style>
</style>
