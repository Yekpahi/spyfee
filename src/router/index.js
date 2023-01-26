import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import NotFound from "@/views/NotFound.vue"
import User from "@/views/User.vue"

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