<template>
  <div class="container">
    <side-bar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/sidebar.vue";
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  display: flex;
  overflow-y: auto;
  .content {
    position: relative;
    width: 100%;
  }
}
</style>
