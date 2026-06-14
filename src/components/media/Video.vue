<template>
	<div class="relative group">
		<video
			:controls="false"
			:poster="poster_src"
			:src="src"
			:height="height"
			:width="width"
			autoplay
			playsinline
			muted
			loop
			class="object-cover size-full"
		/>
	</div>
</template>

<script setup lang="ts">
	import type { VideoProps } from "@/types";

	defineProps<VideoProps>();
</script>
