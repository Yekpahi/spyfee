import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue"
import About from "@/views/about/About.vue"
import NotFound from "@/views/not/NotFound.vue"
import User from "@/views/user/User.vue"
import Forum from "@/views/forum/publicForum.vue"
import SearchPage from "@/views/search/SearchPage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:  [
        {
            path:"/",
            name:"home",
            component: Home,
            alias: '/home',
            meta: {
                header: 1
              }
        },
        {
            path:"/about",
            name:"about",
            component: About,
            meta: {
                header: 2
              }
        },
        {
          path:"/forum",
          name:"forum",
          component: Forum,
          meta: {
              header: 3
            }
      },
        {
          path:"/search",
          name:"search",
          component: SearchPage,
    
      },
        {
            path:"/user",
            name:"user",
            component: User,
            meta: {
                header: 3
              }
        },
        {
            path: "/:catchAll(.*)",
            name:"notfound",
            component: NotFound,
          },

          {
            path: '/home',
            name : "redirect",
            redirect: '/',
         }
    ]
})

export default router