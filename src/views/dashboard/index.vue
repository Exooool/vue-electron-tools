<template>
  <div class="dashboard-box">
    <a-grid :cols="24" :col-gap="16" :row-gap="16" style="margin-top: 16px">
      <a-grid-item :span="12">
        <div class="statistic-card single-card"></div>
        <div class="single-card"></div>
      </a-grid-item>
      <a-grid-item :span="12"> </a-grid-item>
    </a-grid>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      tally: {
        money: "",
        tallyType: "",
        tallyTime: "",
        remark: "",
      },
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.dashboard-box {
  width: 100%;
}
.single-card {
  background: #fff;
  border-radius: 6px;
}
</style>
