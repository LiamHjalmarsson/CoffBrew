<template>
	<aside
		class="bg-primary-500 text-white fixed md:relative h-screen p-16 transition-all duration-300 ease-in-out z-50 -translate-x-full"
		:class="['md:translate-x-0 w-fit']"
	>
		<nav class="flex flex-col h-full">
			<div class="flex justify-between items-center h-auto">
				<H1 class="uppercase">compnay</H1>
			</div>

			<slot>
				<List class="flex-1">
					<ListItem> </ListItem>
				</List>
			</slot>

			<div class="flex items-center space-x-4">
				<RouterLink to="#">
					<Avatar
						initials="LH"
						class="p-2 shadow"
						color="white"
					/>
				</RouterLink>
				<LinkButton
					url="#"
					type="internal"
					:button="{
						label: 'Logga ut',
						color: 'ghost',
						size: 'xs',
					}"
				/>
			</div>
		</nav>
	</aside>
</template>

<script setup lang="ts">
	import Avatar from "@/components/ui/avatar/Avatar.vue";
	import LinkButton from "@/components/ui/button/LinkButton.vue";
	import H1 from "@/components/ui/hTag/H1.vue";
	import List from "@/components/ui/list/List.vue";
	import ListItem from "@/components/ui/list/ListItem.vue";
</script>
