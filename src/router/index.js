import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import NotFound from "@/views/NotFound.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:  [
        {
            path:"/",
            name:"home",
            component: Home,
            alias: '/home',
        },
        {
            path:"/about",
            name:"about",
            component: About
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