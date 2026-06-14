<template>
	<div
		ref="panelRef"
		class="overflow-hidden bg-background-primary fixed inset-0"
	>
		<nav
			ref="navRef"
			class="flex flex-col items-center justify-center h-full gap-6"
		>
			<NavItem
				url="home"
				label="Contact"
				class="text-2xl font-medium text-white"
			/>
		</nav>
	</div>
</template>
<script setup lang="ts">
	import NavItem from "@/components/ui/NavItem.vue";
	import gsap from "@/library/gsap";
	import { onMounted, useTemplateRef, watch } from "vue";

	const open = defineModel<boolean>("open", {
		default: false,
	});

	const panelRef = useTemplateRef("panelRef");

	const navRef = useTemplateRef("navRef");

	onMounted(() => {
		gsap.set(panelRef.value, {
			height: 0,
			transformOrigin: "top right",
			margin: "1rem",
			borderRadius: "1rem",
			visibility: "hidden",
		});
		gsap.set(navRef.value, {
			opacity: 0,
		});
	});

	watch(open, (isOpen) => {
		const items = navRef.value?.children ?? [];

		if (isOpen) {
			gsap.timeline()
				.set(panelRef.value, {
					visibility: "visible",
				})
				.to(panelRef.value, {
					height: "100%",
					duration: 0.7,
					ease: "expo.out",
				})
				.to(
					panelRef.value,
					{
						borderRadius: 0,
						duration: 0.3,
						ease: "power2.out",
					},
					"-=0.65",
				)
				.to(
					panelRef.value,
					{
						margin: 0,
						duration: 0.3,
						ease: "power2.out",
					},
					"-=0.55",
				)
				.to(
					navRef.value,
					{
						opacity: 1,
						duration: 0.2,
						ease: "power2.out",
					},
					"-=0.3",
				)
				.fromTo(
					items,
					{
						opacity: 0,
						x: -40,
					},
					{
						opacity: 1,
						x: 0,
						stagger: 0.08,
						duration: 0.5,
						ease: "power3.out",
					},
					"-=0.2",
				);
		} else {
			gsap.timeline()
				.to(items, {
					opacity: 0,
					y: -12,
					stagger: { each: 0.05, from: "end" },
					duration: 0.2,
					ease: "power2.in",
				})
				.to(
					navRef.value,
					{
						opacity: 0,
						duration: 0.2,
						ease: "power2.in",
					},
					"-=0.15",
				)
				.to(
					panelRef.value,
					{
						margin: "1rem",
						borderRadius: "1rem",
						duration: 0.3,
						ease: "power2.in",
					},
					"-=0.1",
				)
				.to(
					panelRef.value,
					{
						height: 0,
						duration: 0.9,
						ease: "expo.in",
					},
					"-=0.4",
				)
				.set(panelRef.value, { visibility: "hidden" });
		}
	});
</script>
