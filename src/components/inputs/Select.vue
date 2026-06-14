<template>
	<InputWrapper
		:id="id"
		:label="label"
		:error="error"
		:hint="hint"
	>
		<div class="relative">
			<select
				:id="id"
				:value="modelValue"
				:disabled="disabled"
				class="w-full appearance-none rounded-md bg-white px-4 py-2.5 shadow outline-none disabled:cursor-not-allowed disabled:opacity-50"
				@change="
					emit(
						'update:modelValue',
						($event.target as HTMLSelectElement).value,
					)
				"
			>
				<option
					v-if="placeholder"
					value=""
					disabled
					:selected="!modelValue"
				>
					{{ placeholder }}
				</option>

				<option
					v-for="option in options"
					:key="option.value"
					:value="option.value"
					:disabled="option.disabled"
				>
					{{ option.label }}
				</option>
			</select>

			<!-- Chevron -->
			<div
				class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
			>
				<svg
					class="size-4 text-neutral-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	</InputWrapper>
</template>
<script setup lang="ts">
	import InputWrapper from "./InputWrapper.vue";
	import type { SelectProps } from "@/types";

	const {
		id,
		label,
		hint,
		error,
		placeholder,
		modelValue,
		options,
		disabled = false,
	} = defineProps<SelectProps>();

	const emit = defineEmits<{
		"update:modelValue": [value: string];
	}>();
</script>
