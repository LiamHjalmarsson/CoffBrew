<template>
	<InputWrapper
		:id="id"
		:label="label"
		:error="error"
		:hint="hint"
	>
		<textarea
			:id="id"
			:value="modelValue"
			:rows="rows"
			:placeholder="placeholder"
			:disabled="disabled"
			:class="resize ? 'resize-y' : 'resize-none'"
			class="w-full rounded-md bg-white px-4 py-2.5 shadow outline-none disabled:cursor-not-allowed disabled:opacity-50"
			@input="
				emit(
					'update:modelValue',
					($event.target as HTMLTextAreaElement).value,
				)
			"
		/>
	</InputWrapper>
</template>
<script setup lang="ts">
	import InputWrapper from "./InputWrapper.vue";
	import type { TextareaProps } from "@/types";

	const {
		id,
		label,
		hint,
		error,
		placeholder,
		modelValue,
		rows = 4,
		disabled = false,
		resize = true,
	} = defineProps<TextareaProps>();

	const emit = defineEmits<{
		"update:modelValue": [value: string];
	}>();
</script>
