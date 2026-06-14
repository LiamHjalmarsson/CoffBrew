<template>
	<Container
		fullScreen
		background-color="black"
	>
		<div
			class="flex flex-col relative z-10"
			:class="[alignContent]"
		>
			<H2 class="mb-4">{{ subheading }}</H2>
			<H1>{{ heading }}</H1>
			<p class="mt-6 mb-8 text-xl">{{ description }}</p>
			<ButtonList
				:buttons="buttons"
				@click="(button, index) => emit('buttonClick', button, index)"
				class="max-w-125"
			/>
		</div>

		<div class="absolute inset-0 opacity-30">
			<Media
				:type="media.type"
				:image="media.image"
				:video="media.video"
				class="w-full h-full object-cover"
			/>
		</div>
	</Container>
</template>

<script setup lang="ts">
	import Container from "@/components/layout/Container.vue";
	import Media from "@/components/media/Media.vue";
	import ButtonList from "@/components/ui/button/ButtonList.vue";
	import H1 from "@/components/ui/hTag/H1.vue";
	import H2 from "@/components/ui/hTag/H2.vue";
	import { usePositionAlignment } from "@/composables/usePostionAlignment";
	import type { ButtonProps, MediaProps } from "@/types";

	interface HeroBlockProps {
		heading: string;
		subheading: string;
		description: string;
		media: MediaProps;
		buttons: ButtonProps[];
	}

	defineProps<HeroBlockProps>();

	const emit = defineEmits<{
		buttonClick: [button: ButtonProps, index: number];
	}>();

	const alignContent = usePositionAlignment("center");
</script>
