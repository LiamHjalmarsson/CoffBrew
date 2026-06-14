<template>
	<component
		:is="type"
		class="flex gap-3"
	>
		<slot />
	</component>
</template>

<script setup lang="ts">
	const { type = "ul" } = defineProps<{
		type?: "ul" | "ol" | "dl";
		variant?: string;
	}>();
</script>
