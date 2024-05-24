import { createRouter, createWebHistory } from 'vue-router'
import { PATHS } from '@/router/paths'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: PATHS.HOME,
            component: DefaultLayout,
            children: [

            ],
        },
    ]
})