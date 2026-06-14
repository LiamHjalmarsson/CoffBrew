<template>
	<Container size="xl">
		<div class="flex flex-1 w-full justify-between items-center gap-12">
			<div class="space-y-6 max-w-125 flex[1_1_90%]">
				<SectionHeader
					eyebrow="Oförglömliga golfresor"
					heading="Upplev skillnaden genom att boka med oss"
				/>
				<p>
					Oförglömliga golfresor väntar på dig! Upplev skillnaden
					genom att boka med oss idag. Vi strävar efter att göra din
					semester oförglömlig och minnesvärd från början till slut.
					Oavsett om det är första gången du slår en boll eller om du
					är en erfaren golfentusiast, så ser vi till att din resa
					blir precis som du drömt om. Välkommen till en
					golfupplevelse utöver det vanliga!
				</p>
				<LinkButton> Läs mer</LinkButton>
			</div>

			<div class="flex[1_1_30%]">
				<Image
					:image="image"
					class="aspect-7/7 object-cover"
				/>
			</div>
		</div>
	</Container>
</template>
<script setup lang="ts">
	import Container from "@/components/layout/Container.vue";
	import Image from "@/components/media/Image.vue";
	import SectionHeader from "@/components/section/SectionHeader.vue";
	import LinkButton from "@/components/ui/button/LinkButton.vue";

	const image = {
		src: "https://images.unsplash.com/photo-1780323241887-8efcb9b85c71?&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "string",
		width: 1000,
		height: 1000,
	};
</script>
