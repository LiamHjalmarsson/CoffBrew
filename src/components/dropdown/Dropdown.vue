<template>
	<div class="relative inline-block">
		<div
			ref="triggerRef"
			@click="toggle"
		>
			<slot
				name="trigger"
				:is-open="isOpen"
			/>
		</div>

		<Transition
			enter-active-class="transition duration-150 ease-out"
			enter-from-class="opacity-0 scale-95"
			enter-to-class="opacity-100 scale-100"
			leave-active-class="transition duration-100 ease-in"
			leave-from-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-95"
		>
			<div
				v-if="isOpen"
				ref="dropdownRef"
				:class="[
					placement === 'top' ? 'bottom-full mb-1' : 'top-full mt-1',
					width === 'trigger' ? 'w-full' : 'w-max min-w-full',
					'absolute left-0 z-50 origin-top-left',
				]"
			>
				<slot
					:close="close"
					:is-open="isOpen"
				/>
			</div>
		</Transition>
	</div>
</template>
<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from "vue";

	const {
		placement = "bottom",
		width = "trigger",
		disabled = false,
	} = defineProps<{
		placement?: "bottom" | "top";
		width?: "trigger" | "auto";
		disabled?: boolean;
	}>();

	const isOpen = ref(false);

	const triggerRef = ref<HTMLElement>();

	const dropdownRef = ref<HTMLElement>();

	const toggle = () => {
		if (disabled) return;
		isOpen.value = !isOpen.value;
	};

	const close = () => {
		isOpen.value = false;
	};

	const onClickOutside = (event: MouseEvent) => {
		if (
			!triggerRef.value?.contains(event.target as Node) &&
			!dropdownRef.value?.contains(event.target as Node)
		) {
			close();
		}
	};

	const onKeydown = (event: KeyboardEvent) => {
		if (event.key === "Escape") close();
	};

	onMounted(() => {
		document.addEventListener("mousedown", onClickOutside);

		document.addEventListener("keydown", onKeydown);
	});

	onUnmounted(() => {
		document.removeEventListener("mousedown", onClickOutside);

		document.removeEventListener("keydown", onKeydown);
	});

	defineExpose({ isOpen, open: () => (isOpen.value = true), close, toggle });
</script>
