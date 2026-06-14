<template>
	<div
		:class="[
			fullScreen && ' h-screen overflow-hidden w-screen relative',
			color,
			'flex justify-center items-center',
		]"
	>
		<div :class="[fullScreen && 'w-full', elementSize, 'px-12']">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useColor } from "@/composables/useColor";
	import { useSize } from "@/composables/useSize";
	import type { BackgroundColors, Size } from "@/types/global";

	interface ContainerProps {
		size?: Size;
		fullScreen?: boolean;
		backgroundColor?: BackgroundColors;
	}

	const { size, backgroundColor = "white" } = defineProps<ContainerProps>();

	const elementSize = useSize(size);

	const color = useColor(backgroundColor, "background");
</script>
