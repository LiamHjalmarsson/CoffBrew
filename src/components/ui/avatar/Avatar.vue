<template>
	<div
		class="relative inline-flex shrink-0 items-center justify-center overflow-hidden"
		:class="[avatarSize, avatarShape, avatarColor]"
	>
		<Image
			v-if="image"
			:image="image"
		/>
		<span v-else> {{ initials }} </span>
	</div>
</template>

<script setup lang="ts">
	import Image from "@/components/media/Image.vue";
	import { useColor } from "@/composables/useColor";
	import type { ImageProps } from "@/types";
	import type { BackgroundColors, Shape, Size } from "@/types/global";
	import { computed } from "vue";

	interface AvatarProps {
		image?: ImageProps;
		size?: Size;
		color?: BackgroundColors;
		shape?: Shape;
		initials?: string;
	}

	const {
		size = "md",
		shape = "square",
		color = "none",
	} = defineProps<AvatarProps>();

	const avatarColor = useColor(color, "background");

	const avatarShape = computed(() =>
		shape === "square" ? "rounded-lg" : "rounded-full",
	);

	const avatarSize = computed(() => {
		switch (size) {
			case "xs":
				return "size-6 text-[10px]";
			case "sm":
				return "size-8 text-xs";
			case "lg":
				return "size-12 text-base";
			case "xl":
				return "size-16 text-lg";
			default:
				return "size-10 text-sm";
		}
	});
</script>
