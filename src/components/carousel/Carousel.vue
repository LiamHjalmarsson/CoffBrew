<template>
	<div class="w-full relative px-12">
		<Button
			color="primary"
			size="xs"
			class="w-12 h-12 flex justify-center items-center !rounded-full absolute left-0"
		>
			<Icon
				icon="weui:arrow-filled"
				:inline="true"
				flip="horizontal"
				class="text-4xl"
			/>
		</Button>

		<div>
			<slot />
		</div>

		<Button
			color="primary"
			size="xs"
			class="w-12 h-12 flex justify-center items-center !rounded-full absolute right-0"
		>
			<Icon
				icon="weui:arrow-filled"
				:inline="true"
				class="text-4xl"
			/>
		</Button>
	</div>
</template>
<script setup lang="ts">
	import { Icon } from "@iconify/vue";
	import Button from "../ui/button/Button.vue";
</script>
