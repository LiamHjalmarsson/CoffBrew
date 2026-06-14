<template>
	<Container
		background-color="white"
		class="py-24"
	>
		<div class="flex flex-col md:flex-row mx-auto w-full">
			<div
				class="flex-1 py-6"
				v-if="image"
			>
				<Media
					type="image"
					:image="image"
					class="object-cover object-center aspect-7/7"
				/>
			</div>
			<div
				class="flex-1 bg-neutral-900 shadow-black shadow-2xl flex flex-col px-8 py-10 gap-4"
				:class="[contentPostion]"
			>
				<H2 class="text-white">
					{{ heading }}
				</H2>

				<p class="text-neutral-300 leading-relaxed">
					{{ description }}
				</p>

				<ButtonList :buttons="buttons" />
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
	import Container from "@/components/layout/Container.vue";
	import Media from "@/components/media/Media.vue";
	import ButtonList from "@/components/ui/button/ButtonList.vue";
	import H2 from "@/components/ui/hTag/H2.vue";
	import { usePositionAlignment } from "@/composables/usePostionAlignment";
	import type { ButtonProps, ImageProps } from "@/types";
	import type { Position } from "@/types/global";

	interface CtaBlockProps {
		image?: ImageProps;
		heading: string;
		description: string;
		buttons: ButtonProps[];
		alignContent: Position;
	}

	const { alignContent = "center" } = defineProps<CtaBlockProps>();

	const contentPostion = usePositionAlignment(alignContent);
</script>
