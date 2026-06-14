<template>
	<InputWrapper
		:id="id"
		:hint="hint"
	>
		<label
			:for="id"
			class="flex cursor-pointer items-center gap-3"
			:class="disabled && 'cursor-not-allowed opacity-50'"
		>
			<div class="relative">
				<input
					:id="id"
					type="checkbox"
					class="peer sr-only"
					:checked="modelValue"
					:disabled="disabled"
					@change="
						emit(
							'update:modelValue',
							($event.target as HTMLInputElement).checked,
						)
					"
				/>

				<div
					class="h-6 w-10 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-primary-500"
				/>

				<div
					class="absolute left-1 top-1 size-4 rounded-full bg-white shadow transition-transform duration-200 peer-checked:translate-x-4"
				/>
			</div>

			<span
				v-if="label"
				class="select-none text-sm"
			>
				{{ label }}
			</span>
		</label>
	</InputWrapper>
</template>
<script setup lang="ts">
	import InputWrapper from "./InputWrapper.vue";
	import type { SwitchProps } from "@/types";

	const {
		id,
		label,
		hint,
		modelValue,
		disabled = false,
	} = defineProps<SwitchProps>();

	const emit = defineEmits<{
		"update:modelValue": [value: boolean];
	}>();
</script>
