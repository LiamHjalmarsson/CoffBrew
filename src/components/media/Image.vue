<template>
	<img
		v-if="thumbnail"
		:loading="image.loading ? 'eager' : 'lazy'"
		:src="image.src"
		:alt="image.alt"
		:height="image.height"
		:width="image.width"
	/>
	<img
		v-else
		:loading="image.loading ? 'eager' : 'lazy'"
		:src="image.src"
		:alt="image.alt"
		:srcset="image.srcset"
		:title="image.title"
		:height="image.height"
		:width="image.width"
		sizes="1px"
	/>
</template>

<script setup lang="ts">
	import type { ImageProps } from "@/types";

	interface Image {
		image: ImageProps;
		thumbnail?: boolean;
	}

	defineProps<Image>();
</script>
