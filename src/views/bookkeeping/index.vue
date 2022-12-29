<template>
  <div class="dashboard-box">
    <a-grid :cols="24" :col-gap="4" style="margin-top: 16px">
      <a-grid-item :span="12">
        <div class="statistic-card single-card">
          <a-grid :cols="24" :col-gap="8" :row-gap="8">
            <a-grid-item class="statistic-item total" :span="12">
              <span class="title">结余</span>
              <span class="value">18430.5</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">今年总支出</span>
              <span class="value">24670.5</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">本月总支出</span>
              <span class="value">1200</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">本周总支出</span>
              <span class="value">284.23</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">今年总收入</span>
              <span class="value">43000</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">本月总收入</span>
              <span class="value">6200</span>
            </a-grid-item>
            <a-grid-item class="statistic-item" :span="12">
              <span class="title">本周总收入</span>
              <span class="value">0</span>
            </a-grid-item>
            <a-grid-item class="progress-item" :span="12">
              <span class="title">剩余占比</span>
              <a-progress
                type="circle"
                size="large"
                :stroke-width="10"
                :percent="0.7"
              />
            </a-grid-item>
          </a-grid>
        </div>
        <div class="recent-record single-card">
          <a-table
            :columns="tableColumns"
            :data="tableData"
            :bordered="false"
          />
        </div>
      </a-grid-item>
      <a-grid-item :span="12">
        <div class="single-card"><tally-counter v-model="tally" /></div>
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import TallyCounter from "@/components/tallyCounter/index.vue";

export default defineComponent({
  components: {
    TallyCounter,
  },
  setup() {
    const state = reactive({
      tally: {
        money: "",
        tallyType: "",
        tallyTime: "",
        remark: "",
      },
      tableData: [],
    });

    const tableColumns = [
      {
        title: "金额",
        dataIndex: "money",
      },
      {
        title: "类型",
        dataIndex: "moneyType",
      },
      {
        title: "所属",
        dataIndex: "bookType",
      },
      {
        title: "备注",
        dataIndex: "remark",
      },
      {
        title: "时间",
        dataIndex: "bookTime",
      },
    ];

    return {
      ...toRefs(state),
      tableColumns,
    };
  },
});
</script>

<style lang="scss" scoped>
.dashboard-box {
  width: 100%;
  .statistic-item {
    height: 60px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    .title {
      color: #8c8c8c;
      margin-bottom: 10px;
    }
    .value {
      font-weight: 600;
    }

    &.total {
      .title {
        font-size: 16px;
        color: #8c8c8c;
        margin-bottom: 10px;
      }
      .value {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .progress-item {
    padding: 10px;
    display: flex;
    .title {
      color: #8c8c8c;
      margin-right: 60px;
    }
  }
}
.single-card {
  background: #fff;
  border-radius: 6px;
  margin: 10px;
  padding: 15px;
}
</style>
