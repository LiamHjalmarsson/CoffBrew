<template>
	<component
		:is="as"
		:class="[color]"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
	import { useColor } from "@/composables/useColor";
	import type { CardProps } from "@/types";

	const {
		as = "div",
		backgroundColor = "white",
		size = "md",
	} = defineProps<CardProps>();

	const color = useColor(backgroundColor);
</script>
