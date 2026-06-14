<template>
	<div :class="['flex flex-col gap-1']">
		<H3
			v-if="eyebrow"
			class="text-sm font-semibold uppercase tracking-widest"
		>
			{{ eyebrow }}
		</H3>
		<H2>
			{{ heading }}
		</H2>
	</div>
</template>

<script setup lang="ts">
	import H3 from "../ui/hTag/H3.vue";
	import H2 from "../ui/hTag/H2.vue";

	interface SectionHeaderProps {
		eyebrow?: string;
		heading: string;
	}

	defineProps<SectionHeaderProps>();
</script>
