<template>
	<InputWrapper
		:id="id"
		:label="label"
		:error="error"
		:hint="hint"
	>
		<Dropdown
			width="trigger"
			:disabled="disabled"
		>
			<!-- ── Trigger ─────────────────────────────────────────────────── -->
			<template #trigger="{ isOpen }">
				<button
					:id="id"
					type="button"
					:disabled="disabled"
					:class="[
						isOpen
							? 'ring-2 ring-primary/20 border-primary'
							: 'border-transparent',
						'flex w-full items-center justify-between gap-2 rounded-md bg-white px-4 py-2.5 shadow outline-none transition disabled:cursor-not-allowed disabled:opacity-50',
					]"
				>
					<!-- Single: plain text -->
					<span
						v-if="!multiple"
						:class="
							singleValue
								? 'text-neutral-900'
								: 'text-neutral-400'
						"
					>
						{{ singleLabel }}
					</span>

					<!-- Multi: tags or placeholder -->
					<template v-else>
						<span
							v-if="!multiValue.length"
							class="text-neutral-400"
						>
							{{ placeholder }}
						</span>

						<div
							v-else
							class="flex flex-wrap gap-1.5"
						>
							<span
								v-for="val in multiValue"
								:key="val"
								class="inline-flex items-center gap-1 rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700"
							>
								{{
									options.find((o) => o.value === val)?.label
								}}

								<button
									type="button"
									class="hover:text-primary-900"
									@click.stop="toggle(val)"
								>
									<svg
										class="size-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</span>
						</div>
					</template>

					<!-- Right side icons -->
					<div class="ml-auto flex shrink-0 items-center gap-1">
						<button
							v-if="multiple && multiValue.length"
							type="button"
							class="text-neutral-300 hover:text-neutral-500"
							@click="clearAll"
						>
							<svg
								class="size-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<svg
							class="size-4 text-neutral-400 transition-transform duration-150"
							:class="isOpen && 'rotate-180'"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</button>
			</template>

			<!-- ── Options ────────────────────────────────────────────────── -->
			<template #default="{ close }">
				<DropdownMenu>
					<!-- Max counter -->
					<p
						v-if="multiple && max"
						class="px-4 py-1.5 text-xs text-neutral-400"
					>
						{{ multiValue.length }} / {{ max }} selected
					</p>

					<!-- Single options -->
					<template v-if="!multiple">
						<DropdownItem
							v-for="option in options"
							:key="option.value"
							:active="option.value === singleValue"
							:disabled="option.disabled"
							@click="selectSingle(option.value, close)"
						>
							{{ option.label }}
						</DropdownItem>
					</template>

					<!-- Multi options with checkbox -->
					<template v-else>
						<button
							v-for="option in options"
							:key="option.value"
							type="button"
							:disabled="
								option.disabled ||
								(isMaxReached && !isSelected(option.value))
							"
							class="flex w-full items-center gap-3 px-4 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40"
							:class="
								isSelected(option.value)
									? 'text-primary-700'
									: 'text-neutral-700 hover:bg-neutral-50'
							"
							@click="toggle(option.value)"
						>
							<span
								class="inline-flex size-4 shrink-0 items-center justify-center rounded border transition"
								:class="
									isSelected(option.value)
										? 'border-primary-500 bg-primary-500'
										: 'border-neutral-300 bg-white'
								"
							>
								<svg
									v-if="isSelected(option.value)"
									class="size-2.5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</span>

							{{ option.label }}
						</button>
					</template>
				</DropdownMenu>
			</template>
		</Dropdown>
	</InputWrapper>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import Dropdown from "./Dropdown.vue";
	import DropdownMenu from "./DropdownMenu.vue";
	import DropdownItem from "./DropdownItem.vue";
	import type { SelectOption } from "@/types/index.js";

	const {
		placeholder = "Select...",
		disabled = false,
		multiple = false,
		modelValue = undefined,
		options,
		max,
	} = defineProps<{
		id?: string;
		label?: string;
		hint?: string;
		error?: string;
		placeholder?: string;
		options: SelectOption[];
		disabled?: boolean;
		multiple?: boolean;
		max?: number;
		modelValue?: string | string[];
	}>();

	const emit = defineEmits<{
		"update:modelValue": [value: string | string[]];
	}>();

	const singleValue = computed(() =>
		!multiple && typeof modelValue === "string" ? modelValue : "",
	);

	const singleLabel = computed(
		() =>
			options.find((option) => option.value === singleValue.value)
				?.label ?? placeholder,
	);

	const selectSingle = (value: string, close: () => void) => {
		emit("update:modelValue", value);

		close();
	};

	const multiValue = computed(() =>
		multiple && Array.isArray(modelValue) ? modelValue : [],
	);

	const isSelected = (value: string) => multiValue.value.includes(value);

	const isMaxReached = computed(
		() => !!max && multiValue.value.length >= max,
	);

	const toggle = (value: string) => {
		if (isSelected(value)) {
			emit(
				"update:modelValue",
				multiValue.value.filter((v) => v !== value),
			);
		} else {
			if (isMaxReached.value) return;
			emit("update:modelValue", [...multiValue.value, value]);
		}
	};

	const clearAll = (event: MouseEvent) => {
		event.stopPropagation();

		emit("update:modelValue", []);
	};
</script>
