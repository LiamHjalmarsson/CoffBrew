<template>
	<div class="h-screen flex max-md:flex-col">
		<Sidebar> </Sidebar>

		<div class="flex flex-col">
			<RouterView />
		</div>
	</div>
</template>
<script setup lang="ts">
	import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
</script>
