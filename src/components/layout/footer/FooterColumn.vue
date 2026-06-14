<template>
	<div class="flex flex-col gap-4">
		<H3 class="uppercase text-lg text-neutral-500 mb-2">
			{{ heading }}
		</H3>

		<List>
			<ListItem
				v-for="link in links"
				:key="link.label"
			>
				<NavItem
					v-if="link.type === 'internal'"
					:url="link.url"
					:label="link.label"
				/>

				<a
					v-else
					:href="link.url"
					target="_blank"
					class="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
				>
					{{ link.label }}
				</a>
			</ListItem>
		</List>
	</div>
</template>
<script setup lang="ts">
	import H3 from "@/components/ui/hTag/H3.vue";
	import List from "@/components/ui/list/List.vue";
	import ListItem from "@/components/ui/list/ListItem.vue";
	import NavItem from "@/components/ui/NavItem.vue";
	import type { NavItemProps } from "@/types";

	export interface FooterColumnProps {
		heading: string;
		links: NavItemProps[];
	}

	defineProps<FooterColumnProps>();
</script>
