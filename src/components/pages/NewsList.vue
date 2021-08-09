<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { NewsData } from "@/store/app.config";
import { getCategoryNewsData, getDataDateTime } from "@/store/app.utils";

export default defineComponent({
  name: "NewsList",
  props: {
    newsData: {
      type: Object as PropType<NewsData[]>,
      required: true,
    },
    selectCategory: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // フィルタリング
    const filteredData = computed(() => {
      return getCategoryNewsData(props.newsData, props.selectCategory);
    });
    return { filteredData };
  },
  methods: {
    getDateTime(dateStr: string): string {
      return getDataDateTime(dateStr);
    },
  },
});
</script>

<template>
  <div class="News__tabPanel">
    <ul class="News__list">
      <li v-for="data in filteredData" :key="data.title" class="News__item">
        <span class="News__itemInfo">
          <time class="News__itemDate" :datetime="getDateTime(data.date)">
            {{ data.date }}
          </time>
          <span class="News__itemCategory">
            {{ data.category }}
          </span>
        </span>
        <span class="News__itemtitle">
          {{ data.title }}
        </span>
      </li>
    </ul>
  </div>
</template>
