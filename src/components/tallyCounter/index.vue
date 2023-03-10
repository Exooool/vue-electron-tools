<template>
  <a-grid :cols="24" :col-gap="16">
    <a-grid-item :span="24">
      <div class="tally-classify-wrapper">
        <div class="tally-classify-list">
          <div
            v-for="(item, index) in tallyClassifies"
            :key="index"
            class="tally-classify-item"
            :class="
              tallyType === item.value ? 'tally-classify-item-selected' : ''
            "
            @click="select(item.value)"
          >
            <a-avatar
              ><i class="iconfont icon-gongzi" :class="item.icon"
            /></a-avatar>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div></a-grid-item
    >
    <a-grid-item :span="24"
      ><div class="tally-counter">
        <div class="tally-nums">
          <span>{{ money === "" ? "0.00" : money }}</span>
        </div>
        <div class="tally-remark">
          <a-input
            v-model="remark"
            :style="{ width: '100%' }"
            placeholder="点击写备注"
            allow-clear
          >
            <template #prefix>
              <icon-edit />
              备注
            </template>
          </a-input>
        </div>
        <div class="tally-keyboard">
          <a-grid :cols="4">
            <a-grid-item
              v-for="(item, index) in counterItems"
              :key="index"
              class="keyboard-item"
              @click="
                item !== 'delete' &&
                item !== 'date' &&
                item !== '+' &&
                item !== '-' &&
                item !== 'compelete'
                  ? nums(item)
                  : operation(item)
              "
            >
              <span
                v-if="
                  item !== 'date' && item !== 'delete' && item !== 'compelete'
                "
                >{{ item }}</span
              >
              <span v-if="item === 'date'"
                ><a-date-picker v-model="tallyTime" style="width: 100%">
                  <a-button style="padding: 0; background: none">{{
                    tallyTime || "请选择日期"
                  }}</a-button>
                </a-date-picker></span
              >
              <span v-if="item === 'compelete'">{{
                !(money.includes("-") || money.includes("+")) ? "完成" : "="
              }}</span>
              <icon-delete v-if="item === 'delete'"
            /></a-grid-item>
          </a-grid>
        </div></div
    ></a-grid-item>
  </a-grid>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from "vue";
import { IconEdit, IconDelete } from "@arco-design/web-vue/es/icon";
import { tallyClassifies } from "./const";

export default defineComponent({
  components: {
    IconEdit,
    IconDelete,
  },
  props: {
    modelValue: Object,
  },
  emits: ["update:modelValue", "compelete"],
  setup(props, ctx) {
    const counterItems = [
      "7",
      "8",
      "9",
      "date",
      "4",
      "5",
      "6",
      "+",
      "1",
      "2",
      "3",
      "-",
      ".",
      "0",
      "delete",
      "compelete",
    ];

    const state = reactive({
      money: props.modelValue.money,
      tallyType: props.modelValue.tallyType,
      tallyTime: props.modelValue.tallyTime,
      remark: props.modelValue.remark,
    });

    watch(state, (newValue) => {
      ctx.emit("update:modelValue", newValue);
    });

    const select = (value) => {
      state.tallyType = value;
    };

    const nums = (value) => {
      if (state.money === "0" && value !== ".") {
        state.money = value;
      } else if (
        (state.money === "" || state.money.includes(".")) &&
        value === "."
      ) {
        return;
      } else {
        state.money += value;
      }
      console.log(state.money);
    };

    const operation = (value) => {
      let { money } = state;
      if (value === "delete" && money.length > 1) {
        state.money = money.substring(0, state.money.length - 1);
      } else if (value === "delete" && money.length === 1) {
        state.money = "0";
      } else if (!money.includes("+") && value === "+") {
        state.money += "+";
      } else if (!money.includes("-") && value === "-") {
        state.money += "-";
      } else if (money !== "" && value === "compelete") {
        if (
          money[money.length - 1] === "+" ||
          money[money.length - 1] === "-"
        ) {
          money = money.substring(0, state.money.length - 1);
        } else if (!(money.includes("+") || money.includes("-"))) {
          ctx.emit("compelete");
        }
        // eslint-disable-next-line no-eval
        state.money = eval(money).toString();
      }
    };

    return {
      ...toRefs(state),
      counterItems,
      tallyClassifies,
      nums,
      operation,
      select,
    };
  },
});
</script>

<style lang="scss" scoped>
// @import url("@/assets/icon/iconfont");

.tally-classify-wrapper {
  height: 300px;
  overflow-y: auto;

  .tally-classify-list {
    display: flex;
    flex-wrap: wrap;
    user-select: none;

    .tally-classify-item {
      display: flex;
      flex-direction: column;
      margin: 5px;
      padding: 5px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: var(--color-secondary-hover);
      }

      &:active {
        background-color: var(--color-secondary-active);
      }
    }

    .tally-classify-item-selected {
      color: white;
      background-color: var(--color-secondary-active);
    }
  }
}

.tally-counter {
  max-width: 380px;

  .tally-nums {
    height: 35px;
    margin: 5px;
    font-size: 24px;
    line-height: 35px;
    text-align: right;
    user-select: none;
  }

  .tally-keyboard {
    padding-top: 10px;
    user-select: none;

    .keyboard-item {
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 0.5px solid rgb(246, 246, 246);

      &:hover {
        background-color: var(--color-secondary-hover);
      }

      &:active {
        background-color: var(--color-secondary-active);
      }
    }
  }
}
</style>
