<script setup>
const menus = [
  {
    name: "长列表",
    to: "/",
  },
  {
    name: "表格",
    to: "/table",
  },
];
</script>

<template>
  <div class="app">
    <router-link :to="item.to" v-for="item in menus" :key="item.to">{{
      item.name
    }}</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
.app {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #f1f1f1;
  line-height: 40px;
  a {
    color: #71777c;
    position: relative;
    & + a {
      margin-left: 20px;
    }
    &:hover {
      &::after {
        content: "";
        display: block;
        width: 50%;
        height: 2px;
        background: #007fff;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 26px;
      }
    }
  }
  .router-link-active {
    color: #007fff;
  }
}
</style>
