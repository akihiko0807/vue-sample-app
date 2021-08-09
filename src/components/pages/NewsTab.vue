<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NewsData } from "@/store/app.config";
import NewsList from "@/components/pages/NewsList.vue";

export default defineComponent({
  name: "NewsTab",
  data() {
    return {
      selectCategory: "All",
    };
  },
  props: {
    newsData: {
      type: Object as PropType<NewsData[]>,
      required: true,
    },
  },
  methods: {
    selectTab(tabName: string) {
      if (this.selectCategory !== tabName) this.selectCategory = tabName;
    },
  },
  components: {
    NewsList,
  },
});
</script>

<template>
  <div class="News__tabs">
    <div class="News__tabList" role="tablist" aria-label="ニュース">
      <button type="button" role="tab" class="News__tab" :class="{ '-active': selectCategory === 'All' }" @click="selectTab('All')">All</button>
      <button type="button" role="tab" class="News__tab" :class="{ '-active': selectCategory === 'Book' }" @click="selectTab('Book')">Book</button>
      <button type="button" role="tab" class="News__tab" :class="{ '-active': selectCategory === 'Author' }" @click="selectTab('Author')">Author</button>
    </div>
    <NewsList :select-category="selectCategory" :news-date="newsData" />
  </div>
</template>
