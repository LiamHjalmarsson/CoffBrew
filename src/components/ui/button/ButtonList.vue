<template>
	<div class="flex gap-4 flex-wrap">
		<LinkButton
			v-for="(button, index) in buttons"
			:key="index"
			:button="button"
			:class="[fullWidth && 'flex-1 justify-center items-center flex']"
			@click="emit('click', button, index)"
		/>
	</div>
</template>

<script setup lang="ts">
	import type { ButtonProps } from "@/types/index.js";
	import LinkButton from "./LinkButton.vue";

	defineProps<{
		buttons: ButtonProps[];
		fullWidth?: boolean;
	}>();

	const emit = defineEmits<{
		click: [button: ButtonProps, index: number];
	}>();
</script>
