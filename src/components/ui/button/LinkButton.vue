<template>
	<RouterLink
		v-if="type === 'internal'"
		:to="url ?? '/'"
		class=""
	>
		<Button v-bind="button">
			<slot />
		</Button>
	</RouterLink>

	<a
		v-else-if="type === 'external'"
		:href="url"
		target="_blank"
		rel="noopener noreferrer"
		class=""
	>
		<Button v-bind="button">
			<slot />
		</Button>
	</a>

	<Button
		v-else
		v-bind="button"
	>
		<slot />
	</Button>
</template>
<script setup lang="ts">
	import type { ButtonProps } from "@/types/index.js";
	import Button from "./Button.vue";
	import type { LinkType } from "@/types/global.js";

	interface LinkButtonProps {
		type?: LinkType;
		url?: string;
		button?: ButtonProps;
	}

	defineProps<LinkButtonProps>();
</script>
