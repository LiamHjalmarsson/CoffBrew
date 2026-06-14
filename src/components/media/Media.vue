<template>
	<Image
		v-if="type === 'image' && image"
		:image="image"
	/>

	<Video
		v-else-if="type === 'video' && video"
		v-bind="video"
	/>
</template>

<script setup lang="ts">
	import Image from "@/components/media/Image.vue";
	import Video from "@/components/media/Video.vue";
	import type { MediaProps } from "@/types";

	defineProps<MediaProps>();
</script>
