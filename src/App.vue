<template>
  <div class="title-bar-container">
    <div class="logo">Note</div>
  </div>
  <div class="router-view-container">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  height: 100%;
  width: 100%;
  margin: 0;
  user-select: none;
}

.title-bar-container {
  -webkit-app-region: drag;
  height: 30px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  text-align: left;
  background-color: white;

  .logo {
    display: inline-flex;
    font-weight: 600;
    font-size: 16px;
    background-image: conic-gradient(
      from 90deg at 50% 50%,
      rgba(255, 185, 0, 1) 38.61%,
      rgba(253, 160, 133, 1) 98.99%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    // background: conic-gradient(
    //   from 90deg at 50% 50%,
    //   rgba(255, 185, 0, 1) 38.61%,
    //   rgba(253, 160, 133, 1) 98.99%
    // );
  }
}

.router-view-container {
  height: calc(100vh - 30px);
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
