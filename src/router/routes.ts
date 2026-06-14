import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("@/layouts/DefaultLayout.vue"),
		children: [
			{
				path: "",
				name: "home",
				component: () => import("@/pages/HomePage.vue"),
			},
			{
				path: "sandbox",
				name: "sandbox",
				component: () => import("@/pages/SandboxPage.vue"),
			},
		],
	},
];
