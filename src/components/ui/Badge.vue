<template>
	<div
		:class="[badgeColor, badgeSize]"
		class="inline-flex items-center gap-2 font-medium leading-tight"
	>
		<span>
			<slot> {{ label }} </slot>
		</span>
	</div>
</template>

<script setup lang="ts">
	import { useColor } from "@/composables/useColor";
	import type { BadgeProps } from "@/types";
	import { computed } from "vue";

	const {
		label,
		size = "md",
		color = "primary",
		variant = "solid",
	} = defineProps<BadgeProps>();

	const badgeColor = useColor(color);

	const badgeSize = computed(() => {
		switch (size) {
			case "xs":
				return "px-1.5 py-0.5 text-[10px]";
			case "sm":
				return "px-2 py-0.5 text-xs";
			case "lg":
				return "px-3 py-1 text-sm";
			case "xl":
				return "px-3.5 py-1.5 text-base";
			default:
				return "px-2.5 py-0.5 text-xs";
		}
	});
</script>
