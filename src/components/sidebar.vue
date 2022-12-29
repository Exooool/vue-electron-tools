<template>
  <div class="sidebar-box">
    <ul class="menu-box">
      <li
        class="menu-item"
        :class="[name === 'dashboard' ? 'menu-item-active' : '']"
        @click="toPath('dashboard')"
      >
        <icon-apps class="icon" size="20" />
        <span>工作台</span>
      </li>
      <li
        class="menu-item"
        :class="[name === 'bookkeeping' ? 'menu-item-active' : '']"
        @click="toPath('bookkeeping')"
      >
        <icon-bar-chart class="icon" size="20" />
        <span>记账</span>
      </li>
      <li
        class="menu-item"
        :class="[name === 'memorandum' ? 'menu-item-active' : '']"
        @click="toPath('memorandum')"
      >
        <icon-file class="icon" size="20" />
        <span>ToDoList</span>
      </li>
      <li
        class="menu-item"
        :class="[name === 'setting' ? 'menu-item-active' : '']"
        @click="toPath('setting')"
      >
        <icon-settings class="icon" size="20" />
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import {
  IconApps,
  IconFile,
  IconBarChart,
  IconSettings,
} from "@arco-design/web-vue/es/icon";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: {
    IconApps,
    IconFile,
    IconBarChart,
    IconSettings,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const name = computed(() => {
      return route.name;
    });

    const toPath = (path) => {
      router.push({
        path: `/${path}`,
      });
    };

    return {
      name,
      toPath,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-box {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  .menu-item {
    border-radius: 4px;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #fff;
      .icon {
        background: #4378fc;
        color: #fff;
      }
      span {
        font-weight: 600;
        color: black;
      }
    }

    .icon {
      border-radius: 5px;
      padding: 8px;
      background: #fff;
      color: #4378fc;
      transition: all 0.1s ease-in-out;
    }
    span {
      margin-left: 10px;
      color: #8c8c8c;
      transition: all 0.1s ease-in-out;
    }
  }

  .menu-item-active {
    background: #fff;
    .icon {
      background: #4378fc;
      color: #fff;
    }
    span {
      font-weight: 600;
      color: black;
    }
  }
}
</style>
