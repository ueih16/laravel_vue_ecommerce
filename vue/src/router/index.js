import { createRouter, createWebHistory } from "vue-router"
import AuthLayout from "../components/user/AuthLayout.vue"
import DefaultLayout from "../components/user/DefaultLayout.vue"
import Login from "../views/user/auth/Login.vue"
import Register from "../views/user/auth/Register.vue"
import Home from "../views/user/home/Home.vue"

import store from "../store"

const routes = [
    {
        path: "/auth",
        name: "Auth",
        redirect: "/login",
        component: AuthLayout,
        children: [
            { path: "/login", name: "Login", component: Login },
            { path: "/register", name: "Register", component: Register },
        ]
    },
    {
        path: "/",
        name: "DefaultLayout",
        redirect: "/",
        component: DefaultLayout,
        children: [
            { path: "/", name: "Home", component: Home },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
