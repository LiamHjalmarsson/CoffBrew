<template>
	<HeroBlock
		heading="Craft Coffee Culture"
		subheading="Beans · Machines · Knowledge"
		description="Single-origin beans, professional machines, and everything you need to brew like you mean it."
		:media="heroMedia"
		:buttons="heroButtons"
	/>

	<Container
		class="py-24"
		background-color="secondary"
	>
		<div class="flex space-x-24">
			<div class="flex flex-col items-center text-center max-w-75">
				<Icon
					icon="temaki:coffee"
					class="text-5xl mb-4 text-primary"
				/>
				<H3 class="mb-2"> Direct-trade beans </H3>
				<p class="text-neutral-400">
					Every bag traces back to a named farm. We visit. We pay
					fair.
				</p>
			</div>
			<div class="flex flex-col items-center text-center max-w-75">
				<Icon
					icon="raphael:coffee"
					class="text-5xl mb-4 text-primary"
				/>
				<H3 class="mb-2"> Professional machines </H3>
				<p class="text-neutral-400">
					Home espresso to commercial semi-auto — curated for real
					results.
				</p>
			</div>
			<div class="flex flex-col items-center text-center max-w-75">
				<Icon
					icon="circum:coffee-cup"
					class="text-5xl mb-4 text-primary"
				/>
				<H3 class="mb-2"> Brewing knowledge </H3>
				<p class="text-neutral-400">
					Recipes, guides, and honest technique from people who
					actually brew.
				</p>
			</div>
		</div>
	</Container>

	<Container
		class="pb-24"
		background-color="secondary"
	>
		<SectionHeader
			heading="Featured beans"
			eyebrow="Single-origin"
			class="mb-8"
		/>

		<div class="flex gap-6">
			<FeaturedBeanCard
				v-for="bean in defaultBeans"
				:key="bean.name"
				:bean="bean"
			/>
		</div>
	</Container>

	<TextImageBlock />
</template>

<script setup lang="ts">
	import HeroBlock from "@/blocks/HeroBlock.vue";
	import TextImageBlock from "@/blocks/TextImageBlock.vue";
	import Container from "@/components/layout/Container.vue";
	import H3 from "@/components/ui/hTag/H3.vue";
	import { Icon } from "@iconify/vue";
	import type { ButtonProps, ImageProps, MediaProps } from "@/types";
	import FeaturedBeanCard, {
		type BeanCardData,
	} from "@/modules/beans/FeaturedBeanCard.vue";
	import SectionHeader from "@/components/section/SectionHeader.vue";

	const image1: ImageProps = {
		src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format&fit=crop&q=80",
		alt: "Barista pouring latte art",
		width: 1600,
		height: 900,
		loading: "eager",
	};

	const heroMedia: MediaProps = {
		type: "image",
		image: image1,
	};

	const heroButtons: ButtonProps[] = [
		{
			label: "Shop beans",
			color: "primary",
			size: "lg",
		},
		{
			label: "Shop machines",
			color: "secondary",
			size: "lg",
		},
	];

	const defaultBeans: BeanCardData[] = [
		{
			name: "Yirgacheffe Natural",
			origin: "Ethiopia",
			roast: "Light",
			notes: "Blueberry, jasmine, lemon curd. Exceptional as filter or ristretto.",
			price: "149 kr",
			weight: "250g",
			slug: "yirgacheffe-natural",
			image: {
				src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80",
				alt: "Yirgacheffe Natural coffee beans",
				width: 600,
				height: 600,
				loading: "eager",
			},
		},
		{
			name: "Huila Washed",
			origin: "Colombia",
			roast: "Medium",
			notes: "Red apple, caramel, milk chocolate. A reliable everyday espresso.",
			price: "139 kr",
			weight: "250g",
			slug: "huila-washed",
			image: {
				src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
				alt: "Huila Washed coffee beans",
				width: 600,
				height: 600,
				loading: "eager",
			},
		},
		{
			name: "Sumatra Mandheling",
			origin: "Indonesia",
			roast: "Dark",
			notes: "Cedar, dark chocolate, earthy sweetness. Bold and low-acid.",
			price: "129 kr",
			weight: "250g",
			slug: "sumatra-mandheling",
			image: {
				src: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&auto=format&fit=crop&q=80",
				alt: "Sumatra Mandheling coffee beans",
				width: 600,
				height: 600,
				loading: "eager",
			},
		},
	];
</script>
