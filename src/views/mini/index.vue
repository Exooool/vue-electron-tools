<template>
  <div class="mini-container">
    <ul class="date-picker">
      <li
        :class="['date-picker-item', item === activeDate ? 'active' : '']"
        v-for="(item, index) in dateList"
        :key="index"
        @click="chooseDate(item)"
      >
        {{ chargeTime(item) }}
      </li>
    </ul>
    <div class="todo-wrapper">
      <div class="todo-list-inner">
        <a-collapse :default-active-key="['1', '2']" :bordered="false">
          <a-collapse-item header="未完成" :style="customStyle" key="1">
            <ul class="todo-list">
              <li
                class="todo-item"
                v-for="(item, index) in todoList"
                :key="index"
              >
                {{ item.title }}
              </li>
            </ul>
          </a-collapse-item>
          <a-collapse-item header="已完成" :style="customStyle" key="2">
            <ul class="todo-list">
              <li
                class="todo-item"
                v-for="(item, index) in todoList"
                :key="index"
              >
                {{ item.title }}
              </li>
            </ul>
          </a-collapse-item>
        </a-collapse>
      </div>
    </div>
    <div class="todo-add"></div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import dayjs from "dayjs";
import { db } from "@/database/db";

export default defineComponent({
  setup() {
    const state = reactive({
      dateList: [
        "2022-11-12",
        "2022-11-13",
        "2022-11-14",
        "2022-11-15",
        "2022-11-16",
      ],
      activeDate: "2022-11-12",
      todoList: [
        {
          finished: false,
          startTime: "",
          endTime: "",
          title: "今日计划是....",
          remark: "这是一行备注",
        },
        {
          finished: false,
          startTime: "",
          endTime: "",
          title: "今日计划是....",
          remark: "这是一行备注",
        },
        {
          finished: false,
          startTime: "",
          endTime: "",
          title: "今日计划是....",
          remark: "这是一行备注",
        },
      ],
    });

    const chargeTime = (time) => {
      const timeDate = dayjs(time).date();
      const nowDate = dayjs().date();
      if (timeDate === nowDate) {
        return "今日";
      } else if (timeDate - nowDate === 1) {
        return "明日";
      } else {
        return dayjs(time).format("YY/MM/D");
      }
    };

    const customStyle = {
      borderRadius: "6px",
      marginBottom: "4px",
      border: "none",
      overflow: "hidden",
    };

    const chooseDate = (date) => {
      state.activeDate = date;
    };

    onMounted(() => {
      db.bookkeeping.add({
        money: 234,
        monyType: 1,
        bookType: 1,
        bookTime: "2022-01-01 10:34:21",
      });
    });

    return {
      ...toRefs(state),
      customStyle,
      chargeTime,
      chooseDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.mini-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.date-picker {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  &-item {
    height: 30px;
    width: 85px;
    line-height: 20px;
    padding: 5px 0;
    margin: 10px;
    text-align: center;
    box-sizing: border-box;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-weight: 600;
      // color: red;
      // box-shadow: 5px 5px 5px 5px grey;
    }

    &.active {
      font-weight: 600;
      border: 1px solid transparent;
      border-radius: 50px;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(
          to right,
          rgba(240, 240, 240, 1),
          rgba(240, 240, 240, 1)
        ),
        linear-gradient(180deg, rgba(255, 185, 0, 1), rgba(253, 160, 133, 1));
    }
  }
}

.todo-wrapper {
  height: calc(100% - 65px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.todo-list {
  .todo-item {
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(
        to right,
        rgba(240, 240, 240, 1),
        rgba(240, 240, 240, 1)
      ),
      linear-gradient(176.66deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.15);
  }
}

// arco collapse
:deep() {
  .arco-collapse-item-header {
    display: inline-flex;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid transparent;
    border-radius: 50px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(
        to right,
        rgba(240, 240, 240, 1),
        rgba(240, 240, 240, 1)
      ),
      linear-gradient(180deg, rgba(255, 185, 0, 1), rgba(253, 160, 133, 1));
    margin: 10px;
  }

  .arco-collapse-item-content {
    padding: 0 20px;
  }
}
</style>
