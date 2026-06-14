<template>
	<footer class="w-full bg-neutral-900 text-white">
		<div
			class="max-w-7xl mx-auto flex justify-between items-center px-12 pt-20"
		>
			<div class="flex-1">
				<H2
					v-if="heading"
					class="uppercase"
				>
					{{ heading }}
				</H2>

				<p
					v-if="tagline"
					class="text-sm text-neutral-300 leading-relaxed max-w-xs mt-12 mb-8"
				>
					{{ tagline }}
				</p>

				<div
					v-if="socials?.length"
					class="flex items-center gap-4"
				>
					<SocialLink
						v-for="social in socials"
						:key="social.label"
						v-bind="social"
					/>
				</div>
			</div>

			<nav class="flex mt-12 flex-1 justify-end">
				<FooterColumn
					v-for="column in columns"
					:key="column.heading"
					v-bind="column"
				/>
			</nav>
		</div>

		<div class="border-t border-neutral-800 mx-12 pb-20 mt-12">
			<div
				class="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
			>
				<p class="text-xs text-neutral-500">
					{{ copyright ?? `© ${currentYear} All rights reserved.` }}
				</p>

				<div
					v-if="legalLinks?.length"
					class="flex items-center gap-6"
				>
					<NavItem
						v-for="link in legalLinks"
						:key="link.label"
						:url="link.url"
						:label="link.label"
					/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import FooterColumn, {
		type FooterColumnProps,
	} from "@/components/layout/footer/FooterColumn.vue";
	import Divider from "@/components/ui/Divider.vue";
	import H2 from "@/components/ui/hTag/H2.vue";
	import NavItem from "@/components/ui/NavItem.vue";
	import SocialLink from "@/components/ui/SocialLink.vue";
	import type { NavItemProps, SocialLinkProps } from "@/types";
	import { computed } from "vue";

	interface FooterProps {
		heading?: string;
		tagline?: string;
		columns?: FooterColumnProps[];
		socials?: SocialLinkProps[];
		legalLinks?: NavItemProps[];
		copyright?: string;
	}

	const { columns, socials, legalLinks, tagline, copyright } =
		defineProps<FooterProps>();

	const currentYear = computed(() => new Date().getFullYear());
</script>
