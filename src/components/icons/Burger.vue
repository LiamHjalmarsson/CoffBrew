<template>
	<button
		type="button"
		class="relative z-50 flex h-12 items-center justify-center cursor-pointer"
		@click="open = !open"
	>
		<div class="relative h-5 w-6 overflow-hidden">
			<span
				class="top-0"
				:class="[
					lineStyle,
					open && 'top-1/2 -translate-y-1/2 -rotate-45',
				]"
			/>

			<span
				class="top-1/2 -translate-y-1/2 ease-linear"
				:class="[lineStyle, open && 'translate-x-full opacity-0']"
			/>

			<span
				class="bottom-0"
				:class="[
					lineStyle,
					open && 'top-1/2 -translate-y-1/2 rotate-45',
				]"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
	const open = defineModel<boolean>("open");

	const lineStyle =
		"absolute left-0 h-0.5 w-full bg-background-black transition-all duration-200";
</script>
