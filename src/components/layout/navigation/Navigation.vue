<template>
	<nav
		class="flex w-full items-center justify-between px-12 py-3 bg-black/80 text-white shadow"
	>
		<Logo
			label=""
			url="/"
			type="internal"
			size="md"
			:image="{
				src: 'https://images.unsplash.com/photo-1780323241887-8efcb9b85c71?&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
				srcset: '',
				alt: 'Acme',
				width: 120,
				height: 40,
				path: '/images/logo.svg',
				url: '',
			}"
		/>

		<List class="flex items-center space-x-6">
			<ListItem>
				<NavItem
					url="#"
					label="coffee"
				/>
			</ListItem>
			<ListItem>
				<NavItem
					url="#"
					label="Brands"
				/>
			</ListItem>
			<ListItem>
				<NavItem
					url="#"
					label="Shop"
				/>
			</ListItem>
			<ListItem>
				<NavItem
					url="#"
					label="About"
				/>
			</ListItem>
		</List>

		<Burger
			v-model:open="open"
			class="lg:hidden"
		/>
	</nav>

	<Menu v-model:open="open" />
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import Burger from "@/components/icons/Burger.vue";
	import NavItem from "@/components/ui/NavItem.vue";
	import Menu from "./Menu.vue";
	import Logo from "@/components/ui/Logo.vue";
	import List from "@/components/ui/list/List.vue";
	import ListItem from "@/components/ui/list/ListItem.vue";

	const open = ref(false);
</script>
