<template>
	<Teleport to="body">
		<div class="fixed bottom-6 right-6 z-60 flex flex-col gap-3 items-end">
			<TransitionGroup
				enter-active-class="transition-all duration-300 ease-out"
				enter-from-class="opacity-0 translate-x-8"
				enter-to-class="opacity-100 translate-x-0"
				leave-active-class="transition-all duration-200 ease-in"
				leave-from-class="opacity-100 translate-x-0"
				leave-to-class="opacity-0 translate-x-8"
			>
				<div
					v-for="toast in toasts"
					:key="toast.id"
					class="flex items-start gap-3 px-4 py-3 rounded-lg shadow-lg min-w-72 max-w-sm text-sm"
					:class="toastClass(toast.type)"
				>
					<Icon
						:icon="toastIcon(toast.type)"
						class="size-4 mt-0.5 shrink-0"
					/>

					<div class="flex-1">
						<h4
							v-if="toast.title"
							class="font-semibold"
						>
							{{ toast.title }}
						</h4>
						<p
							v-if="toast.message"
							class="opacity-80"
						>
							{{ toast.message }}
						</p>
					</div>

					<button
						class="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
						@click="remove(toast.id)"
					>
						<Icon
							icon="mdi:close"
							class="size-4"
						/>
					</button>
				</div>
			</TransitionGroup>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	import { useToast } from "@/composables/useToast";
	import type { ToastType } from "@/types/global";
	import { Icon } from "@iconify/vue";

	const { toasts, remove } = useToast();

	function toastClass(type: ToastType) {
		switch (type) {
			case "success":
				return "bg-success text-white";
			case "error":
				return "bg-warning text-white";
			case "warning":
				return "bg-error text-white";
			default:
				return "bg-neutral-900 text-white";
		}
	}

	function toastIcon(type: ToastType) {
		switch (type) {
			case "success":
				return "mdi:check-circle";
			case "error":
				return "mdi:alert-circle";
			case "warning":
				return "mdi:alert";
			default:
				return "mdi:information";
		}
	}
</script>
