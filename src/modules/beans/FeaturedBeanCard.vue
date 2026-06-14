<template>
	<UiCard
		as="article"
		background-color="secondary"
		class="flex flex-col group cursor-pointer overflow-hidden max-h-140"
	>
		<div class="aspect-square overflow-hidden">
			<Image
				:image="bean.image"
				class="w-full h-full object-cover saturate-[0.6]"
			/>
		</div>

		<div class="flex flex-col gap-3 p-6 flex-1">
			<div class="flex items-center justify-between">
				<span
					class="font-mono text-xs tracking-tighter uppercase text-neutral-400"
				>
					{{ bean.origin }}
				</span>

				<Badge
					:label="bean.roast"
					color="none"
					size="xs"
					class="border border-white rounded-full"
				/>
			</div>

			<H3 class="text-white">{{ bean.name }}</H3>

			<p class="text-sm text-neutral-400 leading-relaxed flex-1">
				{{ bean.notes }}
			</p>

			<div
				class="flex items-center justify-between pt-4 border-t border-white/10 mt-2"
			>
				<div class="font-mono text-sm text-primary-400 font-bold">
					<span>
						{{ bean.price }}
					</span>
					/
					<span>
						{{ bean.weight }}
					</span>
				</div>

				<Button
					label="Add to cart"
					color="primary-outline"
					size="sm"
					@click.prevent="emit('addToCart', bean)"
				/>
			</div>
		</div>
	</UiCard>
</template>

<script setup lang="ts">
	import type { ImageProps } from "@/types";
	import Image from "@/components/media/Image.vue";
	import Badge from "@/components/ui/Badge.vue";
	import Button from "@/components/ui/button/Button.vue";
	import H3 from "@/components/ui/hTag/H3.vue";
	import UiCard from "@/components/ui/card/UiCard.vue";

	export interface BeanCardData {
		name: string;
		origin: string;
		roast: "Light" | "Medium" | "Dark";
		notes: string;
		price: string;
		weight: string;
		image: ImageProps;
		slug?: string;
	}

	interface BeanCardProps {
		bean: BeanCardData;
	}

	defineProps<BeanCardProps>();

	const emit = defineEmits<{
		addToCart: [bean: BeanCardData];
	}>();
</script>
