<template>
    <InputWrapper :id="id" :error="error" :hint="hint">
        <label
            :for="id"
            class="flex cursor-pointer items-start gap-2.5"
            :class="disabled && 'cursor-not-allowed opacity-50'"
        >
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                :disabled="disabled"
                class="mt-0.5 size-4 shrink-0 cursor-pointer accent-primary-500 disabled:cursor-not-allowed"
                @change="
                    emit(
                        'update:modelValue',
                        ($event.target as HTMLInputElement).checked,
                    )
                "
            />

            <span v-if="label" class="select-none text-sm">
                {{ label }}
            </span>
        </label>
    </InputWrapper>
</template>
<script setup lang="ts">
import InputWrapper from "./InputWrapper.vue";
import type { CheckboxProps } from "@/types";

const {
    id,
    label,
    hint,
    error,
    modelValue,
    disabled = false,
} = defineProps<CheckboxProps>();

const emit = defineEmits<{
    "update:modelValue": [value: boolean];
}>();
</script>
