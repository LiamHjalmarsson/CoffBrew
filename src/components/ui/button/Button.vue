<template>
	<button
		:type="type"
		:disabled="disabled || loading"
		:class="[buttonStyle, buttonSize]"
		class="font-bold leading-[1.2] tracking-[1px] duration-300 transition rounded-md disabled:bg-background-disabled disabled:text-disabled cursor-pointer"
	>
		<span
			v-if="loading"
			class="flex items-center gap-4"
		>
			<svg
				class="animate-spin size-3"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				:class="[iconPosition === 'left' ? 'order-1' : 'order-2']"
				aria-hidden="true"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				/>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
				/>
			</svg>
			<span :class="[iconPosition === 'left' ? 'order-2' : 'order-1']">
				{{ label }}
			</span>
		</span>

		<slot>
			<div
				v-if="!loading && !disabled"
				class="flex items-center gap-2"
			>
				<Icon
					v-if="icon"
					:icon="icon"
					class="shrink-0"
					:class="[
						iconSize,
						iconPosition === 'right' ? 'order-2' : 'order-1',
					]"
				/>
				<span
					v-if="label"
					:class="iconPosition === 'right' ? 'order-1' : 'order-2'"
				>
					{{ label }}
				</span>
			</div>
		</slot>
	</button>
</template>

<script setup lang="ts">
	import type { ButtonProps } from "@/types";
	import { Icon } from "@iconify/vue";
	import { computed } from "vue";

	const {
		type = "button",
		size = "lg",
		color = "primary",
		loading = false,
		disabled = false,
		iconPosition = "right",
		icon,
		label,
	} = defineProps<ButtonProps>();

	const buttonStyle = computed(() => {
		switch (color) {
			case "primary":
				return "bg-primary-500 hover:bg-primary-600 text-white";
			case "primary-outline":
				return "bg-transparent border-primary-500 border text-primary hover:bg-primary-50";
			case "secondary":
				return "bg-neutral-500 hover:bg-neutral-600 text-white";
			case "secondary-outline":
				return "bg-transparent border border-neutral-500 text-neutral-600 hover:bg-neutral-50";
			case "ghost":
				return "bg-transparent text-inherit";
			default:
				return "bg-background-disabled text-disabled hover:bg-neutral-800";
		}
	});

	const buttonSize = computed(() => {
		switch (size) {
			case "xs":
				return "";
			case "sm":
				return "px-4 py-1.5 text-sm";
			case "md":
				return "px-8 py-2.5 text-base";
			case "lg":
				return "px-10 py-3 text-lg";
			case "xl":
				return "px-12 py-3.5 text-xl";
			default:
				return "px-8 py-2.5 text-base";
		}
	});

	const iconSize = computed(() => {
		switch (size) {
			case "xs":
				return "size-3";
			case "sm":
				return "size-3.5";
			case "lg":
				return "size-5";
			case "xl":
				return "size-6";
			default:
				return "size-4";
		}
	});
</script>
