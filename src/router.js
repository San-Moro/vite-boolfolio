import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutUs,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound', 
            component: NotFound,
        },
    ]
});

export { router };