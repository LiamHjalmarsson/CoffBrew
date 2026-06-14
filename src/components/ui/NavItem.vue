<template>
	<RouterLink :to="url">
		{{ label }}
	</RouterLink>
</template>

<script lang="ts" setup>
	import type { NavItemProps } from "@/types";

	defineProps<NavItemProps>();
</script>
