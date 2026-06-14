import type { Toast } from "@/types";
import { ref } from "vue";

const toasts = ref<Toast[]>([]);

let counter = 0;

const timers = new Map<number, ReturnType<typeof setTimeout>>();

function add(toast: Omit<Toast, "id">) {
	const id = ++counter;

	toasts.value.push({ id, ...toast });

	timers.set(
		id,
		setTimeout(() => remove(id), toast.duration ?? 4000),
	);
}

function remove(id: number) {
	clearTimeout(timers.get(id));

	timers.delete(id);

	toasts.value = toasts.value.filter((t) => t.id !== id);
}

export function useToast() {
	return {
		toasts,
		add,
		remove,
		success: (title: string, message?: string) =>
			add({ type: "success", title, message }),
		error: (title: string, message?: string) =>
			add({ type: "error", title, message }),
		warning: (title: string, message?: string) =>
			add({ type: "warning", title, message }),
		info: (title: string, message?: string) =>
			add({ type: "info", title, message }),
	};
}
