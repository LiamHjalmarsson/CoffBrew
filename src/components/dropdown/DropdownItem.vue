<template>
	<component
		:is="as"
		:disabled="as === 'button' ? disabled : undefined"
		:aria-disabled="disabled"
		:class="[
			active
				? 'bg-primary-50 text-primary-700'
				: 'text-neutral-700 hover:bg-neutral-50',
			disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
			'flex w-full cursor-pointer items-center gap-2.5 px-4 py-2 text-sm transition',
		]"
		@click="!disabled && emit('click')"
	>
		<slot />
	</component>
</template>
<script setup lang="ts">
	import type { DropdownItemProps } from "@/types";

	const {
		disabled = false,
		active = false,
		as = "button",
	} = defineProps<DropdownItemProps>();

	const emit = defineEmits<{
		click: [];
	}>();
</script>
