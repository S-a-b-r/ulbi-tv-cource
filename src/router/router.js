/* eslint-disable */
import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    }
]

const router = createRouter({
    routes, 
    history: createWebHistory()
})

export default router;
