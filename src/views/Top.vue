<script lang="ts">
import { defineComponent } from "vue";
import NewsTab from "@/components/pages/newsTab.vue";
import { AppData } from "@/store/app.data";

export default defineComponent({
  name: "top",
  data() {
    return {
      newsData: AppData.newsDataList
    };
  },
  components: {
    NewsTab
  },
});
</script>

<template>
  <div class="News">
    <h2 class="News__heading">News</h2>
    <NewsTab :newsData="newsData" />
  </div>
</template>
