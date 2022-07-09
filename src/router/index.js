import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/main.vue")
    }
];
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map