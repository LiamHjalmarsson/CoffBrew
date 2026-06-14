<template>
	<div class="relative flex flex-col gap-2">
		<label
			v-if="label"
			:for="id"
			:class="[
				'absolute left-4 z-10 bg-neutral-50  px-1 pointer-events-none transition-all duration-200 ease-out',
				focused || (modelValue !== undefined && modelValue.length > 0)
					? 'top-0 -translate-y-1/2 text-xs'
					: 'top-1/2 -translate-y-1/2 text-base',
			]"
		>
			<span
				v-if="icon"
				class="inline-flex mr-1"
			>
				<Icon :icon="icon" />
			</span>

			{{ label }}
		</label>

		<slot />

		<p
			v-if="error"
			class="text-warning text-xs"
		>
			{{ error }}
		</p>

		<div
			v-if="hint"
			class="absolute right-0 top-0 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-100"
		>
			!
		</div>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";

	interface InputWrapperProps {
		label?: string;
		id?: string;
		error?: string;
		hint?: string;
		icon?: string;
		modelValue?: string;
		focused?: boolean;
	}

	defineProps<InputWrapperProps>();
</script>
