<script setup>
import { ref, onMounted } from "vue";
const myRef = ref(null);
// 元数据
const dataSource = Array.from({ length: 100 }, (v, i) => i);
const itemHeight = 60;
const list = ref([]);
const pageView = () => {
  const container = myRef.value;
  const content = container.querySelector("ul");
  const viewHeight = container.offsetHeight; // 视口高度（虚拟列表所展示部分高度）
  const contentHeight = itemHeight * dataSource.length; // 滚动区域高度
  const itemCount = Math.ceil(viewHeight / itemHeight); // 视口元素数量
  const scrollCallback = (e) => {
    const scrollTop = e.target.scrollTop; // 容器元素的滚动距离
    const startIndex = Math.ceil(scrollTop / itemHeight); // 视口第一个元素所在数据源中的索引
    const endIndex = startIndex + itemCount; // 视口最后一个元素所在数据源中的索引
    list.value = dataSource.slice(startIndex, endIndex + 1);
    const paddingTop = startIndex * itemHeight;
    const paddingBottom = contentHeight - paddingTop - itemCount * itemHeight;
    content.setAttribute(
      "style",
      `padding-top:${paddingTop}px;padding-bottom:${paddingBottom}px`
    );
  };
  container.addEventListener("scroll", scrollCallback);
  // 初始化数据
  scrollCallback({ target: container });
};
onMounted(() => {
  pageView();
});
</script>
<template>
  <div ref="myRef" class="content">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item + 1 }}
      </li>
    </ul>
  </div>
  <div>长列表优化，减少渲染dom数量，使用虚拟列表</div>
</template>
<style lang="scss">
.content {
  height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  li {
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
}
</style>
