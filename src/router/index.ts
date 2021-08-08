import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Top",
    component: Top,
    meta: {
      title: "Topページ",
      description: "Topページの説明"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "about" */
        "../views/About.vue"
      ),
    meta: {
      title: "Aboutページ",
      description: "Aboutページの説明",
    }
  },
  {
    path: "/author",
    name: "Author",
    component: () =>
      import(
        /* webpackChunkName: "author" */
        "../views/Author.vue"
      ),
    meta: {
      title: "Authorページ",
      description: "Authorページの説明",
    }
  },
  {
    path: "/production-note",
    name: "ProductionNote",
    component: () =>
      import(
        /* webpackChunkName: "production-note" */
        "../views/ProductionNote.vue"
      ),
    meta: {
      title: "ProductionNoteページ",
      description: "ProductionNoteページの説明",
    }
  },
  {
    path: "/faq",
    name: "Q&A",
    component: () =>
      import(
        /* webpackChunkName: "faq" */
        "../views/Faq.vue"
      ),
    meta: {
      title: "Faqページ",
      description: "Faqページの説明",
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

// AppMenu用のroutes。routes配列の1~最後を切り出し。(Top以外を使いたい)
export const menuRoutes = routes.slice(1, routes.length);

export default router;
