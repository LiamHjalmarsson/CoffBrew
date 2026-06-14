<template>
	<InputWrapper
		:id="id"
		:label="label"
		:error="error"
		:hint="hint"
		:model-value="modelValue"
		:focused="focused"
		class="text-black"
	>
		<input
			:id="id"
			:type="type"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			@focus="focused = true"
			@blur="focused = false"
			class="w-full rounded-md bg-neutral-50 outline-none px-4 py-2.5 shadow"
			@input="
				emit(
					'update:modelValue',
					($event.target as HTMLInputElement).value,
				)
			"
		/>
	</InputWrapper>
</template>
<script setup lang="ts">
	import InputWrapper from "@/components/inputs/InputWrapper.vue";
	import type { InputProps } from "@/types";
	import { ref } from "vue";

	defineProps<InputProps>();

	const emit = defineEmits<{
		"update:modelValue": [value: string];
	}>();

	const focused = ref(false);
</script>
