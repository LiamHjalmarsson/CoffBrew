<template>
	<component
		:is="type === 'external' ? 'a' : 'RouterLink'"
		v-bind="
			type === 'external'
				? {
						href: url,
						target: '_blank',
						rel: 'noopener noreferrer',
					}
				: { to: url }
		"
	>
		<img
			v-if="image"
			ref="imageRef"
			:src="image.src || image.url"
			:srcset="image.srcset || ''"
			:alt="image.alt || ''"
			:width="image.width"
			:height="image.height"
			:title="image.caption"
			sizes="1px"
			class="object-contain"
			loading="eager"
		/>
		<span
			v-else
			class="text-lg font-bold tracking-[1.2px]"
		>
			{{ label }}
		</span>
	</component>
</template>

<script setup lang="ts">
	import type { ImageProps, NavItemProps } from "@/types";
	import { onMounted, ref } from "vue";

	interface LogoProps extends NavItemProps {
		image?: ImageProps;
	}

	const props = defineProps<LogoProps>();

	const imageRef = ref<HTMLImageElement>();

	onMounted(() => {
		window.requestAnimationFrame(() => {
			if (props.image?.url) return;

			if (!imageRef.value) return;

			const width = imageRef.value.getBoundingClientRect().width;

			if (!width) return;

			imageRef.value.sizes =
				Math.ceil((width / window.innerWidth) * 100) + "vw";
		});
	});
</script>
